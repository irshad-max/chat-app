import { io } from "socket.io-client";

const socket = io("https://talksy-09lk.onrender.com", {
    autoConnect: false,
    auth: {
        token: localStorage.getItem("token"),
    },
});

export default socket;