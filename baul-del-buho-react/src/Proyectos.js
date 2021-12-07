import React, { useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Card, CardBody,
	CardTitle, CardText, CardGroup,
} from "reactstrap";
import {Link} from 'react-router-dom';
import './index.css';

function useProyectos () {
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        fetch("/InfoProyectos.json")
        .then(response => response.json())
        .then(datos => {
            setProyectos(datos)
        })
    }, [])
        return proyectos
}

function Proyectos () {

    const proyectos = useProyectos();

    return(
        <div className="cards">
            <CardGroup>
                {proyectos.map(item => (
                <Card key={item.id}>
                    <Link to={item.link} className="Links">
                    <CardBody>
                        <img src={`${process.env.PUBLIC_URL}/img/${item.img}`} alt="{item.nombre} Imagen" />
                        <CardTitle tag="h2">
                            {item.titulo}
                        </CardTitle>
                        <CardText>
                            <b>by</b> {item.autor}
                        </CardText>
                    </CardBody>
                    </Link>
                </Card>
                ))}
            </CardGroup>
        </div>
    )
}

export default Proyectos;