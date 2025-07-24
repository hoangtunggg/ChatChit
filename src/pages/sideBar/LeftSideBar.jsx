
import DefaultView from "../sideBar/DefaultView";
import "../../styles/LeftSideBar.css";

function LeftSideBar() {
  return (
    <div>
      <aside
        className="left-sidebar"
      >
        <DefaultView />
      </aside>
    </div>
  );
}

export default LeftSideBar;
