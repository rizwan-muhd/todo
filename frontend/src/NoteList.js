import React, { useState } from 'react'
import './demo.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
// import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function NoteList(props) {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [newTitle, setnewTitle] = useState('')
    // const [modalData, setModalData] = useState([])



    const handleOpen = (id) => {
        // axios.get(`http://localhost:3008/app/getOnetodo?id=${id}`).then((res) => {
        //     console.log(res.data);
        //     setModalData(res.data)
        // })
        setOpen(true)
        // setModalData([...newTitle, props.title])
    };
    const handleDelete = (id) => {
        // console.log("deleted notes");
        props.onDelete(id)
    }
    const handleUpdate = (id) => {
        console.log("going for update" + id + newTitle);
        props.onUpdate(id, newTitle)

        handleClose()
        //     console.log("new title passing" + newTitle);

    }
    const handleChange = (e) => {
        const title = e.target.value
        // console.log("updated title" + title);

        // setModalData(props.title)
        setnewTitle(title)
        console.log(newTitle);

    }

    return (

        <Grid container columnSpacing={1} direction={'row'}>
            <Grid item xs={12} md={8}>
                <Paper elevation={3}
                    square
                    variant='outlined'
                    fullWidth
                    className='listed-data'
                >
                    {props.title}

                </Paper>
            </Grid>
            <Grid item xs={6} md={4}>
                <Button
                    onClick={() => handleDelete(props.id)}
                    endIcon={<DeleteIcon />}
                    variant="contained"
                    // marginLeft={5}
                    color='error'


                >
                    Delete</Button>
                <Button
                    onClick={() => handleOpen(props.id)}
                    endIcon={<EditIcon />}
                    variant="contained"
                    sx={{ ml: 1 }}
                    color='primary'


                >
                    Update</Button>
            </Grid>
            <Grid md={12}>

                <div>
                    {/* <Button onClick={handleOpen}>Show model</Button> */}
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >

                        <Box sx={style}>
                            <Grid container spacing={2}>
                                <Grid item sx={12} md={12}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Are u sure want to Update
                                    </Typography>
                                </Grid>
                                <Grid item sx={12} md={12}>

                                    <Typography id="modal-modal-description" component='h6' >
                                        Enter the New Data
                                    </Typography>
                                </Grid>
                                <Grid item sx={12} md={12}>

                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        onChange={handleChange}
                                        defaultValue={props.title}
                                    // placeholder={props.title}
                                    // label={props.title}
                                    // value={newTitle}



                                    >
                                    </TextField>

                                </Grid>
                                <Grid item sx={12}>
                                    <Button onClick={() => handleUpdate(props.id)} variant="contained" color='primary'>Update</Button>
                                    <Button onClick={handleClose} variant="contained" color='error'>Cancel</Button>
                                </Grid>
                            </Grid>
                        </Box>

                    </Modal>
                </div>

            </Grid>

        </Grid>

        // </Box>
    )
}

export default NoteList