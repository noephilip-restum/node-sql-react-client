import React, { useContext } from "react";
import { ChatProvider, ChatContext } from "context/ChatContext";

const Chat = (props) => {
  return (
    <div>

      <h1>Chats</h1>
    </div>
  );
};

const WrappedChat = (props) => {

  const { chat_id } = props.match.params;

  return (
    <ChatProvider chat_id={chat_id}>

      <Chat {...props} />
    </ChatProvider>
  );
};

export default WrappedChat;
