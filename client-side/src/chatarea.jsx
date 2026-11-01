
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import socket from "./SOCKET/Socket";

const ChatArea = () => {
  const token = localStorage.getItem("token");
  const { friendId } = useParams();
  const [info, setinfo] = useState({});
  const [message, setmessage] = useState("");
  const [mess, setmess] = useState([]);

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
        const res = await axios.post(
          "https://talksy-09lk.onrender.com/get/user/info",
          { id: friendId },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        setinfo(res.data);
      } catch (e) {
        console.log("Error fetching user info:", e);
      }
    };
    getinfo();
  }, [token, friendId]);


  useEffect(() => {
    setmess([]);
  }, [friendId]);


  const send = () => {
    if (!message.trim()) return;
    const newMessage = {
      text: message,
      sender: "me"
    };
    setmess((prev) => [...prev, newMessage]);
    socket.emit("send_message", {
      id: friendId,
      text: message
    });
    setmessage("");
  };

  useEffect(() => {
    const handleMessage = (messageObj) => {
      setmess((prev) => [...prev, messageObj]);
    };
    socket.on("receive_message", handleMessage);
    return () => {
      socket.off("receive_message", handleMessage);
    };
  }, [mess]);
  return (
    <div className="chatarea-display">

      <div className="chatarea-navbar">
        <div className="profile-picture">
          <img
            src={
              info.profileImage
                ? `https://talksy-09lk.onrender.com${info.profileImage}`
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqE3e9RIK09-ejpr7BwnvNb4TpTjmXHGgrTTNc00vdtA&s=10"
            }
            alt="Profile"
          />
        </div>

        <span>{info.name}</span>
      </div>

      <div className="chatarea-text-field">
        {mess.map((item, index) => (
          <div key={item._id || index} >
            {item?.text && (
              <div
                style={{
                  display: "flex",
                  justifyContent: item.sender === "me" ? "flex-end" : "flex-start",
                  backgroundColor: item.sender === 'me' ? "#7dd837" : "#FFFFFF",
                  padding: "10px 15px",
                  margin: "5px",
                  borderRadius: "12px",
                  color: "#222",
                  wordBreak: "break-word"
                }}
              >
                {item.text}
              </div>
            )}
            {item.mess}
          </div>
        ))}
      </div>

      <div className="chatarea-bottom-input">
        <input
          type="text"
          placeholder="MESSAGES..."
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
        />

        <button
          className="chatarea-bottom-btn"
          onClick={send}
        >
          Send
        </button>
      </div>

    </div>
  );
};

export default ChatArea;
