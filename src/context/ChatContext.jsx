import React, { useReducer } from "react";
const initialState = {
  messages: []
};

const ChatContext = React.createContext();

const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "set-loading":
        return { ...state, loading: action.payload.loading };
      default:
        return null;
    }
  }, initialState);

  return (
    <ChatContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export { ChatProvider, ChatContext };
