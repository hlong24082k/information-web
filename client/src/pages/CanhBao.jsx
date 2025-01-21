import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";


const CanhBao = () => {
    const [posts, setPosts] = useState([])

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await fetch(`${process.env.REACT_APP_API_URL}/post/get-posts`);
			const data = await res.json();
			setPosts(data);
		}
		fetchPosts()
	}, [])


	return (
		<div>
			<div className="flex flex-col items-center gap-6 p-28 px-3 mx-auto bg-banner bg-cover bg-center bg-no-repeat">
				<h1 className="text-3xl font-bold lg:text-6xl text-white">Cảnh Báo Lừa Đảo</h1>

				<p className="text-gray-500 text-lg">
					Here you will find a variety of articles and tutorials and topics such
					as History, Automobile and Science etc.
				</p>
				{/* <Link to={'/search'} className="text-xs sm:text-sm text-teal-500 font-bold hover:underline">View all posts</Link> */}
			</div>
			<div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">

				{posts && posts.length > 0 && (
					<div className="flex flex-col gap-6">
						{/* <h2 className="text-2xl font-semibold text-center">Cảnh Báo Lừa Đảo</h2> */}
						<div className="flex flex-wrap gap-4 justify-center">
							{posts.map((post) => (
								<PostCard key={post._id} post={post} />
							))}
						</div>
						<Link to={'/search'} className="text-lg text-teal-500 hover:underline text-center">View all Posts</Link>
					</div>
				)}

			</div>
		</div>
	)
}

export default CanhBao