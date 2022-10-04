import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, CardTitle, CardText, CardGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "./index.css";

function Proyectos({ proyectos }) {
    

  return (
    <div className="cards">
      <CardGroup>
        <table>
            <tbody>
                {proyectos.map((item) => (
                    <tr>
                        <Card key={item.id}>
                            <CardBody>
                            <img src={item.img} alt="" />
                            <CardTitle tag="h2">{item.titulo}</CardTitle>
                            <CardText>
                                <b>by</b> {item.autor}
                            </CardText>
                            <p>{item.parrafos[1]}</p>
                            </CardBody>
                        </Card>
                    </tr>
                ))}
            </tbody>
        </table>
      </CardGroup>
    </div>
  );
}

export default Proyectos;