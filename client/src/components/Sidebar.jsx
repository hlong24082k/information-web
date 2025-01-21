import { Sidebar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiArrowSmRight, HiDocumentText } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setLogout } from "../redux/state";
import { useDispatch, useSelector } from "react-redux";



const DasSidebar = () => {
	const location = useLocation();
	const [tab, setTab] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const currentUser = useSelector((state) => state.user);

	useEffect(() => {
		const urlParams = new URLSearchParams(location.search);
		const tabFromUrl = urlParams.get("tab");
		if (tabFromUrl) {
			setTab(tabFromUrl);
		}
	}, [location.search]);

	const handleSignout = async () => {
		try {
			navigate("/admin/login");
			dispatch(setLogout());
		} catch (error) {
			console.log(error.message);
		}
	};


	return (
		<Sidebar className="w-full md:w-56">
			<Sidebar.Items>
				<Sidebar.ItemGroup className="flex flex-col gap-1">
					{currentUser && (
						<>
							<Link to="/admin?tab=create-posts">
								<Sidebar.Item
									active={tab === "create-posts"}
									icon={HiDocumentText}
									as="div"
								>
									Tạo bài post
								</Sidebar.Item>
							</Link>

							<Link to="/admin?tab=posts">
								<Sidebar.Item
									active={tab === "posts"}
									icon={HiDocumentText}
									as="div"
								>
									Tất cả bài đăng
								</Sidebar.Item>
							</Link>
						</>
					)}
					<Sidebar.Item
						icon={HiArrowSmRight}
						className="cursor-pointer"
						onClick={handleSignout}
					>
						Đăng xuất
					</Sidebar.Item>
					
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	)
}

export default DasSidebar
