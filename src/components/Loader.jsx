import { RiLoader4Fill } from "react-icons/ri";
import "../styles/Loader.css";

function Loader({ size = "small", text = "", customClasses = "" }) {
  const sizeClasses = {
    small: "loader-small",
    medium: "loader-medium",
    large: "loader-large",
  };

  return (
    <span className={`loader-container ${customClasses}`}>
      <RiLoader4Fill className={`loader-icon ${sizeClasses[size]}`} />
      {text && <span className="loader-text">{text}...</span>}
    </span>
  );
}

export default Loader;
