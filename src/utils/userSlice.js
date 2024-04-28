import { createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const userSlice = createSlice({
  name: "user",
  initialState: getUserFromLocalStorage(),
  reducers: {
    addUser: (state, action) => {
      const user = action.payload;
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    },
    removeUser: (state, action) => {
      localStorage.removeItem("user");
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "user",
//   initialState: null,
//   reducers: {
//     addUser: (state, action) => {
//       return action.payload;
//     },
//     removeUser: (state, action) => {
//       return null;
//     },
//   },
// });

// export const {addUser,removeUser } = userSlice.actions;
// export default userSlice.reducer;
