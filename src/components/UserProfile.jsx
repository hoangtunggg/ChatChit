import React from "react";
import "../styles/UserProfile.css";

const UserProfile = () => {
  return (
    <div className="profile-container">
      <div className="cover-photo">
        <img
          src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1350&q=80"
          alt="Cover"
        />
      </div>
      <div className="profile-header">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Avatar"
          className="avatar"
        />
        <div className="user-info">
          <h2 className="username">Nguyễn Văn A</h2>
          <p className="user-role">Web Developer | React Enthusiast</p>
        </div>
        <div className="profile-actions">
          <button className="btn neon">Thêm bạn bè</button>
          <button className="btn neon-outline">Nhắn tin</button>
        </div>
      </div>

      <div className="profile-nav">
        <ul>
          <li className="active">Bài viết</li>
          <li>Giới thiệu</li>
          <li>Bạn bè</li>
          <li>Ảnh</li>
          <li>Video</li>
          <li>Check in</li>
        </ul>
      </div>

      <div className="profile-content">
        <div className="left-panel">
          <div className="bio">
            <h3>Giới thiệu</h3>
            <p>🔥 Đam mê lập trình web với ReactJS và Node.js</p>
          </div>
          <div className="personal-info">
            <h4>Thông tin cá nhân</h4>
            <ul>
              <li>📍 Sống tại Hà Nội</li>
              <li>🎓 Học tại Đại học Bách Khoa</li>
              <li>💼 Làm tại FPT Software</li>
            </ul>
          </div>
        </div>

        <div className="right-panel">
          <div className="friends-list">
            <h4>Bạn bè</h4>
            <div className="friends-grid">
              {Array.from({ length: 6 }).map((_, i) => (
                <div className="friend" key={i}>
                  <img
                    src={`https://randomuser.me/api/portraits/women/${i + 10}.jpg`}
                    alt={`Friend ${i}`}
                  />
                  <span>Người {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
