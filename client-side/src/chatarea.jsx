import { useParams } from "react-router-dom";

const ChatArea = () => {
  const { friendId } = useParams();

  return (
    <div className="chatarea-display">
      <div className="chatarea-navbar"><div className="profile-picture"></div></div>
    </div>
  );
};

export default ChatArea;