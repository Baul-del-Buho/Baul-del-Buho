import React from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Carrusel from './components/Carrusel';

function App () {
    return (
        <Router>
            <Navbar />
            <Carrusel />
        </Router>
    )
}
export default App;