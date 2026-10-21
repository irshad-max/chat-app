import { useState } from "react";
import axios from "axios"
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
const Forgot_password = () => {

    const { register, handleSubmit, formState: { error } } = useForm()
    const UseNavigate = useNavigate()
    //function management
    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:3001/verify/email", data)
            console.log(response.data.otp)
            if (response.data.otp) {
                localStorage.setItem("email", data.email)
                UseNavigate("/otp")
            }
        }
        catch {
            console.error("frontend side error")
        }
    }
    return (
        <>
            <div className="forgot_containers">
                <div className="Logo">
                    <img src="/photo/logo.png" alt="logo" />
                </div>
                <div className="welcome_greeting_card">
                    <p>Forgot Password</p>
                </div>
                <form className="Forgot_Form" onSubmit={handleSubmit(onSubmit)}>
                    <p>
                        Enter your <span>Email for verification</span>
                    </p>
                    <br />
                    <input
                        type="email"{...register("email")}
                        placeholder="ENTER YOUR EMAIL"

                    />
                    <button className="submit">
                        verify
                    </button>
                </form>
                <p className="link">
                    Back to Login?
                    <Link to="/">Login</Link>
                </p>
            </div>
        </>
    );
};
export default Forgot_password;