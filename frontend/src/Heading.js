import React from 'react'
import './demo.css'
import Typography from '@material-ui/core/Typography'
import useStyle from './Note'

function Heading() {
    const classes = useStyle()
    return (
        <div className='NavBar'>
            <Typography
                className={classes.h2}
                variant='h4'
                color='textSecondary'
            >
                Todo App
            </Typography>
        </div>
    )
}

export default Heading



