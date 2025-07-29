import React from "react";
import mockMessages from "../../data/mockMessages";
import "../../styles/Messages.css";

function MessageItem({ message }) {
  const isOwnMessage = message.sender === "me";

  return (
    <div className={`message-item ${isOwnMessage ? "own" : "other"}`}>
      <div className="message-bubble">
        {!isOwnMessage && <strong>{message.sender}: </strong>}
        <span>{message.content}</span>
      </div>
    </div>
  );
}

function Messages() {
  return (
    <div className="messages-container">
      <div className="messages-list">
        {mockMessages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
}

export default Messages;
