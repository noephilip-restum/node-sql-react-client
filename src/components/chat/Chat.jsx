import React, { useContext } from "react";
import { ChatProvider, ChatContext } from "context/ChatContext";

const Chat = () => {
  return (
    <div>
      <h1>Chats</h1>
    </div>
  );
};

const WrappedChat = props => {
  return (
    <ChatProvider>
      <Chat {...props} />
    </ChatProvider>
  );
};

export default WrappedChat;
