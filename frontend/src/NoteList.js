import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


function NoteList(props) {

    const handleDelete = () => {
        console.log("deleted notes");
        props.onDelete(props.id)
        // console.log(props.id);
    }

    return (

        <div className='note-list' >

            <Grid item>
                <Typography
                    variant='h6'
                    font-size='16'
                    fontFamily='-apple-system'
                    color='primary'
                    align='center'
                >
                    {props.title}
                </Typography>
            </Grid>



            <Grid item>
                <DeleteIcon onClick={handleDelete}></DeleteIcon>
            </Grid>

        </div >

    )
}

export default NoteList