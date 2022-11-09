import React, { useState, useEffect } from 'react'
import './demo.css'
import axios from 'axios';
import NoteList from './NoteList'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function Note() {

    //usestate initialize

    const [note, setNote] = useState({
        title: " ",

    })
    const [notes, setNotes] = useState([])
    // const [newNotes, setNewnotes] = useState('')

    //useEffect calling for display the list


    useEffect(() => {
        axios.get('http://localhost:3008/app/gettodo').then((res) => {
            // console.log(res.data);
            setNotes(res.data)
        })
    }, [])

    //adding value to setnote

    const handleChange = (event) => {
        const { name, value } = event.target
        console.log(name, value);
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value,
            }


        })
    }
    //adding data to database     

    const addNotes = () => {

        console.log(note);
        // console.log(notes)

        if (note.title === "") {
            alert('Enter proper data')

        }
        else {


            console.log(note);
            axios.post('http://localhost:3008/app/addtodo', note).then((res) => {
                console.log(res.data);
            })
            axios.get('http://localhost:3008/app/gettodo').then((res) => {
                console.log(res.data);
                setNotes(res.data)
            })

            setNote({
                title: "",
                // condent: ""
            })

        }
    }
    //deleting the data from database using axios  

    const deleteNotes = (id) => {
        console.log(id);
        axios.delete(`http://localhost:3008/app/deleteTodo?id=${id}`)
        axios.get('http://localhost:3008/app/gettodo').then((res) => {
            console.log(res.data);
            setNotes(res.data)
        })
    }

    const updateNotes = (id, newTitle) => {
        console.log("notes updated   " + id + "   " + newTitle);
        // const data = [id, newTitle];
        // console.log("new data" + data);
        axios.put('http://localhost:3008/app/updateTodo', { id: id, newTitle: newTitle })
        axios.get('http://localhost:3008/app/gettodo').then((res) => {
            console.log(res.data);
            setNotes(res.data)
        })
    }
    return (

        <Grid container rowSpacing={2} columnSpacing={2}>
            {/* <form action="" noValidate autoComplete='off' > */}
            <Grid item xs={10}>
                <TextField
                    id="outlined-basic"
                    label="Todo..."
                    variant="outlined"
                    name='title'
                    fullWidth
                    required
                    margin='normal'
                    value={note.title}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={2}>
                <Button
                    onClick={addNotes}
                    variant="contained"
                    color='secondary'
                    // className='add-btn'
                    sx={{ mt: 3 }} >
                    Add Todo</Button>
            </Grid>
            {/* </form> */}


            {notes.map((items, index) => {
                // console.log(items._id);
                return (
                    <Grid item xs={12}>
                        <NoteList key={index} id={items._id} date={Date.now()} title={items.title} onDelete={deleteNotes} onUpdate={updateNotes} />
                    </Grid>
                )
            })
            }

        </Grid>
    )
}

export default Note

