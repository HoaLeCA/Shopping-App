const Blog = require('../models/blogModel');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const validMongoDbId = require('../utils/validateMongodbId');
const cloudinaryUploadImg = require('../utils/cloudinary');

// @desc    create new product
// @router POST/api/blogs
// @access Private/admin only
const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json(newBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc    Update a blog
// @router PUT/api/blogs/:id
// @access Private/admin only

const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validMongoDbId(id);
  try {
    const updateBlog = await Blog.findOneAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   get blogs
// @router GET/api/blogs/
// @access Public

const getBlogs = asyncHandler(async (req, res) => {
  try {
    const getBlog = await Blog.find({});
    res.json(getBlog);
  } catch (error) {
    throw new Error(error);
  }
});
// @desc   get a blog
// @router GET/api/blogs/:id
// @access Public

const getaBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validMongoDbId(id);
  try {
    const getaBlog = await Blog.findById(id);
    // update number of views
    await Blog.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: 1 },
      },
      { new: true }
    );
    res.json(getaBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Delete a blog
// @router delete/api/blogs/:id
// @access Private/admin only

const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validMongoDbId(id);
  try {
    const updateBlog = await Blog.findByIdAndDelete(id);
    res.json(updateBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   like a blog
// @router put/api/blogs/:id
// @access public

const likeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  // find a blog based on blogId
  const blog = await Blog.findById(blogId);
  // find a login user
  const loginUserId = req?.user?._id;

  //find a user has liked a post
  const isLiked = blog?.isLiked;
  // find a user had disliked a post
  const alreadyDisliked = blog?.disLikes.find(
    (userId) => userId.toString() === loginUserId.toString()
  );
  if (alreadyDisliked) {
    // find the blog of this user and update
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { disLikes: loginUserId },
        isDisliked: false,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  }
  if (isLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { likes: loginUserId },
        isLiked: true,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  }
});
// @desc   dislike a blog
// @router put/api/blogs/:id
// @access public

const dislikeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  // find a blog based on blogId
  const blog = await Blog.findById(blogId);
  // find a login user
  const loginUserId = req?.user?._id;

  //find a user has disliked a post
  const isDisliked = blog?.isDisliked;

  // find a user had liked a post
  const alreadyLiked = blog?.likes.find(
    (userId) => userId.toString() === loginUserId.toString()
  );
  if (alreadyLiked) {
    // find the blog of this user and update
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  }
  if (isDisliked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { disLikes: loginUserId },
        isDisliked: false,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { disLikes: loginUserId },
        isDisliked: true,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  }
});

// upload images function
// @desc   admin can load images with related blog
// @router PUT/api/upload/:id (id is blog id)
// @access Private/admin only

const uploadImages = asyncHandler(async (req, res) => {
  const { id } = req.params;

  validMongoDbId(id);
  try {
    const urls = [];
    const files = req.files;

    for (const file of files) {
      const { path } = file;

      const newPath = await cloudinaryUploadImg(path, `images`);
      urls.push(newPath);
    }

    const findBlog = await Blog.findByIdAndUpdate(
      id,
      {
        $set: { images: urls },
      },
      {
        new: true,
      }
    );
    if (!findBlog) {
      res.status(404).json({ message: 'Blog not found' });
      return;
    }
    res.json(findBlog);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBlog,
  updateBlog,
  getBlogs,
  getaBlog,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadImages,
};
