import { useEffect } from "react";
import axios from "axios"
import { Route, Routes, useNavigate } from "react-router-dom";
import Login_page from "./AUTHPAGE/Login_page";
import Register_page from "./AUTHPAGE/Register_page";
import Forgot_password from "./AUTHPAGE/Forgot_password";
import Otp_page from "./AUTHPAGE/Otp_page";
import Reset_page from "./AUTHPAGE/Reset_password";
import SideBar_page from "./Sidebar";
import "./App.css";

function App() {
  const UseNavigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token")
    const autologin = async () => {
      try {
        const response = await axios.post("http://localhost:3001/auto/login", {}, {
          headers: {
            authorization: `Breare ${token}`
          }
        })
        if (response.status == 200) {
          UseNavigate("/chatarea")
        }
      }
      catch (e) {
        console.log("error", e)
      }
    }
    autologin();
  }, [UseNavigate])

  return (
    <>
      <Routes>
        <Route path="/" element={<Login_page />} />
        <Route path="/register" element={<Register_page />} />
        <Route path="/forgot" element={<Forgot_password />} />
        <Route path="/otp" element={<Otp_page />} />
        <Route path="/reset/password" element={<Reset_page />} />
        <Route path="/chatarea" element={<SideBar_page />} />
      </Routes>
    </>
  );
}

export default App;