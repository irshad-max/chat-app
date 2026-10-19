import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login_page from "./AUTHPAGE/Login_page";
import Register_page from "./AUTHPAGE/Register_page";
import Forgot_password from "./AUTHPAGE/Forgot_password";
import Otp_page from "./AUTHPAGE/Otp_page";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login_page />} />
          <Route path="/register" element={<Register_page />} />
          <Route path="/forgot" element={<Forgot_password />} />
          <Route path="/otp" element={<Otp_page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;