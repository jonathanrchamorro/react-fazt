import React from 'react';
import './App.css';

function Helloworld(){
  return (
    <div id = "hello"> Hello world</div>
  )
}

// const App = () => <div>este es mi componente: <Helloworld/> </div>
// dos formas de escribir la misma funcion 

function App() {
  return (
    <div> este es mi componente: <Helloworld/> </div>
  );
}

export default App;
