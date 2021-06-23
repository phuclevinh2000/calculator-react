import React, {useState} from 'react';
import './App.css';
//import components
import Form from './components/Form';
import BasicCom from './components/BasicCom';
import chooseCal from './components/chooseCal';

const App = () => {
  const [result, setResult] = useState("")

  const onChangeHandle = (e) => {
    // setResult(e.target.value)
    console.log(e.target.value)
  }

  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const clear = () => {
    setResult("")
  }

  const minus = () => {
    if(result.charAt(0) === "-") {
      setResult(result.substring(1))
    } else {
      setResult("-" + result)
    }
  }

  const percent = () => {
    try {
      setResult(result/100)
    } catch(err) {
      setResult("Wrong input")
    }
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch(err) {
      setResult("Wrong input")
    }
  }

  return (
    <div className="container">
      {/* <div>
        <button className="optionBtn">ASSD</button>
        <button className="optionBtn">JS</button>
      </div> */}
      {/* Input section */}
      <Form 
        result={result}
        onChangeHandle={onChangeHandle}
      />
      {/* Button section */}
      <BasicCom 
        handleClick={handleClick}
        clear={clear}
        minus={minus}
        percent={percent}
        calculate={calculate}
      />
    </div>
  )
}

export default App;
