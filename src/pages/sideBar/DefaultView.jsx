import TopNavigationBar from "../../components/TopNavigationBar";
import UsersView from "../sideBar/UsersView";
import "../../styles/DefaultView.css";
import LeftSideBar from "./LeftSideBar";
import MessageInputBar from "../messagesArea/MessageInputBar";
import MessageTopBar from "../messagesArea/MessageTopBar";
import Messages from "../messagesArea/Messages";


function DefaultView() {
  return (
    <div className="default-wrapper">
      <div className="default-content">
        <LeftSideBar />
      </div>
    </div>
  );
}

export default DefaultView;
