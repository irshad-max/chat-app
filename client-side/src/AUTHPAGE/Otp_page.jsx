import { useState } from "react";
import axios from "axios"
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { use } from "react";
const Otp_page = () => {

    const { register, handleSubmit, formState: { error } } = useForm();
    const email = localStorage.getItem("email")
    const UseNegivate = useNavigate()
    //function management
    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:3001/verify-otp", {
                email: email,
                otp: data.otp
            })
            localStorage.setItem("resetToken", response.data.resetToken)
            if (response.status == 200) {
                UseNegivate("/reset/password")
                localStorage.removeItem("email");
            }
        }
        catch (e) {
            console.error("forntend side error")
        }
    }
    const resend_otp = async () => {
        try {
            const response = await axios.post("http://localhost:3001/resend-otp", {
                email: email
            })
            console.log(response.data.otp)
        }
        catch (e) {
            console.log("forntend side error")
        }
    }
    return (
        <>
            <div className="forgot_containers">
                <div className="Logo">
                    <img src="/photo/logo.png" alt="logo" />
                </div>
                <div className="welcome_greeting_card">
                    <p>Otp Verification</p>
                </div>
                <form className="Forgot_Form" onSubmit={handleSubmit(onSubmit)}>
                    <p>
                        Enter your <span>Otp for verification</span>
                    </p>
                    <br />
                    <input
                        type="text"{...register("otp")}
                        placeholder="ENTER YOUR OTP"
                    />
                    <button className="submit">
                        verify
                    </button>
                </form>
                <button className="submit" onClick={() => resend_otp()}>
                    resend-otp
                </button>
                <p className="link">
                    Back to Login?
                    <Link to="/">Login</Link>
                </p>
            </div>
        </>
    );
};
export default Otp_page;