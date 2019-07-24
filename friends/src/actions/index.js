import axios from "axios";
import { compose } from "redux";

export const LOGIN_START = "LOGIN_START";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAIL = "FETCH_FRIENDS_FAIL";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post("http://localhost:5000/api/login", creds)
    .then(res => {
      //   console.log(res.data);
      localStorage.setItem("userToken", res.data.payload);
      //   console.log(localStorage.getItem("userToken"));
    })
    .catch(err => {
      console.error(err.response);
    });
};

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios.get("http://localhost:5000/api/friends").then(res => {
    console.log(res);
    dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res });
  });
};
