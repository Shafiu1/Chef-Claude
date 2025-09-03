import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main';
import StatePractice from './components/StatePractice';
import Contact from './components/Contact';
import profile from './assets/profile.png'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
      <Contact 
        img={profile}
      />
      {/* <StatePractice/> */}
    </>
  )
}

export default App
