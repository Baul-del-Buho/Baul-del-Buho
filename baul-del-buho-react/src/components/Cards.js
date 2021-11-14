import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Card, CardBody,
	CardTitle, CardText,
    CardGroup
} from "reactstrap";
import "../index.css"

function Cards() {
	return (
		<div className="cards">
            <CardGroup>
                <Card>
                    <CardBody>
                        <CardTitle tag="h2">
                            Hecho por la comunidad
                        </CardTitle>
                        <CardText>
                            Cada miembro aporta su grano de arena para ampliar el conocimiento de todos
                        </CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h2">
                            Inclusivo
                        </CardTitle>
                        <CardText>
                        Sin importar tu origen o limitaciones físicas puedes aportar y aprender de los demás
                        </CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h2">
                            Oportunidades de negocio
                        </CardTitle>
                        <CardText>
                            Puedes vender el producto de tus ideas o recibir donaciones por tus aportes
                        </CardText>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
	);
}

export default Cards;
