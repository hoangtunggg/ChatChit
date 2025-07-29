import "../styles/AppLayout.css"; 
import "../components/SearchBox";
import DefaultView from "../pages/sideBar/DefaultView";
import TopNavigationBar from "./TopNavigationBar";
import MessageView from "../pages/messagesArea/MessageView";


function AppLayout() {
  return (
    <div className="app-layout">
      <div className="top-navigation-bar">
        <TopNavigationBar />
      </div>
      <div className="main-content">
        <div className="default-view">
          <DefaultView />
        </div>
        <div className="message-area">
          <MessageView />
        </div>
      </div>
    </div>

  );
}

export default AppLayout;
