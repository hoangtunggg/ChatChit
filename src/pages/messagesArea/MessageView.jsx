import Messages from "./Messages";
import MessageTopBar from "./MessageTopBar";
import MessageInputBar from "./MessageInputBar";
import "../../styles/MessageView.css";

function MessageView() {
  return (
    <div className="message-view-container">
      <MessageTopBar />
      <Messages />
      <MessageInputBar />
    </div>
  );
}

export default MessageView;
