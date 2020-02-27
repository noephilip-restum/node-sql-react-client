import React, { useReducer } from "react";
const initialState = {
  loading: false,
  chatmates: []
};

const StateContext = React.createContext();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "set-loading":
        return { ...state, loading: action.payload.loading };
      case "set-chatmates":
        return { ...state, chatmates: action.payload.chatmates }
      default:
        return null;
    }
  }, initialState);

  return (
    <StateContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateProvider, StateContext };
