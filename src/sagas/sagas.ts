import {
  StrictEffect,
  all,
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import {
  addUser,
  getUserData,
  toggleLoader,
  setAddUser,
  editUser,
  setEditUser,
} from "../slice/userSlice";
import axios from 'axios'

function* GetUserDataFunc(action: any): Generator<StrictEffect, void, any> {
  const users: any = yield call(() =>
    fetch(`https://jsonplaceholder.typicode.com/users`).then((response) =>
      response.json().then((data) => {
        return data;
      })
    )
  );

  yield put(setAddUser(users));
}

export type AddUserType = {
  payload: { id: string; name: Object };
};

function* AddUserFunc(action: any): Generator<StrictEffect, void, any> {
  try {
    //DO API CALL HERE

    const data = axios.post("https://jsonplaceholder.typicode.com/users",{
      data:action.payload,
    })
    .then((response) => {
      console.log(response)
    })
    console.log(data)

    // const response = yield call("ENDPOINT", action.payload);
    console.log("INSIDE SAGA", action);
    yield put(setAddUser(action.payload.name)); //Set API response to saga reducer
  } catch (error: any) {
    //HANDLE ERROR
    console.log("ERROR", error);
    yield put(toggleLoader(false)); //if reqd to manually stop loader
  } finally {
    //SET LOADER FALSE OR ETC
    yield put(toggleLoader(false));
  }
}

function* EditUserFunc(action:any) :Generator<StrictEffect, void, any> {
  console.log(action,"In edit saga")
  try {
    const data = axios.put(`https://jsonplaceholder.typicode.com/users/${action?.payload?.name?.id}`,{
      data:action.payload,
    })
    .then((response) => {
      console.log(response.data, 'dta res')
    }).then((data) =>{
      // return data
      console.log(data, 'dta')
      
    } )
  } catch(error:any) {
    console.log("ERROR", error);
    yield put(toggleLoader(false));
  }
  console.log(action.payload.name,"After API")
  yield put(setEditUser(action.payload.name));
}

export default function* globalWatcher(): Generator<StrictEffect, void, any> {
  yield all([yield takeLatest(addUser.type, AddUserFunc)]);
  yield all([yield takeLatest(getUserData.type, GetUserDataFunc)]);
  yield all([yield takeLatest(editUser.type, EditUserFunc)])
}
