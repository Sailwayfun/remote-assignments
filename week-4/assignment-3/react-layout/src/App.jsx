import './App.css'
import NavBar from './components/nav/NavBar';
import Header from './components/header/Header';
import Section from "./components/section/Section";
import { useState, createContext } from "react";
import ToggleButton from './components/ui/ToggleButton';

const contentBoxes = [
  { id: 1, text: "Content Box 1" },
  { id: 2, text: "Content Box 2" },
  { id: 3, text: "Content Box 3" },
  { id: 4, text: "Content Box 4" },
  { id: 5, text: "Content Box 5" },
  { id: 6, text: "Content Box 6" },
  { id: 7, text: "Content Box 7" },
  { id: 8, text: "Content Box 8" },
]
export const BoxContext = createContext([]);

function App() {
  const [message, setMessage] = useState("Welcome Message");
  const [showLowerBoxes, setShowLowerBoxes] = useState(false);
  const handleClickHeader = () => {
    setMessage("Have a Good Time!");
  }
  const handleBoxesToggle = () => {
    setShowLowerBoxes(prevState => !prevState);
  }

  return (
    <>
      <BoxContext.Provider value={contentBoxes}>
        <NavBar />
        <Header onClick={handleClickHeader} greeting={message} />
        <Section position="upper" show={showLowerBoxes} onToggle={handleBoxesToggle}/>
      </BoxContext.Provider>
    </>
  )
}

export default App
