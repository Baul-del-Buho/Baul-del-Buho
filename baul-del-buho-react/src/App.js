import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Principal  from './Principal';
import Proyectos from './Proyectos';
import DetalleProyectos from './components/DetalleProyectos';

function App () {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Principal />} />
                <Route exact path="/proyectos" element={<Proyectos />} />
                <Route exact path="/proyectos/:id" element={<DetalleProyectos />} />
            </Routes>

            <Footer />
        </Router>
    )
}
export default App;