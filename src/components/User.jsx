import React from "react";
import { useSelector } from "react-redux";

function User() {
  const foundUser = useSelector((state) => state.UserReducer.foundUser);
  console.log("founddd", foundUser);
  return (
    <div>
      {foundUser.fin}
      <br />
      {foundUser.firstName}
      <button>Yeni kredit yarat</button>
    </div>
  );
}

export default User;
