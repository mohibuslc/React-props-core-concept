
import './App.css';
import React , {useEffect, useState} from 'react';


function App() {
const Persons = [{name: 'uddin', job: 'frontend Develop'},
{name:'Md. Kamal Ussian', job: 'web-Develop'},
];

const Nayoks = ["Aonitaboson" ,"Shabana", "Shabnor", "Eliaskancun"


];

  return (
    <div className="App">
      <header className="App-header">
              

        <PersonInfo pd = {Persons[0]}></PersonInfo>
        <User></User>
        <MoveCounter></MoveCounter>
          <h3>Nayoks List </h3>

        <Nayok pk={Nayoks[0]}></Nayok>
        <Nayok pk={Nayoks[1]}></Nayok>
        <Nayok pk={Nayoks[2]}></Nayok>
        <Nayok pk={Nayoks[3]}></Nayok>
        
      
      </header>
    </div>
  );
}

function User(){

  const [users, setUsers]= useState([]);

  useEffect(() =>{

    fetch('https://jsonplaceholder.typicode.com/users')

    .then(res => res.json())
    .then(data => setUsers(data))

  }, [])

  return (
    <div>

     <ul>
      {

        users.map(pd => <li>{pd.name}</li>)
      }
     </ul>
    </div>


  )
}

function PersonInfo (props){

const { name , job } = props.pd
  return (

    <div>

    <h1> person Name : {name}</h1>
    <p>Job Description : {job}</p>

    </div>
  )
}

function Nayok(props){

  const design = {

    width: '550px',

    border: '2px solid green', 

    borderRedius: '20px ',

    margin: '20px'

    
  }

  
  return (

    <div style={design}>

    
    <h3>Nayok name : {props.pk}</h3>
    </div>

  )
}

function MoveCounter (){

  const [count, setCount] = useState(5)

  function handleCount(){

    const newCount = count +1 ;

    setCount(newCount)


  };

  return (
<div>
    <button onClick={handleCount}>Movies Counter " + " </button>
    <h1>Total Movies : {count}</h1>

    <MoveDisplay movies= {count-1}></MoveDisplay>
    <MoveDisplay movies= {count}></MoveDisplay>
    <MoveDisplay movies= {count+1}></MoveDisplay>
    <MoveDisplay movies= {count+7}></MoveDisplay>

    </div>
  )
}

function MoveDisplay(props){

  return <h4> Movie going To Display : {props.movies}</h4>
}
export default App;
