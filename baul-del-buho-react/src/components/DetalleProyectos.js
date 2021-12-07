import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import {Container, Row, Col, Button} from 'react-bootstrap';
import {
	Card, CardBody, Breadcrumb, BreadcrumbItem
} from "reactstrap";
import '../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Esta es para icono estaticos fa
import {faFilePdf} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

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

function print () {
    window.print ();
}


const DetalleProyectos = () => {

    const {id} = useParams();
    const proyectos = useProyectos();

    return(
        <div>
           <Container>
                {proyectos.filter(proyecto => proyecto.id===`${id}`).map(filteredProyecto => (
                    <Container>
                        <Breadcrumb> 
                            <BreadcrumbItem>
                                <Link to={`/`} className="Links">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to={`/proyectos`} className="Links">Proyectos</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>{filteredProyecto.titulo}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2 className="titulo">{filteredProyecto.titulo}</h2>
                        <Button className="boton_pdf" variant="outline-secondary" onClick={() => print()}>
                            <FontAwesomeIcon className="icon_pdf" icon={faFilePdf}/>
                            &nbsp; Descargar
                        </Button>
                        <Row>
                            <Col className="images">
                                <img src={`${process.env.PUBLIC_URL}/img/${filteredProyecto.img2}`} alt="{item.nombre} Imagen" />
                            </Col>
                            <Col className="images">
                                <img src={`${process.env.PUBLIC_URL}/img/${filteredProyecto.img3}`} alt="{item.nombre} Imagen" />
                            </Col>
                        </Row>
                        <Card border="secondary" className="tarjeta_autor">
                            <CardBody>
                                <Row>
                                    <Col>
                                        <p>Autor</p>
                                        <img src={`${process.env.PUBLIC_URL}/img/${filteredProyecto.imgprofile}`} alt="{item.nombre} Imagen" />
                                    </Col>
                                    <Col className="estilo_autor">

                                        <h5><b>By</b> {filteredProyecto.autor}</h5>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        
                        <Container className="contenedor_descripcion">
                            <Container>
                                {filteredProyecto.parrafos.map((parrafo) => (
                                    <p>{parrafo}</p>
                                ))}
                            </Container>

                            <h2 className="titulo">Ingredientes</h2>
                            <ul>
                                {filteredProyecto.ingredientes.map((ingrediente) => (
                                <li>{ingrediente}</li>        
                                ))}
                            </ul>
                            <h2 className="titulo">Pasos</h2>
                            <Container>
                                {filteredProyecto.pasos.map((paso) => (
                                    <p>{paso}</p>
                                ))}
                            </Container>
                        </Container>

                    </Container>
                    
                ))}   
            </Container>
        </div>
        
    )
}

export default DetalleProyectos;