import { createSlice, current } from "@reduxjs/toolkit";
import { Immutable } from "immer";

export interface IGlobalState {
  isLoading: boolean;
  users: string[];
}

// Define the initial state using that type
export const initialState: Immutable<IGlobalState> = {
  isLoading: false,
  users: [],
};

export const userData = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleLoader: (state, action) => {
      state.isLoading = action.payload || false;
    },
    getUserData: (state) => {
      state.isLoading = true;
    },
    addUser: (state: any, action) => {
      console.log(action, "action");
      console.log(state, "State in add reducer");
      state.isLoading = true;
    },
    setAddUser: (state: any, action) => {
      state.users =
        state.users?.length === 0
          ? action.payload
          : [action.payload, ...state.users];
      state.isLoading = false;
    },
    deleteUser: (state: any, action) => {
      state.users = state.users.filter(
        (u: { [key: string]: any }) => u.id !== action.payload
      );
      console.log(state.users, "sttae");
      return state;
    },
    editUser: (state, action) => {
      console.log(current(state.users), "state in edit");
      state.isLoading = true;
      //state.users = [action.payload]
    },
    setEditUser: (state: any, action) => {
      console.log(action, "action in edit");
      let i = null;
      // console.log(action.payload.id, "id");
      state.users.find((item: any, index: any) => {
        if (item.id === action.payload.id) {
          return (i = index);
        } else {
          return null;
        }
      });

      if (i !== null) state.users[i] = action.payload;
      else return;

      console.log(state, "In setEditUser");
    },
  },
});

export const {
  getUserData,
  toggleLoader,
  addUser,
  deleteUser,
  setAddUser,
  editUser,
  setEditUser,
} = userData.actions;
export default userData.reducer;
