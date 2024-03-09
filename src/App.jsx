// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert('button clicked');
  }

  function handleClick2(){
    alert('button clicked 2');
  }




  return (
    <>

      
      <Users></Users>
      <h1>React concept</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <Counter></Counter>
      <Friends></Friends>


    </>
  )
}

export default App
