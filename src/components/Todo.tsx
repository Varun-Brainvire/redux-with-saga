import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser,editUser } from "../slice/userSlice";

export default function Todo({ user, setInput ,isEdit,setIsEdit}: any) {
  // console.log(user,"users in todo")
  let dispatch = useDispatch();

  const handelDelete = () => {
    dispatch(deleteUser(user.id));
  };

  const editDelete = () => {
    setInput(user);
    //dispatch(editUser(user));
  };
  return (
    <div>
      <p>Name : {user.name} </p>
      <p>Email : {user.email} </p>
      <p>Phone : {user.phone} </p>
      <button onClick={handelDelete}> Delete</button>
      <button onClick={() => {
        editDelete()
        setIsEdit(true)
      }}> Edit</button>
    </div>
  );
}
