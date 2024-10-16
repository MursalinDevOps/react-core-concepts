import Actors from './Actors';
import './App.css'
import Todo from './Todo';
import Artists from './Artists';

function App() {
  let artists = [
    {id:1, name:"Eminem", song:"Slim Shady"},
    {id:2, name:"Post Malone", song:"Sunflower"},
    {id:3, name:"Lana Del Rey", song:"Summertime Sadness"},
    {id:4, name:"Adele", song:"Set fire to the rain"},
    {id:5, name:"Tame Impala", song:"Let it happen"},
    {id:6, name:"Sabrina Carpenter", song:"Espresso"},
    {id:7, name:"Katy Perry", song:"Roar"}
  ]
  let actors = ['Tom Cruise','Leo Di Cap','Cillian Murphy','Tom Holland','Christian Bale','Morgan Freeman']
  return (
    <>
      <h1>React</h1>
      {
        artists.map(artist => <Artists artist={artist}></Artists>) 
      }
    {
      actors.map(actor => <Actors name={actor}></Actors>)
    }
      <Todo task="Learn React" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo>
      <Todo task="Try conditional rendering" isDone={true}></Todo>
      <Todo task="Finish module" isDone={false}></Todo>
      <Person></Person>
      <Developer></Developer>
      <Student grade="10" gpa="A+"></Student>
      <Device deviceName="Nothing 2" price="$450"></Device>
      <Device deviceName="Iphone 16 Pro" price="$1200"></Device>
      <Device deviceName="Samsung S24 Ultra" price="$1100"></Device>
      <Device deviceName="Google Pixel 9 Pro" price="$990"></Device>
    </>
  )
}



function Person (){
  const person = {name:'Max', age:18}
  const nationality = 'Bangladeshi';
  return (
    <h2>My name is {person.name}. I am {person.age}. My nationality is {nationality} </h2>
  )
}
function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid tomato',
    borderRadius: '10px',
    color:'tomato'
  }
  return (
    <div style={developerStyle}>
    <h4> Hello React! </h4>
    </div>
  )
}
function Student({grade, gpa}){
  return (
    <div>
      <h4>Hi ! I'm a student. I read in class {grade}. My GPA is {gpa}</h4>
    </div>
  )
}
function Device({deviceName, price}){
  return (
    <div style={{border:'2px solid green',borderRadius:'10px', color:'greenyellow', margin:'30px'}}>
        <p>Device name: {deviceName}</p>
        <p>Price: {price}</p>
    </div>
  )
}


export default App
