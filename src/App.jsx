// import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main';
import StatePractice from './components/StatePractice';
import Contact from './components/Contact';
// import profile from './assets/profile.png';
import Form from './components/Form';
import padsData from './components/pads.js'
import Pad from './components/Pad.jsx';
import { useState } from 'react';
import ClaudeRecipe from './components/ClaudRecipe.jsx';
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const [on, setOn] = useState(props.on);
  const [pads,setPads]=useState(padsData);
  

  function toggle(id) {
    console.log(id);
    //map over the pads array
    setPads(prevpads =>prevpads.map(item=>{
      return item.id===id?{...item,on:!item.on}:item;
    }));
  }

  function resetAll(){
    console.log('Reset');
    setPads(prevpads=>prevpads.map(item=>{
      return {...item,on:!item.on}
    }))
  }
  const buttonElement =pads.map(pad=>{
    return <Pad id={pad.id} key={pad.id} color={pad.color} on={pad.on} toggle={toggle}/>
  })
  return (
    <>
      <Header/>
      <Main/>
      {/* <Contact 
        img={profile}
      /> */}
      {/* <Form darkMode={true}/> */}
      {/* <StatePractice/> */}
      {/* <div style={{backgroundColor:"#555"}}>
        {buttonElement}
        <button style={{ backgroundColor: "#cccccc" }} onClick={resetAll}>Reset All</button>
      </div> */}

    </>
  )
}

export default App
