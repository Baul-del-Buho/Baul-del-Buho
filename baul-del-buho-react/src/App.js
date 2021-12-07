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
import Login from './login/Login';

function App () {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/proyectos" element={<Proyectos />} />
                <Route path="/login" element={<Login />} />
            </Routes>

            <Footer />
        </Router>
    )
}
export default App;