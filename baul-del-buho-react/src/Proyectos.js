import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, CardTitle, CardText, CardGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "./index.css";

function Proyectos({ proyectos }) {
    console.log(proyectos);

  return (
    <div className="cards">
      <CardGroup>
        <table>
            <tbody>
                {proyectos.map((item) => (
                    <Link to={`/proyecto/${item.id}`}>
                      <tr>
                        <Card id="proyCard" key={item.id}>
                            <CardBody>
                            <img id="main_img" src={item.img} alt="" />
                            <CardTitle tag="h2">{item.titulo}</CardTitle>
                            <CardText>
                                <b>by</b> {item.autor}
                            </CardText>
                            
                            </CardBody>
                        </Card>
                      </tr>
                    </Link>
                ))}
            </tbody>
        </table>
      </CardGroup>
    </div>
  );
}

export default Proyectos;