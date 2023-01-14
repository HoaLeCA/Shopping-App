const express = require('express');
const {
  createBlog,
  updateBlog,
  getBlogs,
  getaBlog,
  deleteBlog,
  likeBlog,
  dislikeBlog,
} = require('../controller/blogController');
const { uploadImages } = require('../controller/blogController');
const { protect, admin } = require('../middlewares/authMiddleware');
const { uploadPhoto, blogImgResize } = require('../middlewares/uploadImages');
const router = express.Router();

router.post('/', protect, admin, createBlog); // only admin can create blog
router.put(
  '/upload/:id',
  protect,
  admin,
  uploadPhoto.array('images', 2),
  blogImgResize,
  uploadImages
);
router.put('/likes', protect, likeBlog); // like a blog
router.put('/dislikes', protect, dislikeBlog); // like a blog

router.put('/:id', protect, admin, updateBlog); // only admin can create blog

router.get('/', getBlogs); // get all blogs
router.get('/:id', getaBlog); // get a blog
router.delete('/:id', protect, admin, deleteBlog); // only admin can delete a blog

module.exports = router;
