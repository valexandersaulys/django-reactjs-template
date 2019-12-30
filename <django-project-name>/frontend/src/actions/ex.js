import axios from "axios";

import { tokenConfig } from "./auth";
import { GET_ALL, DELETE_ONE, ADD_ONE, GET_ERRORS } from "./types";

export const getALL = () => (dispatch, getState) => {
  axios
    .get("/api/leads/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_ALL,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const deleteOne = id => (dispatch, getState) => {
  axios
    .delete(`/api/leads/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_ONE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const addOne = lead => (dispatch, getState) => {
  axios
    .post("/api/leads/", lead, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_ONE,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
