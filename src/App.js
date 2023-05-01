import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Available from "./components/Available";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import { useSelector } from "react-redux";
import User from "./components/User";

function App() {
  const [fin, setFin] = useState("");
  const foundUser = useSelector((state) => state.UserReducer.foundUser);
  // console.log("founddd", foundUser);
  return (
    <>
      <Search fin={fin} setFin={setFin} />
      {!foundUser && <p>Aramak için lütfen bir FIN girin.</p>}{" "}
      {foundUser ? <User /> : <Available />}
    </>
  );
}

export default App;
