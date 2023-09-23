import { useState } from 'react';
import './App.css'
import Counter from './components/Counter'

function App() {
  const initialValues = [0, 0, 0];
  const [values, setValues] = useState(initialValues);

  ////update a single counter
  function updateCounterById(id) {
    setValues(prev => {
      let newValues = [...prev];
      newValues[id] += 1;
      return newValues;
    })
  }

  ///update all the counters synchronously
  function updateCounters () {
    setValues(prev => {
      let newValues = [...prev];
      newValues = newValues.map(value => value + 1);
      return newValues;
    })
  }

  ///add a new counter
  function addNewCounter () {
    setValues(prev => {
      let newValues = [...prev];
      newValues = newValues.concat([0]);
      return newValues;
    })
  }

  return (
    <>
      <div className="main-container">
        <Counter onIncrement={updateCounters}>All + 1</Counter>
        {values.map((value, i) => <Counter key={i} value={value} onIncrement={() => updateCounterById(i)}>+1</Counter>)}
        <Counter onIncrement={addNewCounter}>Add Counter</Counter>
      </div>
    </>
  )
}

export default App
