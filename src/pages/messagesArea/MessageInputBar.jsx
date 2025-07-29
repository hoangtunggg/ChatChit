import { RiSendPlaneFill } from "react-icons/ri";
import { useState, useRef } from "react";
import "../../styles/MessageInputBar.css";

function MessageInputBar() {
  const [newMessage, setNewMessage] = useState("");
  const inputRef = useRef(null);

  function handleSend(e) {
    e.preventDefault();
    inputRef.current.focus();
    setNewMessage(""); // chỉ reset input, không gửi
  }

  return (
    <div className="message-input-bar-container">
      <form className="message-form" onSubmit={handleSend}>
        <label htmlFor="inputMessage" className="sr-only">
          Type your message
        </label>
        <input
          className="message-input"
          ref={inputRef}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          type="text"
          placeholder="Message"
          id="inputMessage"
          autoComplete="off"
        />
        <button className="message-send-button" type="submit">
          <RiSendPlaneFill aria-label="send button" />
        </button>
      </form>
    </div>
  );
}

export default MessageInputBar;
