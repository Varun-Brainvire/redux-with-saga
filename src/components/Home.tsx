import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import { getUserData } from "../slice/userSlice";
// import { Button } from "@mui/material";
import Add from "./Add";
import Todo from "./Todo";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.userData.users);
  console.log(users);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  const [input, setInput] = useState<any>({
    name: "",
    email: "",
    phone: "",
  });

  const [isEdit, setIsEdit] = useState(false)

  return (
    <>
      <Add input={input} setInput={setInput} isEdit={isEdit} setIsEdit={setIsEdit}/>
      <ul>
        {users?.map((u: any) => (
          <li key={u.id}>
            <Todo user={u} setInput={setInput} isEdit={isEdit} setIsEdit={setIsEdit}></Todo>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
