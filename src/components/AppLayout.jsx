import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import "../styles/AppLayout.css"; 
import "../components/SearchBox";
import SearchBox from "../components/SearchBox";
import DefaultView from "../pages/sideBar/DefaultView";
import LeftSideBar from "../pages/sideBar/LeftSideBar";

function AppLayout() {
  return (
    <MainContainer>
      <div className="app-layout">
        <div className="main-content">
          <LeftSideBar />
          <Outlet />
        </div>
      </div>
    </MainContainer>
  );
}

export default AppLayout;
