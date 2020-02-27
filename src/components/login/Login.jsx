import React from "react";
import LoginForm from "./LoginForm"
import "./styles.css"
export default function Login({ history }) {
  return (
    <div>
      <LoginForm history={history} />
    </div>
  );
}
