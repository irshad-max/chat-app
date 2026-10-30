import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register_page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const Usenagivation = useNavigate();
    const onSubmit = async (data) => {
        const fileInput = document.getElementById("photo");
        const file = fileInput.files[0];
        try {
            const formData = new FormData();
            formData.append("name", data.name)
            formData.append("email", data.email)
            formData.append("password", data.password)
            if (file) {
                formData.append("profileImage", file)
            }
            const response = await axios.post("http://localhost:3001/register", formData)
            if (response.data.status == 200) {
                Usenagivation("/home");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="Registr_containers">
                <div className="Logo">
                    <img src="/photo/logo.png" alt="logo" />
                </div>
                <p className="greeting_text">
                    Create your <span>Baatchit account</span>
                </p>
                <form className="Form" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="photo" className="Profile_photo">
                        <div>🤖</div>
                    </label>
                    <input type="file" id="photo" />
                    <br />
                    <label>Username</label>
                    <br />
                    <input
                        type="text"
                        {...register("name", {
                            required: "Username is required",
                            minLength: 2,
                            maxLength: 100,
                            message: "Username must be between 2 and 100 characters",
                        })}
                        placeholder="ENTER YOUR USERNAME"
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                    <br />
                    <label>Email</label>
                    <br />
                    <input
                        type="text"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                            maxLength: 100,
                        })}
                        placeholder="ENTER YOUR EMAIL"
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                    <br />
                    <label>Password</label>
                    <br />
                    <input
                        type="text"
                        {...register("password", {
                            required: "Password is required",
                            minLength: 8,
                            maxLength: 15
                        })}
                        placeholder="ENTER YOUR PASSWORD"
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                    <br />
                    <button className="submit">Create your Baatchit account</button>
                    <br />
                </form>
                <p className="Login_link">
                    Already on Baatchit?<Link to="/">Sign in</Link>
                </p>
            </div>
        </>
    );
};
export default Register_page;