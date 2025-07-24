import React from "react";
import "../styles/ShortTextMessage.css";

function ShortTextMessage({ children, opacity = 0.6 }) {
  return (
    <span
      className="short-text-message"
      style={{ opacity }}
    >
      {children}
    </span>
  );
}

export default ShortTextMessage;
