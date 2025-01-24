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

// router.post("/create-post", async (req, res) => {
// 	try {
// 		const newPost = new Post({ ...req.body });
// 		const savePost = await newPost.save();
// 		res.status(201).json(savePost);
// 	} catch (err) {
// 		res.status(500).json({ message: "Post failed", error: err.message });
// 	}
// })

let postContent = []; // Mảng để lưu trữ các phần nội dung

router.post("/create-post", async (req, res) => {
	try {
		// Kiểm tra xem có phải là phần đầu tiên không
		if (req.body.isFirstPart) {
			postContent = []; // Reset mảng nếu là phần đầu tiên
		}

		// Thêm phần nội dung vào mảng
		postContent.push(req.body.content);

		// Kiểm tra xem có phải là phần cuối cùng không
		if (req.body.isLastPart) {
			console.log("[debug] checking")
			const fullContent = postContent.join(''); // Kết hợp tất cả các phần
			console.log(fullContent);
			const newPost = new Post({ 
				title: req.body.title,
				category: req.body.category, 
				content: fullContent 
			});
			console.log("[debug] checking 2")
			const savePost = await newPost.save();
			console.log("[debug] checking 3")
			postContent = []; // Reset mảng sau khi lưu
			return res.status(201).json(savePost);
		}

		// Nếu không phải là phần cuối cùng, trả về thông báo thành công
		res.status(200).json({ message: "Part received" });
	} catch (err) {
		res.status(500).json({ message: "Post failed", error: err.message });
	}
});

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
