import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs'

const FooterCom = () => {
	return (
		<Footer container className="border border-t-8 border-teal-500">
			<div className="w-full max-w-7xl mx-auto">
				<div className="grid w-full justify-between sm:flex md:grid-cols-1 items-center">
					<div>
						<Link
							to="/"
							className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
						>
							<span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
								MMO
							</span>
							BT
						</Link>
					</div>

					<div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
						<Footer.Icon href='#' icon={BsFacebook} />
						<Footer.Icon href='#' icon={BsInstagram} />
						<Footer.Icon href='#' icon={BsTwitter} />
						<Footer.Icon href="https://github.com/ashishsen003" icon={BsGithub} />
						<Footer.Icon href='#' icon={BsDribbble} />
					</div>
					
				</div>
				
			</div>
		</Footer>
	);
};

export default FooterCom;
