import { useEffect } from "react";
import axios from "axios"
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Login_page from "./AUTHPAGE/Login_page";
import Register_page from "./AUTHPAGE/Register_page";
import Forgot_password from "./AUTHPAGE/Forgot_password";
import Otp_page from "./AUTHPAGE/Otp_page";
import Reset_page from "./AUTHPAGE/Reset_password";
import SideBar_page from "./SIDEBAR_CONTENT/Sidebar";
import Request_list from "./SIDEBAR_CONTENT/Request_list";
import Friend_list from "./SIDEBAR_CONTENT/Friend_lisrt";
import Setting_option from "./SETTING_TYPE/Setting_option";
import ProfileSettings from "./SETTING_TYPE/ProfileSettings.";
import "./App.css";

function App() {
  const UseNavigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const autologin = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/auto/login",
          {},
          {
            headers: {
              authorization: `Bearer ${token}`
            }
          }
        );
        if (response.status === 200 && location.pathname === "/") {
          UseNavigate("/chatarea", { replace: true });
        }
      } catch (e) {
        console.log("Auto-login error:", e);
      }
    };

    autologin();
  }, [UseNavigate, location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login_page />} />
        <Route path="/register" element={<Register_page />} />
        <Route path="/forgot" element={<Forgot_password />} />
        <Route path="/otp" element={<Otp_page />} />
        <Route path="/reset/password" element={<Reset_page />} />
        <Route path="/chatarea" element={<SideBar_page />} />
        <Route path="/request" element={<Request_list />} />
        <Route path="/friend/list" element={<Friend_list />} />
        <Route path="/setting/option" element={<Setting_option />} />
        <Route path="/profile/setting" element={<><Setting_option /> <ProfileSettings /></>} />
      </Routes>
    </>
  );
}

export default App;