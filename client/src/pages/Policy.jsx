import React from 'react'

const Policy = () => {
	return (
		<div className="min-h-screen flex items-center justify-center sm:bg-bgcsbh flex-col">
			<h1 className="text-4xl sm:text-white font font-semibold text-center my-7">
				Chính sách bảo hành
			</h1>
			<div className="max-w-4xl mx-auto p-5 text-center bg-white rounded-xl bg-gradient-to-r from-[#90879c] to-purple-900">
				<div className="flex flex-col">
					{/* <h1 className="text-4xl font font-semibold text-center my-7">
						Chính sách bảo hành
					</h1> */}
					<div className="text-xl text-gray-300 flex flex-col gap-6">
						<p>
							Welcome to Ashish's Blog! This blog was created by Ashish Kumar
							as a personal project to Showcase his skills in full stack web
							development by using javascript, react, nodeJs, expressJs, mongoDB as a database.
							Ashish is a passionate developer who loves coding.
						</p>

						<p>This is a blog application with admin dashboard Where Only admin can create a blog and user can read it.
							Other users can add, delete and update the comments. Other users can like the comment on posts of other's post.
							Users can create their account by using Google OAuth as well. User can upload their Profile picture they can delete their account and user can update their Credentials they can sign in sign out.</p>

						<p>
							We encourage you to leave comments on our posts and engage with
							other readers. We believe that a community of learners can help
							each other grow and improve.
						</p>

						<p>
							We encourage you to leave comments on our posts and engage with
							other readers. We believe that a community of learners can help
							each other grow and improve.
						</p>

						<p>
							We encourage you to leave comments on our posts and engage with
							other readers. We believe that a community of learners can help
							each other grow and improve.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Policy