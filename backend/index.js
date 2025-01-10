const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();


const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');

const app = express();
app.use(cors());
app.use(express.json());


app.use("/auth", authRoutes);
app.use("/post", postRoutes);


const PORT = 3001;


app.get("/", (req, res) => {
    res.json("Hello");
}) 


mongoose.connect(process.env.MONGO_URL, {
    dbName: "mmoInfo",
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
})
.catch((err) => console.log(`${err} did not connect`));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, `${uniqueSuffix}-${file.originalname}`);
    },
});

const upload = multer({ storage });


app.post("/upload-image", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    const imageUrl = `http://localhost:3001/uploads/${req.file.filename}`;
    res.json({ link: imageUrl });
});


app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// app.post("/save-post", (req, res) => {
//     const { content } = req.body;

//     if (!content) {
//         return res.status(400).json({ error: "No content provided" });
//     }

//     // Lưu nội dung bài viết vào file hoặc database
//     fs.writeFileSync("posts/post.html", content, "utf-8");

//     res.json({ message: "Post saved successfully" });
// });
