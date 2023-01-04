import axios from "axios";
import { ADDNEW_TODO, DELETE_TODOS, GETALL_TODOS, UPDATE_TODO } from "./type";

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:3008/app/addtodo", data);
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    console.log("error while adding todo", error);
  }
};

export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3008/app/gettodo");
    dispatch({ type: GETALL_TODOS, payload: res.data });
  } catch (error) {
    console.log("error while getting todos", error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `http://localhost:3008/app/deleteTodo?id=${id}`
    );
    dispatch({ type: DELETE_TODOS, payload: res.data });
  } catch (error) {
    console.log("error while deleting");
  }
};

export const updateTodo = (id, newTitle) => async (dispatch) => {
  try {
    const res = await axios.put("http://localhost:3008/app/updateTodo", {
      id: id,
      newTitle: newTitle,
    });
    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
