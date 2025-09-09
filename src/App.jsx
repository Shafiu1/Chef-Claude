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
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [pads,setPads]=useState(padsData);
  const buttonElement =pads.map(pad=>{
    return <Pad key={pad.id} color={pad.color} on={pad.on}/>
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
      <div style={{backgroundColor:"#555"}}>
        {buttonElement}
      </div>
    </>
  )
}

export default App
