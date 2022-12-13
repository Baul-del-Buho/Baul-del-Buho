import { useParams, Link, useNavigate } from "react-router-dom";//v6

const Proyecto = ({proyectos, setProyectos}) => {
    console.log(proyectos);
    const {id} = useParams();
    console.log(`ID: ${id}`);
    const project = proyectos.find(project =>(project.id).toString() === id);
    return (
    
        <article>
            {project && 
                <>
                <h2>{project.titulo}</h2>
                <p>By {project.autor}</p>
                <img src={project.img} alt="" />
                <p>{project.parrafos.map(parrafo => {
                    return(
                    <p>{`${parrafo}`}</p>
                    );}
                    )}</p>
                <hr />
                <section>
                <h3>Ingredientes:</h3>
                <img src={project.img2} alt="" />
                <ul>{project.ingredientes.map(item => {
                    return(
                    <li>{`${item}`}</li>
                    );}
                    )}</ul>
                    </section>
                    <hr />
                    <section>
                <h3>Pasos:</h3>
                <p>{project.pasos.map(parrafo => {
                    return(
                    <p>{`${parrafo}`}</p>
                    );}
                    )}</p>
                    </section>
                </>
            }
            {!project && 
                <>
                <section>
                <h2>Es una pena :( </h2>
                <p>Parece que esta pagina no ha sido creada o acaba de ser eliminada</p>
                <Link to="/proyectos">Volver a los proyectos</Link>
                </section>
                </>

            }
        </article>
    
  )
}

export default Proyecto;
