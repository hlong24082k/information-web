import { Navbar } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";


const Header = () => {
	const path = useLocation().pathname;


	return (
		<Navbar className="border-b-2">
			<Link
				to="/"
				className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
			>
				<span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
					MMO
				</span>
				BT
			</Link>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Navbar.Link active={path === "/"} as={"div"}>
					<Link to="/">Cẩm nang MMO</Link>
				</Navbar.Link>
				<Navbar.Link active={path === "/projects"} as={"div"}>
					<Link to="/chinhsachbaohanh">Chính sách bảo hành</Link>
				</Navbar.Link>
				<Navbar.Link active={path === "/about"} as={"div"}>
					<Link to="/canhbaoluadao">Cảnh báo lừa đảo</Link>
				</Navbar.Link>
				<Navbar.Link active={path === "/about"} as={"div"}>
					<Link to="/cauhoithuonggap">Câu hỏi thường gặp</Link>
				</Navbar.Link>
				<Navbar.Link active={path === "/about"} as={"div"}>
					<Link to="/lienhe">Liên hệ</Link>
				</Navbar.Link>
			</Navbar.Collapse> 
		</Navbar>
	)
}

export default Header
