import * as actions from "./actionTypes";
import useFetch from "./hooks/useFetch";
import {userApi} from "./assets/api";

export const createEmp = (emp) => {
  //API CALL (post request)
  return {
    type: actions.CREATE_EMP,
    payload: emp,
  };
};

export const deleteEmp = (id) => {
  return {
    type: actions.DELETE_EMP,
    payload: id,
  };
};

export const getUsers = () => {
  //api call 
  return () => {
    const [data] = useFetch(userApi);
    console.log(data);
  }
}
