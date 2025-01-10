const multer = require("multer");
const router = require("express").Router()
const Post = require("../models/Post");


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/");
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//         cb(null, `${uniqueSuffix}-${file.originalname}`);
//     },
// });

// const upload = multer({ storage });


// router.post("/upload-image", upload.single("file"), (req, res) => {
//     if (!req.file) {
//         return res.status(400).json({ error: "No file uploaded" });
//     }

//     const imageUrl = `http://localhost:3001/uploads/${req.file.filename}`;
//     res.json({ link: imageUrl });
// });


router.post("/create-post", async (req, res) => {
    try{
        const newPost = new Post({...req.body});
        const savePost = await newPost.save();
        res.status(201).json(savePost);
    } catch (err) {
        res.status(500).json({ message: "Post failed", error: err.message });
    }
})


module.exports = router;
