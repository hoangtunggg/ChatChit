import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/MessageTopBar.css";


function Loader() {
  return <div className="loader">Loading...</div>;
}

function Profile({ userData, onClick }) {
  return (
    <div className="profile" onClick={onClick}>
      <div className="avatar-placeholder"></div>
      <div className="fullname">{userData?.fullname || "Unknown User"}</div>
    </div>
  );
}

function MessageTopBar() {
  const navigate = useNavigate();
  const friend = { fullname: "John Doe" }; // Dữ liệu giả lập
  const isPending = false;



  return (
    <>
      <div className="message-topbar">
        {isPending ? (
          <Loader />
        ) : (
          <Profile userData={friend} onClick={() => {}} />
        )}
      </div>
    </>
  );
}

export default MessageTopBar;
