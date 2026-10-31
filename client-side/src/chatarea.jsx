import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import socket from "./SOCKET/Socket";

const ChatArea = () => {
  const token = localStorage.getItem("token")
  const [info, setinfo] = useState({})
  const [message, setmessage] = useState("")
  const { friendId } = useParams();
  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });
    return () => {
      socket.off("connect");
      socket.disconnect();
    };
  }, []);
  useEffect(() => {
    const getinfo = async () => {
      try {
        const res = await axios.post("http://localhost:3001/get/user/info", { id: friendId }, {
          headers: {
            Authorization: `bearer ${token}`
          }
        })
        setinfo(res.data)
      }
      catch (e) { console.log("error", e) }
    }
    getinfo()
  }, [token])
  function send() {
    console.log(message)
  }
  return (
    <div className="chatarea-display">
      <div className="chatarea-navbar"><div className="profile-picture">{<img src={info.profileImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqE3e9RIK09-ejpr7BwnvNb4TpTjmXHGgrTTNc00vdtA&s=10"} />}</div> <span>{info.name}</span></div>
      <div className="chatarea-bottom-input">
        <input type="text" placeholder="MESSAGES..." onChange={(e) => { setmessage(e.target.value) }} />
        <button className="chatarea-bottom-btn" onClick={send}>Send..</button>
      </div>
    </div>
  );
};

export default ChatArea;