import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal, Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";


const DashPosts = () => {
	const { currentUser } = useSelector((state) => state.user);
	const [posts, setPosts] = useState([]);
	const [showModal, setShowModal] = useState(false)
	const [postIdToDelete, setPostIdToDelete] = useState('')

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await fetch(`${process.env.REACT_APP_API_URL}/post/get-posts`);
				const data = await res.json();
				console.log(data)
				if (res.ok) {
					setPosts(data);

				}
			} catch (error) {
				console.log(error.message);
			}
		};
		fetchPosts();
	}, [currentUser]);

	const handleDeletePost = async()=>{
    setShowModal(false)
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/post/delete-post/${postIdToDelete}`,{
        method: 'DELETE'
      })
      const data = await res.json()
      console.log(data);
      if(!res.ok){
        console.log(data.message);
      } else {
        setPosts((prev)=>prev.filter((post)=>post._id !== postIdToDelete))
      }
    } catch (error) {
      console.log(error.message);
    }
  }

	return (
		<div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">

			<Table hoverable className="shadow-md">
				<Table.Head>
					<Table.HeadCell>Date created</Table.HeadCell>
					<Table.HeadCell>Date updated</Table.HeadCell>
					<Table.HeadCell>Post image</Table.HeadCell>
					<Table.HeadCell>Post title</Table.HeadCell>
					<Table.HeadCell>Category</Table.HeadCell>
					<Table.HeadCell>Delete</Table.HeadCell>
					<Table.HeadCell>
						<span>Edit</span>
					</Table.HeadCell>
				</Table.Head>
				{posts.map((post) => (
					<Table.Body className="divide-y" key={post._id}>
						<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" >
							<Table.Cell>
								{new Date(post.createdAt).toLocaleDateString()}
							</Table.Cell>
							<Table.Cell>
								{new Date(post.updatedAt).toLocaleDateString()}
							</Table.Cell>
							<Table.Cell>
								<Link to={`/post/${post.slug}`}>
									<img
										src={post.image}
										alt={post.title}
										className="w-20 h-10 object-cover bg-gray-500"
									/>
								</Link>
							</Table.Cell>
							<Table.Cell>
								<Link className="font-medium text-gray-900 dark:text-white" to={`/post/${post.slug}`}>{post.title}</Link>
							</Table.Cell>
							<Table.Cell>{post.category}</Table.Cell>
							<Table.Cell>
								<span className="font-medium text-red-500 hover:underline cursor-pointer" onClick={() => { setShowModal(true); setPostIdToDelete(post._id); }}>Delete</span>
							</Table.Cell>
							<Table.Cell>
								<Link className="text-teal-500 hover:underline cursor-pointer" to={`/update-post/${post._id}`}>
									<span>Edit</span>
								</Link>
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				))}
			</Table>
			{/* {showMore && (
					<button onClick={handleShowMore} className="w-full text-teal-500 self-center text-sm py-7 ">show more</button>
				)} */}

			<Modal
				show={showModal}
				onClose={() => setShowModal(false)}
				popup
				size="md"
			>
				<Modal.Header />
				<Modal.Body>
					<div className="text-center">
						<HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
						<h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
							Are you sure you want to delete this post?
						</h3>
						<div className="flex justify-between">
							<Button color="failure" onClick={handleDeletePost}>
								Yes, I'm sure
							</Button>
							<Button color="gray" onClick={() => setShowModal(false)}>
								No, Cancel
							</Button>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</div>
	)
}

export default DashPosts