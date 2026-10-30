import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
const Request_list = () => {
    const [Request_list, setRequest_list] = useState([])
    const token = localStorage.getItem("token")

    useEffect(() => {
        const requests = async () => {
            try {
                const res = await axios.get("http://localhost:3001/request-show", {
                    headers: {
                        authorization: `bearer ${token}`
                    }
                })
                setRequest_list(res.data)
            }
            catch (e) { console.log("error", e) }
        }

        requests()
    }, [token])
    // const checkUser = async () => {
    //     try {
    //         const res = await axios.get("http://localhost:3001/api/search",
    //             { params: { text: text } });
    //         setSeachUser(res.data)
    //     }
    //     catch (e) { console.log("error", e) }
    // }
    const accept_btn = async (request_id) => {
        try {
            const res = await axios.post(`http://localhost:3001/accept-request/${request_id}`, {})
            console.log(res)
        }
        catch (e) { console.log("error", e) }
    }
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-logo">
                    <h2>BAATCHIT</h2>
                    <span style={{ padding: "21px", cursor: "pointer" }}><Link to="/home">⮜</Link></span>
                </div>

                <div className="sidebar-search">
                </div>
                {
                    Request_list.map((request) => (
                        <div className="user-card" key={request._id}>
                            <img
                                src={
                                    request.sender?.profileImage ||
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqE3e9RIK09-ejpr7BwnvNb4TpTjmXHGgrTTNc00vdtA&s=10"
                                }
                                alt={request.sender?.name || "User"}
                                className="user-avatar"
                            />

                            <div className="user-info">
                                <h3>{request.sender?.name}</h3>
                            </div>
                            <button className="accept-btn" onClick={() => accept_btn(request?._id)}>✔
                            </button>
                            <button className="reject-btn" onClick={() => request_btn(request.sender?._id)}>✗
                            </button>
                        </div>
                    ))
                }
                <div className="sidebar-bottom">
                    <div className="sidebar-item">Settings</div>
                </div>
            </div>
        </>
    );
};

export default Request_list;
