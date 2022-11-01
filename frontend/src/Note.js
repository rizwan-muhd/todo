import React, { useState } from 'react'
import './demo.css'
import NoteList from './NoteList'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button';
// import AddIcon from '@mui/icons-material/Add';
export const useStyle = makeStyles({
    field: {
        marginTop: 30,
        marginBottom: 5,
        width: '30rem',
        // color: 'green'

    },
    h2: {
        fontSize: '1rem',
        fontWeight: 500,
        fontColor: 'green'
    },
    form: {
        alignItems: 'center'

    },
    btn: {
        marginTop: 38,
        marginLeft: 5,
        height: 40


    }
})

function Note() {
    const classes = useStyle()


    // states initialize


    const [note, setNote] = useState({
        title: "",

    })
    const [notes, setNotes] = useState([])
    const [error, setError] = useState(false)


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

    const addNotes = (event) => {
        event.preventDefault()
        console.log(note);
        // console.log(notes)
        if (note.title === "") {
            setError(!error.titleError)
        }
        if (note.title === "") {
            alert('Enter proper data')

        }
        else {
            const titleError = event.target
            console.log(titleError);
            // const { titleError,condentError}=event.target.value

            setNotes(notes => {
                return [...notes, note]
            })

            setNote({
                title: "",
                // condent: ""
            })
            console.log(note);
        }
    }

    const deleteNotes = (id) => {
        // console.log("notes deleted" + id);
        // console.log(notes);
        setNotes(notes.filter((obj, index) => {
            return index !== id
        })

        )
        // console.log(notes);
    }
    return (
        <Container>
            <Grid>
                <form action="" noValidate autoComplete='off' className={classes.form}>
                    <TextField
                        className={classes.field}
                        id="outlined-basic"
                        label="Todo..."
                        variant="outlined"
                        name='title'
                        // fullWidth
                        required
                        // color='primary'
                        error={error.titleError}
                        value={note.title}
                        onChange={handleChange}
                    />

                    <Button
                        className={classes.btn}
                        onClick={addNotes}
                        variant="contained"
                        color='secondary'
                    // endIcon={<AddIcon />}
                    > Add Todo</Button>

                </form>
            </Grid>
            <Grid container>
                {notes.map((items, index) => {
                    // console.log(items.title);
                    return <NoteList key={index} id={index} date={Date.now()} title={items.title} onDelete={deleteNotes} />
                })}
            </Grid>
        </Container>
    )
}

export default Note

