import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
const Friend_list = () => {
    const [friend_list, setfriend_list] = useState([])
    const token = localStorage.getItem("token")
    const navigate = useNavigate();

    useEffect(() => {
        const requests = async () => {
            try {
                const res = await axios.get("http://localhost:3001/friends", {
                    headers: {
                        authorization: `bearer ${token}`
                    }
                })
                setfriend_list(res.data)
            }
            catch (e) { console.log("error", e) }
        }

        requests()
    }, [token])
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-logo">
                    <h2>BAATCHIT</h2>
                </div>
                <div className="sidebar-search">
                </div>
                {
                    friend_list.map((request) => (
                        <div className="user-card" key={request._id} onClick={() => navigate(`/chat/${request._id}`)}>
                            <img
                                src={
                                    request.profileImage ?
                                    `http://localhost:3001${request?.profileImage}`:
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqE3e9RIK09-ejpr7BwnvNb4TpTjmXHGgrTTNc00vdtA&s=10"
                                }
                                alt={request?.name || "User"}
                                className="user-avatar"
                            />

                            <div className="user-info">
                                <h3>{request?.name || "User"}</h3>
                            </div>
                        </div>
                    ))
                }
                <div className="sidebar-bottom">
                    <div className="sidebar-item"><Link to="/home" style={{ textDecoration: "none", color: " #603813" }}>Sreach-bar  ⬇</Link></div>
                    <hr style={{ width: "90px", margin: "0px 0px 10px 60px" }}></hr>
                    <div className="sidebar-item"><Link to="/setting/option" style={{ textDecoration: "none", color: " #603813" }}>Settings</Link></div>
                </div>
            </div >
        </>
    );
};

export default Friend_list;
