import React from 'react';
import ReactDOM, { render } from 'react-dom';
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

// const TheClock = (props) =>{
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// class TheClock extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {date: new Date()}
//   }
  
//   componentDidMount(){
//     this.timerID = setInterval(
//      () => this.tick(),
//      1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render (){
//     return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//     </div>
//     );
//   }
// }

//   ReactDOM.render(
//     // <React.StrictMode>
//       <TheClock />,
//   //{ </React.StrictMode>, }
//   document.getElementById('root')
//   );
  // setInterval(tick, 1000);


// function TheWelcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// class ClassWelcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// const nombre ="Jonathan";

// const MainApp = (props) => {
//   return (
//   <div className="welcome-container"> 
//   <TheWelcome name={ nombre } />
//   <TheWelcome name="Stephan" />
//   <TheWelcome name="Grupo 01" />
//   </div>
//     );
// }

// const usuarios = {
//   jonsteph : {
//     name : "Jonsteph  Meza",
//     description : "sdjjf jdh fjd  d hdfjdkjhjsk  djhdjd  s dkjshdj s  jdhj d jdhdjs j sjdhjs d hjkjfkhsaska jjhsduk" ,
//     image: "https://placeimg.com/300/300/people"
//   },
//   grupo : {
//     name : "Grupo 01",
//     description : "sdjjf jdh fjd  d hdfjdkjhjsk  djhdjd  s dkjshdj s  jdhj d jdhdjs j sjdhjs d hjkjfkhsaska jjhsduk" ,
//     image: "https://placeimg.com/300/300/tech"
//   },
//   nuevo : {
//     name : "Un nuevo elemento",
//     description : "sdjjf jdh fjd  d hdfjdkjhjsk  djhdjd  s dkjshdj s  jdhj d jdhdjs j sjdhjs d hjkjfkhsaska jjhsduk" ,
//     image: "https://placeimg.com/300/300/animals"
//   }
// }

// const UserAvatar = (props) => {
//   return(
//     <div className="user-avatar">
//         <img className="user-avatar__image" src={props.user.image} alt={props.user.name} />
//       </div>
//   );
// }

// const UserInfo = (props) => {
//   return (
//     <div className="user-info">
//         <h2 className="user-info__name">{props.user.name}</h2>
//         <hr/>
//         <p className="user-info__description">{props.user.description}</p>
//       </div>
//   );
// }

// const UserCard = (props) => {
//   return (
//     <div className="user-card">
//       <UserAvatar user={props.user}/>
//       <UserInfo user={props.user}/>
//     </div>
//   );
// }


// ReactDOM.render(
//     <React.StrictMode>

//   </React.StrictMode>,
//   document.getElementById('root')
//   );


  
  {/* <div className="card-container">  
    <UserCard user={usuarios.jonsteph}/>
    <UserCard user={usuarios.grupo}/>
    <UserCard user={usuarios.nuevo}/>
  </div> */}

//   function Form() {
//     function handleSubmit(e) {
//       e.preventDefault();    console.log('You clicked submit.');
//     }
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }

// ReactDOM.render(
//     <React.StrictMode>
//       <Form />
//   </React.StrictMode>,
//   document.getElementById('root')
//   );

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback    
    this.handleClick = this.handleClick.bind(this);
    }

  handleClick() {    this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn}));  }
  render() {
    return (
      <div id="button-enclosure">
      <div>
        
      
      <button onClick={this.handleClick}> {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
      <p>{this.state.isToggleOn ? 'Lights On!' : 'Nothing'}</p>
      </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);

  // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
