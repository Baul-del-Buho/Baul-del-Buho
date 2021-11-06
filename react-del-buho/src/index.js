import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';



//ReactDOM.render(element, document.getElementById('root'));}



/*const nombre = {
  name:"Stephan",
  apellido:"Meza"
}
const formatName = (nombre) => {
  return nombre.name + ' ' + nombre.apellido;
}
const getGreeting = (nombre) => {
  if(nombre){
    return <h1>Hola {formatName(nombre)} del grupo {grupo}</h1>;
  }else{
    return <h1>Hola Extraño</h1>;
  }
}
const grupo = "01";

const element =
<div>
{ getGreeting( nombre ) }
<p className='main-text' >lorem ipsum dolor sit amet</p>
</div>;*/

const tick = () => {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  
  ReactDOM.render(
    <React.StrictMode>
    {element}
  </React.StrictMode>,
  document.getElementById('root')
  );
}
  setInterval(tick, 1000);
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
