import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Header from "./components/Header";
import FooterCom from './components/Footer';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';
import Home from './pages/Home';
import Policy from './pages/Policy';
import QA from './pages/QA';
import CanhBao from './pages/CanhBao';
import Detail from './pages/Detail';

function App() {
  return (
    <>
      <BrowserRouter className="text-3xl text-red-400">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camnangmmo" element={<Home />} />
          <Route path="/chinhsachbaohanh" element={<Policy />} />
          <Route path="/cauhoithuonggap" element={<QA />} />
          <Route path="/canhbaoluadao" element={<CanhBao />} />
          <Route path="/post/:postSlug" element={<Detail />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
        {/* <FooterCom /> */}
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
