import { HiOutlineUserCircle } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/UserItem.css";

function UserItem({ id, name, avatar, subtext}) {
  const { userId: currentFriendId } = useParams();
  const isActiveUser = currentFriendId === id;


  return (
    <div
      className={`user-item ${isActiveUser ? "active" : ""}`}
      role="button"
      tabIndex={0}
    >
      <span className="avatar">
        {avatar ? (
          <img src={avatar} alt={name} />
        ) : (
          <HiOutlineUserCircle size={48} opacity={0.5} strokeWidth="1" />
        )}
      </span>

      <span className="user-info">
        <span className="name">{name}</span>
        <span className="subtext">{subtext}</span>
      </span>
    </div>
  );
}

export default UserItem;
