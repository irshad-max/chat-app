import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login_page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const Usenagivation = useNavigate();
    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:3001/login", data)
            localStorage.setItem("token", response.data.token)
            if (response.status == 200) {
                Usenagivation("/chatarea");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="Login_containers">
                <div className="Logo">
                    <img src="/photo/logo.png" alt="logo" />
                </div>
                <div className="welcome_greeting_card">
                    <p>Welcome back</p>
                </div>
                <p className="greeting_text">
                    Sign in to <span>Baatchit</span>
                </p>
                <form className="Form" onSubmit={handleSubmit(onSubmit)}>
                    <label>Username</label>
                    <br />
                    <input
                        type="text"
                        {...register("email", {
                            required: "Email is required",
                            maxLength: 30,
                            minLength: 3,
                        })}
                        placeholder="ENTER YOUR EMAIL"
                    />
                    {errors.email && <span className="error">{errors.email.message}</span>}
                    <br />
                    <label>Password</label>
                    <br />
                    <input
                        type="text"
                        {...register("password", {
                            required: "Password is required",
                        })}
                        placeholder="ENTER YOUR PASSWORD"
                    />
                    {errors.password && (
                        <span className="error">{errors.password.message}</span>
                    )}
                    <br />
                    <p className="Forgot_pass">
                        <Link to="/forgot" className="a">
                            forgot password?
                        </Link>
                    </p>
                    <br />
                    <button className="submit">Login</button>
                    <br />
                </form>
                <p className="link">
                    New to Baatchit?
                    <Link to="/register" className="a">
                        Sign up
                    </Link>
                </p>
            </div>
        </>
    );
}
export default Login_page;