import React from "react";
import UserList from "./UserList";
import "../../styles/UsersView.css"; // import file CSS riêng
import SearchBox from "../../components/SearchBox";

function UsersView() {
  return (
    <div className="users-view">
      <h2 className="users-view__heading">Chats</h2>
      <div className="default-header">
        <SearchBox />
      </div>

      <div tabIndex={-1} className="users-view__list-container">
        <UserList />
      </div>
    </div>
  );
}

export default UsersView;
