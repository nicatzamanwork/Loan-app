import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    useradd: (state, action) => {
      let userItem = state.users.find((q) => q === action.payload);
      if (userItem === undefined) {
        let newUserItem = {
          id: action.payload.id,
          fin: action.payload.fin,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
        };
        state.users.push(newUserItem);
      }
    },
    userfin: (state, action) => {
      const userFin = action.payload;
      const foundUser = state.users.find((user) => user.fin === userFin);
      if (foundUser) {
        // do something with foundUser
        console.log("User found: ", foundUser);
        state.foundUser = foundUser;
      } else {
        // handle user not found case
        console.log("User not found");
        state.foundUser = null;
      }
    },
  },
});

export const { useradd, userfin } = userSlice.actions;
export default userSlice.reducer;
