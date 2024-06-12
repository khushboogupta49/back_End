const express = require("express");
const router = express.Router();
const { isAuth } = require("../middlewares/auth.js");
const {
  createStory,
  getStories,
  getStoryById,
  updateStory,
} = require("../controllers/story.js");
const { likeStory } = require("../controllers/like.js");

// routes
router.post("/create", createStory);
router.get("/getAll", getStories);
router.get("/getById/:storyId", getStoryById);
router.put("/update/:id", updateStory);
router.put("/like/:id", likeStory);

module.exports = router;