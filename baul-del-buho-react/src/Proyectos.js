import React, { useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Card, CardBody,
	CardTitle, CardText, Row, Col,
    Breadcrumb, BreadcrumbItem
} from "reactstrap";
import {Link} from 'react-router-dom';
import './index.css';
import {Container} from 'react-bootstrap';

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
        <Container>
            <Breadcrumb> 
                <BreadcrumbItem>
                    <Link to={`/`} className="Links">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Proyectos</BreadcrumbItem>
            </Breadcrumb>
            <Row xs={3} md={3} className="g-4">
            {proyectos.map(item => (
                <Col className="cards">
                    <Card key={item.id} className="tarjeta_autor">
                        <Link to={`/proyectos/${item.id}`} className="Links">
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
                </Col>
            ))}
            </Row>
        </Container>
    )
}

export default Proyectos;

/*
<div className="cards">
            <CardGroup className="col-xs-3">
                {proyectos.map(item => (
                <Card key={item.id} className="tarjeta_autor">
                    <Link to={`/proyectos/${item.id}`} className="Links">
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
*/