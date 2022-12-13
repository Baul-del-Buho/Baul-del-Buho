import { React, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route, 
    useNavigate
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Principal  from './Principal';
import Proyectos from './Proyectos';
import NewProyecto from './NewProyecto';
import Proyecto from './Proyecto';
import Login from './api/Login';


function App () {
    const [proyectos, setProyectos] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [resBusqueda, setResBusqueda] = useState([]);
    const [modo, setModo] = useState('light');

    useEffect(() => {
        async function retrieve(){
        const response = await fetch("http://localhost:4000/proyectos");
        const datos = await response.json();
        setProyectos(datos);
    }
        retrieve();
    }, []);

    

    return (
        <Router>
            <Navbar busqueda={busqueda} setBusqueda={setBusqueda} modo={modo} setModo={setModo} />
                <main style={modo==="light"? {backgroundColor:"white", color:"black"} : {backgroundColor:"black", color:"white"}} >
                    <Routes>
                        <Route path="/" element={<Principal proyectos={proyectos} />} />
                        <Route path="/proyectos" element={<Proyectos proyectos={proyectos} setProyectos={setProyectos} resBusqueda={resBusqueda} setResBusqueda={setResBusqueda} />}></Route>
                        <Route path="/proyecto/:id" element={<Proyecto proyectos={proyectos} setProyectos={setProyectos} />} />
                        <Route path="/nuevo" element={<NewProyecto proyectos={proyectos} setProyectos={setProyectos} />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </main>
            <Footer />
        </Router>
    )
}
export default App;