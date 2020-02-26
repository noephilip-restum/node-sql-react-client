import React, { useEffect } from "react";
import { post } from "utils/api";
const Routes = () => {
  useEffect(() => {
    post("/login", {
      username: "jomar_bandol",
      password: "123123"
    }).then(result => {
      console.log(result);
    });
  }, []);

  return (
    <div>
      <h4>Routes</h4>
    </div>
  );
};

export default Routes;
