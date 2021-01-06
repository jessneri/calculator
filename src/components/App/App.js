/* eslint-disable react/no-direct-mutation-state */
import React, { useState } from "react";
import "./App.css";
import Button from "../Button/Button";


const App = () => {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);


  const handleButton = (props) => () => {

    //functions
    if(props === "Clear") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if(props === "%") {
      setValue((parseFloat(value) / 100).toString());
      return;
    }

    if(props === ".") {
      if(value.includes(".")) return

      setValue(value + ".");
      return;

    }

    //operators
    if(props === "+"){
      if(operator !== null){
        if(operator === "+"){
          setMemory(memory + parseFloat(value));
        }else if(operator === "-"){
          setMemory(memory - parseFloat(value));
        }else if(operator === "*"){
          setMemory(memory * parseFloat(value));
        }else if(operator === "/"){
          setMemory(memory / parseFloat(value));
        }
      }else{
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("+");
      return;
    }

    if(props === "-"){
      if(operator !== null){
        if(operator === "+"){
          setMemory(memory + parseFloat(value));
        }else if(operator === "-"){
        }else if(operator === "*"){
          setMemory(memory * parseFloat(value));
        }else if(operator === "/"){
          setMemory(memory / parseFloat(value));
        }
      }else{
        setMemory(parseFloat(value));
      }
      
      setValue("0");
      setOperator("-");
      return;
    }

    if(props === "*"){
      if(operator !== null){
        if(operator === "+"){
          setMemory(memory + parseFloat(value));
        }else if(operator === "-"){
        }else if(operator === "*"){
          setMemory(memory * parseFloat(value));
        }else if(operator === "/"){
          setMemory(memory / parseFloat(value));
        }
      }else{
        setMemory(parseFloat(value));
      }
      
      setValue("0");
      setOperator("*");
      return;
    }

    if(props === "/"){
      if(operator !== null){
        if(operator === "+"){
          setMemory(memory + parseFloat(value));
        }else if(operator === "-"){
        }else if(operator === "*"){
          setMemory(memory * parseFloat(value));
        }else if(operator === "/"){
          setMemory(memory / parseFloat(value));
        }
      }else{
        setMemory(parseFloat(value));
      }
      
      setValue("0");
      setOperator("/");
      return;
    }

    if(props === "="){
      if(!operator) return;

      if(operator === "+"){
        setValue((memory + parseFloat(value)).toString());
      }else if(operator === "-"){
        setValue((memory - parseFloat(value)).toString());
      }else if(operator === "*"){
        setValue((memory * parseFloat(value)).toString());
      }else if(operator === "/"){
        setValue((memory / parseFloat(value)).toString());
      }
       
      setMemory(null);
      setOperator(null);
      return;
    }

    if(value[value.length - 1] === "."){
      setValue(value + props);
    }else{
      setValue(parseFloat(parseFloat(value) + props).toString());
    }
  }   

  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
          <div className="input">{value}</div>
        </div>
        <div className="row">
          <Button onButtonClick={handleButton} props="7" />
          <Button onButtonClick={handleButton} props="8" />
          <Button onButtonClick={handleButton} props="9" />
          <Button onButtonClick={handleButton} props="/" type="operator"/>
        </div>
        <div className="row">
          <Button onButtonClick={handleButton} props="4" />
          <Button onButtonClick={handleButton} props="5" />
          <Button onButtonClick={handleButton} props="6" />
          <Button onButtonClick={handleButton} props="*" type="operator"/>
        </div>
        <div className="row">
          <Button onButtonClick={handleButton} props="1" />
          <Button onButtonClick={handleButton} props="2" />
          <Button onButtonClick={handleButton} props="3" />
          <Button onButtonClick={handleButton} props="+" type="operator"/>
        </div>
        <div className="row">
          <Button onButtonClick={handleButton} props="." />
          <Button onButtonClick={handleButton} props="0" />
          <Button onButtonClick={handleButton} props="%" type="operator"/>
          <Button onButtonClick={handleButton} props="-" type="operator"/>
        </div>
        <div className="row">
          <Button onButtonClick={handleButton} props="Clear" type="function"/>
          <Button onButtonClick={handleButton} props="=" type="function"/>
        </div>
      </div>
    </div>
  );
};

export default App;
