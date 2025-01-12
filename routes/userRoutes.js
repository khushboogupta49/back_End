const express = require("express");
const router = express.Router();

const {register,login,logoutUser,loadUser,} = require("../controllers/user.js");

const {bookmarkStory,getAllBookmarks,} = require("../controllers/bookmark.js");

const { isAuth } = require("../middlewares/auth.js");

// auth routes
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logoutUser);
router.post("/load/:username", loadUser);

// bookmark routes
router.post("/bookmark/:id", bookmarkStory);
router.get("/bookmarks/:userId", getAllBookmarks);

module.exports = router;