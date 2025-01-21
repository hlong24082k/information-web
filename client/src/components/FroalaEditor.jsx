import React, { useState } from "react";
import FroalaEditorComponent from "react-froala-wysiwyg";

import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins/align.min.js";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/video.min.js";
import "froala-editor/js/plugins/table.min.js";

import "./FroalaEditor.css";


const FroalaEditor = () => {
    const [content, setContent] = useState("");

    const handleModelChange = (model) => {
        setContent(model);
    };

    return (
        <>
            <FroalaEditorComponent
                tag="textarea"
                model={content}
                onModelChange={handleModelChange}
                config={{
                    toolbarButtons: [
                        "bold", "italic", "underline", "strikeThrough", // Định dạng chữ
                        "paragraphFormat", "align", "formatOL", "formatUL", // Kiểu đoạn văn và danh sách
                        "insertTable", "insertImage", "insertVideo", // Chèn bảng, ảnh, video
                        "fullscreen", "html", "undo", "redo", // Công cụ nâng cao
                    ],
                    imageUpload: true,
                    imageUploadURL: `${process.env.REACT_APP_API_URL}/upload-image`, // URL API upload ảnh
                    imageAllowedTypes: ["jpeg", "jpg", "png", "gif"], // Giới hạn loại file
                }}
            />

            <h1>Post Viewer</h1>
            <div className="editor" dangerouslySetInnerHTML={{ __html: content }} /> {/* Hiển thị nội dung HTML */}
        </>
    );
};

export default FroalaEditor;
