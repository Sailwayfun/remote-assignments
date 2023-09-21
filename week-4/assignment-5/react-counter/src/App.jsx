import { useState } from 'react';
import './App.css'
import Counter from './components/Counter'

function App() {
  const initialValues = [0, 0, 0];
  const [values, setValues] = useState(initialValues);

  function updateCounterById(e) {
    const targetId = +e.target.id;
    setValues(prev => {
      let newValues = [...prev];
      newValues[targetId] += 1;
      return newValues;
    })
  }

  function updateCounters (e) {
    setValues(prev => {
      let newValues = [...prev];
      newValues = newValues.map(value => value + 1);
      return newValues;
    })
  }

  return (
    <>
      <div className="main-container">
        <Counter onIncrement={updateCounters}>All + 1</Counter>
        {values.map((value, i) => <Counter key={i} id={i} value={value} onIncrement={updateCounterById}>+1</Counter>)}
      </div>
    </>
  )
}

export default App
