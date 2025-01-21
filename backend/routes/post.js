const router = require("express").Router()
const Post = require("../models/Post");

router.get("/get-posts", async (req, res) => {
	try {
		const posts = await Post.find();
		res.status(200).json(posts);
	} catch (err) {
		res.status(404).json({
			message: "Can not fetch all posts !!!",
			error: err.message
		})
	}
})

router.get("/:postId", async (req, res) => {
	try {
	  const { postId } = req.params;
	  const post = await Post.findById(postId);
	  res.status(200).json(post)
	} catch (err) {
	  res.status(404).json({ 
		message: "Product can not found!", 
		error: err.message 
	  })
	}
  })
  
  module.exports = router;


router.post("/create-post", async (req, res) => {
	try {
		const newPost = new Post({ ...req.body });
		const savePost = await newPost.save();
		res.status(201).json(savePost);
	} catch (err) {
		res.status(500).json({ message: "Post failed", error: err.message });
	}
})

router.delete("/delete-post/:postId", async (req, res) => {
	try {
		const { postId } = req.params;
		await Post.findByIdAndDelete(postId);
		res.status(200).json('The post has been deleted')
	} catch (err) {
		res.status(500).json({ message: "Delete post failed", error: err.message });
	}
})


module.exports = router;
