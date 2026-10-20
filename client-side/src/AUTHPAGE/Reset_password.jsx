import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

const Reset_page = () => {

    const { register, handleSubmit, formState: { error } } = useForm()
    const resetToken = localStorage.getItem("resetToken")
    const onSubmit = async (data) => {
        try {
            console.log(resetToken)
            const response = await axios.post(
                "http://localhost:3001/reset-password",
                {
                    password: data.password
                },
                {
                    headers: {
                        Authorization: `Bearer ${resetToken}`
                    }
                }
            );

            console.log(response.data);
        }
        catch (e) {
            localStorage.removeItem("resetToken")
            console.log("frontend side error")
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
                        Enter your <span>New Password</span>
                    </p>
                    <br />
                    <input
                        type="text"{...register("password")}
                        placeholder="ENTER YOUR PASSWORD"
                    />
                    <button className="submit">
                        DONE
                    </button>
                </form>
                <p className="link">
                    Back to Login?
                    <Link to="/">Login</Link>
                </p>
            </div>
        </>
    )
}

export default Reset_page