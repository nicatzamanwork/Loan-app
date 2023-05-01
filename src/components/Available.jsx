import React, { useState } from "react";
import "../styles/available.css";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useradd } from "../slice";

function Available() {
  let dispatch = useDispatch();
  let { users } = useSelector((state) => state.UserReducer);
  console.log("users", users);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [user, setUser] = useState([]);
  const onSubmit = (data) => {
    Swal.fire({
      title: "Elave etmek  istədiyinizdən əminsinizmi ?",
      text: "Bu əməliyyat geri alına bilməz.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Bəli",
      cancelButtonText: "Xeyr",
    }).then(() => {
      let newId = uuidv4();
      // let newData = { ...data, newId: newId };
      dispatch(
        useradd({
          id: newId,
          fin: data.fin,
          firstName: data.firstName,
          lastName: data.lastName,
        })
      );
      // console.log(newData);
      // setUser({ ...user, newData });
      // console.log(typeof user);
      // dispatch(useradd({ newData }));
      localStorage.setItem("users", JSON.stringify({ ...user }));
    });
  };
  return (
    <>
      <section className="available_bigdiv">
        <h1>Musteri movcud deyil</h1>
        <form className="available_form" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Ad" {...register("firstName")} />
          <input placeholder="Soyad" {...register("lastName")} />
          <input placeholder="Ata adi" {...register("fatherName")} />
          <input placeholder="Seriya ve kod" {...register("fin")} />
          <input placeholder="Qeydiyyat unvani" {...register("register")} />

          <input {...register("birthday")} type="date" />
          <input
            placeholder="Telefone"
            {...register("telephone")}
            type="phone"
          />
          <input placeholder="ev telefonu" {...register("hometelephone")} />
          <input type="submit" />
        </form>
      </section>
    </>
  );
}

export default Available;
