import React from "react";
import Routes from "routes";
import { StateProvider } from "context/StateContext"
function App() {

  return (
    <StateProvider>
      <Routes />
    </StateProvider>
  );
}

export default App;
