import { React, useEffect, useState } from 'react';
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
    const [proyectos, setProyectos] = useState([]);
   
    useEffect(() => {
        async function retrieve(){
        const response = await fetch("/InfoProyectos.json");
        const datos = await response.json();
        setProyectos(datos);
    }
        retrieve();
    }, []);

    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/proyectos" element={<Proyectos proyectos={proyectos} setProyectos={setProyectos}/>} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Proyectos proyectos={proyectos} setProyectos={setProyectos} />
            <Footer />
        </Router>
    )
}
export default App;