import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, CardTitle, CardText, CardGroup } from "reactstrap";
import "../index.css";

const projects = {
  id: "3",
  nombre: "Estuche casero para marco de bicicleta",
  autor: "Jonsteph93",
  categoría: "Exteriores",
  dificultad: 3,
  imagen: "img/Estuche1.jpg",
  descripcion:
    "Contenedor de objetos creado con tejas(PVC), bisagras de caja plástica y láminas de cielo raso(PVC) "
};

const formatProject = (projects) => {
  return (
    <div className="cards">
      <CardGroup>
        <Card>
          <CardBody>
            <img src={projects.imagen} width="100%" />
            <CardTitle tag="h2">
              <strong>{projects.nombre}</strong>
            </CardTitle>
            <CardText>{projects.descripcion}</CardText>
            <CardText>
              <strong>Por {projects.autor}</strong>
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
};

function ProjectCard() {
  return <div>{formatProject(projects)}</div>;
}

export default ProjectCard;
