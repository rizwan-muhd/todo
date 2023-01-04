import React, { useState, useEffect } from "react";
import "./demo.css";
import axios from "axios";
import NoteList from "./NoteList";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {
  addNewTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Note() {
  //usestate initialize

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [note, setNote] = useState({
    title: " ",
  });
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  //adding value to setnote

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };
  //adding data to database

  const addNotes = () => {
    console.log(note);
    // console.log(notes)

    if (note.title === "") {
      alert("Enter proper data");
    } else {
      console.log(note);

      dispatch(addNewTodo(note));

      setNote({
        title: "",
      });
    }
  };
  //deleting the data from database using axios

  const deleteNotes = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };

  const updateNotes = (id, newTitle) => {
    console.log("notes updated   " + id + "   " + newTitle);

    dispatch(updateTodo(id, newTitle));
  };
  return (
    <Grid container rowSpacing={2} columnSpacing={2}>
      <Grid item xs={10}>
        <TextField
          id="outlined-basic"
          label="Todo..."
          variant="outlined"
          name="title"
          fullWidth
          required
          margin="normal"
          value={note.title}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          onClick={addNotes}
          variant="contained"
          color="secondary"
          // className='add-btn'
          sx={{ mt: 3 }}
        >
          Add Todo
        </Button>
      </Grid>
      {/* </form> */}

      {todos.map((items, index) => {
        // console.log(items._id);
        return (
          <Grid item xs={12}>
            <NoteList
              key={index}
              id={items._id}
              date={Date.now()}
              title={items.title}
              onDelete={deleteNotes}
              onUpdate={updateNotes}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Note;
