import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import DasSidebar from "../components/Sidebar";
import DashCreatePosts from "../components/DashCreatePost";
import DashPosts from "../components/DashPosts";

export const AdminDashboard = () => {
	const location = useLocation();
  const [tab, setTab] = useState("");
	const navigate = useNavigate();
	const currentUser = useSelector((state) => state.user);


  useEffect(() => {
		if (!currentUser) {
			navigate("/admin/login");
			return;
		}

    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

	return (
		<div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        <DasSidebar />
      </div>

      {tab === "create-posts" && <DashCreatePosts />}
			{tab === "posts" && <DashPosts />}

    </div>
	)
}
