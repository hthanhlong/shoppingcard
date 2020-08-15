import axios from "axios";
import { GET_TOKEN } from "../constants";
export const getToken = (login) => async (dispatch) => {
  const users = login;
  axios({
    method: "POST",
    headers: { "Content-Type": "application/json" },
    url: "http://localhost:8000/auth/",
    data: JSON.stringify(login),
  })
    .then((res) =>
      dispatch({
        type: GET_TOKEN,
        payload: {
          token: res.data.token,
          users: users,
        },
      })
    )
    .catch((err) => console.log(err));
};
