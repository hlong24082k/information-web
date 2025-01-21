import { Button } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import imgCard from '../assets/imgcard.jpeg';


const Detail = () => {
	const { postSlug } = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const res = await fetch(`${process.env.REACT_APP_API_URL}/post/${postSlug}`)
				const data = await res.json()
				if (!res.ok) {
					toast.error("Fail");
					return
				}
				if (res.ok) {
					setPost(data)
					toast.success("ok")
				}
			} catch (error) {
				toast.error(error)
			}
		}
		fetchPost()
	}, [postSlug])

	return (
		<main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
			<h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>{post && post.title}</h1>
			<Link to={`/${post && post.category}`} className='self-center mt-5'>
				<Button color='gray' pill size='xs'>{post && post.category}</Button>
			</Link>
			<img src={imgCard} alt={post && post.title} className='mt-10 p-3 max-h-[400px] w-full object-cover' />
			<div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-7xl text-xs'>
				<span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
				<span className='italic'>{post && (post.content.length / 1000).toFixed(0)} mins read</span>
			</div>
			<div className='p-3 max-w-7xl mx-auto w-full post-content' dangerouslySetInnerHTML={{ __html: post && post.content }}></div>
			<div className='max-w-4xl mx-auto w-full'></div>
		</main>
	)
}

export default Detail