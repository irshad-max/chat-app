import { useState } from "react";
import axios from "axios"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Otp_page = () => {

    const { register, handleSubmit, formState: { error } } = useForm();
    //function management
    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:3001/verify-otp", data)
            console.log(response)
        }
        catch (e) {
            console.error("forntend side error")
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
                        type="text"{...register("text")}
                        placeholder="ENTER YOUR OTP"
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
export default Otp_page;