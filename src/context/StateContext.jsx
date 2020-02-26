import React, { useReducer } from "react";
const initialState = {
  loading: false
};

const StateContext = React.createContext();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "set-loading":
        return { ...state, loading: action.payload.loading };
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
