import React, { useContext, useEffect } from "react";
import { ChatProvider, ChatContext } from "context/ChatContext";
import { StateContext } from "context/StateContext"
import { get } from "utils/api"
const Chat = (props) => {
  const { state } = useContext(StateContext)
  useEffect(() => {
    get(`/chatmate/24`).then(result => {
      console.log(result)
    }).catch(err => {
      console.log(err.response)
    })

  }, [])

  return (
    <div>
      {console.log(state)}
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
