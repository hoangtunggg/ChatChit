import { HiOutlineUserCircle } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";
import { useEnterKeyPress } from "../utils/useEnterKeyPress";
import "../styles/UserItem.css";

function UserItem({ id, name, avatar, subtext, handler, shouldReplace = false }) {
  const { userId: currentFriendId } = useParams();
  const isActiveUser = currentFriendId === id;

  const navigate = useNavigate();

  function handleClick() {
    handler();
    navigate(`/m/${id}`, { replace: shouldReplace });
  }

  const handleKeyDown = useEnterKeyPress(handleClick);

  return (
    <div
      className={`user-item ${isActiveUser ? "active" : ""}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
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
