import React, { useState } from "react";
import { toast } from 'react-toastify';
import {  Button, Select, TextInput } from "flowbite-react";


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


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch(`${process.env.REACT_APP_API_URL}/post/create-post`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			if (!res.ok) {
				toast.error("Post failed!!!");
				return;
			}
			if (res.ok) {
				toast.success("Post success!!!");
			}
		} catch (error) {
			console.log(error)
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
						imageUploadURL: `${process.env.REACT_APP_API_URL}/upload-image`,
						imageAllowedTypes: ["jpeg", "jpg", "png", "gif"],
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