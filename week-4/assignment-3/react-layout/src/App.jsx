import './App.css'
import NavBar from './components/nav/NavBar';
import Header from './components/header/Header';
import Section from "./components/section/Section";
import UpperSection from "./components/section/UpperSection";
import LowerSection from "./components/section/LowerSection";
import { useState, createContext } from "react";
import CallToAction from './components/section/CallToAction';

const contentBoxes = 
  {
    upper: [{ id: 1, text: "Content Box 1" },
    { id: 2, text: "Content Box 2" },
    { id: 3, text: "Content Box 3" },
    { id: 4, text: "Content Box 4" }],
    lower: [{ id: 5, text: "Content Box 5" },
    { id: 6, text: "Content Box 6" },
    { id: 7, text: "Content Box 7" },
    { id: 8, text: "Content Box 8" }],
  }

export const BoxContext = createContext([]);

function App() {
  const [message, setMessage] = useState("Welcome Message");
  const [showBoxes, setShowBoxes] = useState(false);
  const handleClickHeader = () => {
    setMessage("Have a Good Time!");
  }
  const handleBoxesToggle = () => {
    setShowBoxes(prevState => !prevState);
  }

  return (
    <>
      <BoxContext.Provider value={contentBoxes}>
        <NavBar />
        <Header onClick={handleClickHeader} greeting={message} />
        <UpperSection position="upper"/>
        <CallToAction onToggle={handleBoxesToggle} />
        <LowerSection position="lower" showBoxes={showBoxes} />
      </BoxContext.Provider>
    </>
  )
}

export default App
