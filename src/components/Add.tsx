import React, { useEffect, useState } from "react";
import { addUser, editUser } from "../slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Input from "@mui/material/Input";
import { Box, Button, FormControl, Grid, Container } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// let id: number = 10;
const Add: React.FC<any> = ({ input, setInput, isEdit, setIsEdit }) => {
  console.log(input, "input add");
  // const navigate = useNavigate();
  const users = useSelector((state: any) => state.userData.users);
  console.log(users);

  useEffect(() => {
    console.log("USER LIST UPADTED", users);
  }, [users]);

  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setInput(e.currentTarget.value);
    const { name, value } = e.currentTarget;
    console.log(name, "name");
    console.log(value, "value");
    setInput({ ...input, [name]: value });
  };
  console.log(input);
  const handleAdd = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      addUser({
        // id: ++id,
        // name: input,
        // id: Math.random(),
        name: input,
      })
    );
    setInput({
      name: "",
      email: "",
      phone: "",
    });
    // navigate("/add-user");
  };

  const handleEdit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      editUser({
        // id: ++id,
        // name: input,
        id: Math.random(),
        name: input,
      })
    );
    setInput({
      name: "",
      email: "",
      phone: "",
    });
    // navigate("/add-user");
  };

  return (
    <>
      <Container>
        <FormControl>
          <Box sx={{ pt: 10, pb: 10 }}>
            {isEdit == true ? <h2>Update User</h2> : <h2>Add User</h2>}
            {/* <h2>Add User</h2> */}
            <Grid container spacing={2}>
              {/* <Grid item xs={12}>
                <Input
                  value={input}
                  onChange={handleChange}
                  name="name"
                  placeholder="Add name"
                />
              </Grid> */}
              <Grid item xs={6}>
                <Input
                  value={input?.name}
                  onChange={handleChange}
                  name="name"
                  placeholder="Add username"
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  value={input?.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="Add email"
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  value={input?.phone}
                  onChange={handleChange}
                  name="phone"
                  placeholder="Add phone"
                />
              </Grid>
            </Grid>
            <Box sx={{ textAlign: "right", pt: 5 }}>
              {isEdit == true ? (
                <Button variant="contained" onClick={handleEdit}>
                  Edit User
                </Button>
              ) : (
                <Button variant="contained" onClick={handleAdd}>
                  Add User
                </Button>
              )}
            </Box>
          </Box>
        </FormControl>
      </Container>
    </>
  );
};

export default Add;
