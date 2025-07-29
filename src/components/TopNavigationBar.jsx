import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/TopNavigationBar.css";
import { ReactComponent as Logo } from "../assets/Logo.svg";

function TopNavigationBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const handleClickProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="top-nav">
      <div className="top-nav-left">
        <div className="brand-header">
          <Logo className="logo-svg" />
          <span className="brand-name">ChatChit</span>
        </div>
      </div>

      <div className="top-nav-right">
        <button className="icon-btn" title="Thông báo">
          <FaBell />
        </button>

        <div className="profile-menu">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="avatar"
          />
          <div className="dropdown">
            <ul>
              <li onClick={handleClickProfile} style={{ cursor: "pointer" }}>
                Hồ sơ
              </li>
              <li>Cài đặt</li>
              <li onClick={handleLogout} style={{ cursor: "pointer" }}>
                Đăng xuất
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavigationBar;
