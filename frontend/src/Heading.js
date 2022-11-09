import React from 'react'
import './demo.css'
import Typography from '@mui/material/Typography';

function Heading() {
    // const classes = useStyle()
    return (
        <div className='NavBar'>
            <Typography
                // className={classes.h2}
                variant='h4'
                color='success'
            >
                Todo App
            </Typography>
        </div>
    )
}

export default Heading



