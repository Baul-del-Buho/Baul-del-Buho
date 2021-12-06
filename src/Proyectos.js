import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, CardTitle, CardText, CardGroup } from "reactstrap";

import ProjectCard from "./components/ProjectCard";
import CommentsCard from "./components/CommentsCard";
import { Link } from "react-router-dom";
import "./index.css";

function useProyectos() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    fetch("/InfoProyectos.json")
      .then((response) => response.json())
      .then((datos) => {
        setProyectos(datos);
      });
  }, []);
  return proyectos;
}

function Proyectos() {
  const proyectos = useProyectos();

  return (
    <div className="cards">
      <CardGroup>
        {proyectos.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={item.link} className="Links">
                <CardBody>
                  <img
                    src={`${item.img}`}
                    alt="{item.nombre} Imagen"
                    style={{ width: "100%" }}
                  />
                  <CardTitle tag="h2">{item.titulo}</CardTitle>
                  <CardText>{item.descripcion}</CardText>
                  <CardText>
                    <b>by</b> {item.autor}
                  </CardText>
                </CardBody>
              </Link>
            </Card>
          );
        })}
      </CardGroup>
      <ProjectCard />
      <CommentsCard currentUserId="1" />
    </div>
  );
}

export default Proyectos;
