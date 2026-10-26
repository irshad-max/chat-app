import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
const SideBar_page = () => {
  const [text, setText] = useState("");
  const [SearchUser, setSeachUser] = useState([])
  const [countrequest, setconutrequest] = useState(0)
  const token = localStorage.getItem("token")

  useEffect(() => {
    const requests = async () => {
      try {
        const res = await axios.post("http://localhost:3001/count/request", {}, {
          headers: {
            authorization: `bearer ${token}`
          }
        })
        setconutrequest(res.data)
      }
      catch (e) { console.log("error", e) }
    }

    requests()
  }, [token])
  const checkUser = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/search",
        { params: { text: text } });
      setSeachUser(res.data)
    }
    catch (e) { console.log("error", e) }
  }
  const request_btn = async (request_id) => {
    try {
      const res = await axios.post("http://localhost:3001/request", { receiver: request_id }, {
        headers: { authorization: `Bearer ${token}` }
      })
    }
    catch (e) { console.log("error", e) }
  }
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-logo">
          <h2>BAATCHIT</h2>
          <span style={{ padding: "21px", cursor: "pointer" }}><Link to="/request">🔔</Link><span className="notify">{countrequest}</span></span>
        </div>

        <div className="sidebar-search">
          <input type="text" placeholder="Search..." onChange={(e) => setText(e.target.value)} />
          <button className="search-btn" onClick={checkUser}>Search</button>
        </div>
        {
          SearchUser.map((user) => (

            <div className="user-card" key={user._id}>
              <img
                src={user.profileImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqE3e9RIK09-ejpr7BwnvNb4TpTjmXHGgrTTNc00vdtA&s=10"}
                alt={user.name}
                className="user-avatar"
              />
              <div className="user-info">
                <h3>{user.name}</h3>
              </div>
              <button className="follow-btn" onClick={() => request_btn(user._id)}>FOLLOW</button>
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

export default SideBar_page;
