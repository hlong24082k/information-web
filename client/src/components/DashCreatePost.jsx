import React, { useState } from "react";
import { toast } from 'react-toastify';
import { Button, Select, TextInput } from "flowbite-react";


import FroalaEditorComponent from "react-froala-wysiwyg";

import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins/align.min.js";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/video.min.js";
import "froala-editor/js/plugins/table.min.js";


const DashCreatePosts = () => {
	const [formData, setFormData] = useState({});
	const [content, setContent] = useState("");


	const handleModelChange = (model) => {
		setContent(model);
		setFormData({ ...formData, content: content })
	};

	console.log(formData);


	const handleSubmit = async (e) => {
		e.preventDefault();
		const maxSize = 1000; // Kích thước tối đa cho mỗi phần (ví dụ: 1000 ký tự)
		const contentParts = [];

		// Chia nhỏ nội dung thành các phần
		for (let i = 0; i < content.length; i += maxSize) {
			contentParts.push(content.slice(i, i + maxSize));
		}

		try {
			for (let i = 0; i < contentParts.length; i++) {
				const isFirstPart = i === 0;
				const isLastPart = i === contentParts.length - 1;

				const res = await fetch(`${process.env.REACT_APP_API_URL}/post/create-post`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ 
						...formData, 
						content: contentParts[i], 
						isFirstPart, 
						isLastPart 
					}), // Gửi từng phần
				});

				// const data = await res.json();
				if (!res.ok) {
					toast.error("Post failed!!!");
					return;
				}
			}
			toast.success("All parts posted successfully!!!");
		} catch (error) {
			console.log(error);
			toast.error("An error occurred while posting.");
		}
	};

	return (
		<div className="p-3 w-full h-screen">
			<h1 className="text-center text-3xl my-7 font-semibold">Tạo bài Post</h1>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-4 sm:flex-row justify-between">
					<TextInput
						type="text"
						placeholder="Tiêu đề"
						required
						id="title"
						className="flex-1"
						onChange={(e) =>
							setFormData({ ...formData, title: e.target.value })
						}
					/>
					<Select
						onChange={(e) =>
							setFormData({ ...formData, category: e.target.value })
						}
					>
						<option value="uncategorized">Select a category</option>
						<option value="camnangmmo">Cẩm nang mmo</option>
						<option value="canhbaoluadao">Cẩm báo lừa đảo</option>
					</Select>
				</div>
				<FroalaEditorComponent
					tag="textarea"
					model={content}
					onModelChange={handleModelChange}
					config={{
						toolbarButtons: [
							"bold", "italic", "underline", "strikeThrough",
							"paragraphFormat", "align", "formatOL", "formatUL",
							"insertTable", "insertImage", "insertVideo",
							"fullscreen", "html", "undo", "redo",
						],
						imageUpload: true,
						// Xóa imageUploadURL vì chúng ta sẽ xử lý upload bằng Base64
						imageAllowedTypes: ["jpeg", "jpg", "png", "gif"],
						events: {
							'image.uploaded': function (response) {
								// Xử lý upload ảnh ở đây
								const base64Image = response; // Giả sử response là Base64
								this.image.insert(base64Image, null, null, this.image.get());
							},
							'image.beforeUpload': function (files) {
								// Chuyển đổi file thành Base64
								const reader = new FileReader();
								reader.onloadend = () => {
									const base64Image = reader.result; // Lưu Base64
									this.image.insert(base64Image, null, null, this.image.get());
								};
								reader.readAsDataURL(files[0]); // Chuyển đổi file đầu tiên thành Base64
								return false; // Ngăn chặn Froala thực hiện upload mặc định
							}
						}
					}}
				/>
				<Button type="submit" gradientDuoTone="purpleToPink">
					Publish
				</Button>
			</form>
		</div>
	)
}

export default DashCreatePosts