import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Button, Label, TextInput } from 'flowbite-react';
import { toast } from 'react-toastify';
import {useDispatch} from 'react-redux'


import { setLogin } from '../redux/state';


export const AdminLogin = () => {
	const [formData, setFormData] = useState({});
	const dispatch = useDispatch();
	const navigate = useNavigate();

	console.log()

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (!formData.username || !formData.password) {
			toast.error("Vui long nhap username/password!!!");
			return;
		}
		try {
			const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			})

			const data = await res.json()
			if (!res.ok) {
				toast.error("Vui long nhap lai!!!")
			}
			if (res.ok) {
				toast.success("Login successful!!!")
				dispatch(setLogin(data));
				navigate('/admin');
			}
		} catch (error) {
			toast.error(error)
		}
	}

	return (
		<div className='min-h-screen flex items-center'>
			<div className='p-20 max-w-3xl mx-auto flex flex-col md:flex-row md:items-center gap-5 border rounded-xl'>
				{/* left */}
				<div className='flex-1'>
					<Link
						to="/"
						className="font-bold dark:text-white text-4xl"
					>
						<span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
							Tuan Bui 
						</span>
						Admin
					</Link>
					<p className='text-sm mt-5'>
						This is a demo project. You can sign in with your email and password or with Google.
					</p>
				</div>
				{/* right */}
				<div className='flex-1'>
					<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
						<div >
							<Label value='Username' />
							<TextInput type='text' placeholder='Input username' id='username' onChange={handleChange} />
						</div>
						<div >
							<Label value='Password' />
							<TextInput type='password' placeholder='*********' id='password' onChange={handleChange} />
						</div>
						<Button gradientDuoTone='purpleToPink' type='submit'>Sign In</Button>
					</form>
				</div>
			</div>
		</div>
	)
}
