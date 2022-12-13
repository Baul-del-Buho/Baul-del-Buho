import { useState } from "react";
import { useNavigate } from "react-router-dom";// V6
import 'bootstrap/dist/css/bootstrap.min.css';
import api from "./api/proyectos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlusSquare } from "@fortawesome/free-regular-svg-icons";


const NewProyecto = ({proyectos, setProyectos}) => {
    const [proyTitle, setProyTitle] = useState('');
    const [proyBody, setProyBody] = useState('');
    const [proyIngreds, setProyIngreds] = useState('');
    const [proyPasos, setProyPasos] = useState(['']);
    const [image, setImage] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();
    const addStep = () => {
        const nuevosPasos = [...proyPasos];
        setProyPasos(nuevosPasos);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const id = proyectos.length ? proyectos[proyectos.length - 1].id + 1 : 1 ;
        const newProy = {id,img:image, titulo: proyTitle, autor:author, parrafos:[proyBody], ingredientes:[proyIngreds], pasos:[proyPasos] };

        try{
            const response = await api.post("/proyectos", newProy);
            const updatedProyectos = [...proyectos, response.data];

            setProyectos(updatedProyectos);
            setProyTitle('');
            setProyBody('');
            navigate("/");
        } catch(err){
            console.log(`Error ${err.message}`);
        }
    }
  
    return (
    <>
    <form action="" className="newProject" onSubmit={handleSubmit}>
        <input 
            className="new-project-input"
            id="proyTitle"
            type="text"
            placeholder="Title" 
            required
            value={proyTitle} 
            onChange={(e) => setProyTitle(e.target.value)} 
        />
        <input 
            className="new-project-input"
            id="author"
            type="text"
            placeholder="Author" 
            required
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
        />
        <input 
            className="new-project-input"
            id="image"
            type="text"
            placeholder="Image Link" 
            required
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
        />

        <textarea 
            className="new-project-input"
            name="" 
            id="proyBody" 
            required
            cols="30" 
            rows="10" 
            type="text"
            placeholder="Write down your ideas"
            value={proyBody}
            onChange={(e) => setProyBody(e.target.value)}
        ></textarea>
        <input 
            className="new-project-input"
            name="" 
            id="proyIngreds" 
            required 
            type="text"
            placeholder="Write the ingredients needed"
            value={proyIngreds}
            onChange={(e) => setProyIngreds(e.target.value)}
        ></input>
        <button className="btn btn-primary" >
            <FontAwesomeIcon icon={faPlusSquare} />
            </button>
            <hr />
        <input 
                className="new-project-input"
                name=''
                id="proyPasos" 
                required
                type="text"
                placeholder="Write the steps needed"
                value={proyPasos}
                onChange={(e) => setProyPasos(e.target.value)}
            ></input>
        
        <button className="btn btn-primary" >
            <FontAwesomeIcon icon={faPlusSquare} />
            </button>
            <hr />
        <button className="btn btn-success">Crear</button>
    </form>
    </>
  )
}

export default NewProyecto