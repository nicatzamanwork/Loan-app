import React from "react";
import "../styles/search.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userfin } from "../slice";

function Search({ fin, setFin }) {
  // let { users } = useSelector((state) => state.UserReducer);
  // console.log(users, "useeeer");
  let dispatch = useDispatch();

  const handleClick = () => {
    console.log(fin);
    dispatch(userfin(fin));
  };
  return (
    <>
      <section className="search_bigdiv">
        <div className="search_div">
          <input
            placeholder="Musterini Fin kodunu daxil edin"
            type="text"
            onChange={(e) => setFin(e.target.value)}
          />
          <button onClick={handleClick}>Check</button>
        </div>
        <h3>
          {" "}
          <NavLink to={"/users"}>Users</NavLink>
        </h3>
      </section>
    </>
  );
}

export default Search;
