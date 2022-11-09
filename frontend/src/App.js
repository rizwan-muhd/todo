import React from 'react'
import Footer from './footer';
import Heading from './Heading';
import Note from './Note';
import './App.css'
import Container from '@mui/material/Container';




function App() {

  return (
    <div>
      <Heading />
      <Container>
        <Note />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
