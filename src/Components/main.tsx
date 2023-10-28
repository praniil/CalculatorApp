import React, { useState } from "react";
import { buttonsArray } from "./buttons";
import { stringify } from "querystring";

const Main = () => {
  const [screen, setScreen] = useState("0");
  const [currentInput, setCurrentInput] = useState("");
  const [previousInput, setPreviousInput] = useState("");
  const [operator, setOperator] = useState("");
  function handleClick(event: string) {
    if (/[0-9]/.test(event)) {
      setScreen((prevScreen) => {
        const newInput = prevScreen === "0" ? event : prevScreen + event;
        setCurrentInput(newInput);
        return newInput;
      });
    } else if (["+", "-", "/", "*"].includes(event)) {
      console.log(event);
      setScreen((prevScreen) => {
        if (currentInput !== "") {
          setPreviousInput(currentInput);
          setOperator(event);
          const newInput = prevScreen + "" + event + "";
          setCurrentInput("");
          return newInput;
        } else {
          return prevScreen;
        }
      });
    } else if (event == "C") {
      setScreen("0");
      setCurrentInput("0");
    } else if (event == "=") {
      if (previousInput && operator && currentInput) {
        const result = Calculate(previousInput, operator, currentInput);
        console.log(result)
        setScreen(result.toString());
        
        console.log(screen);
        setPreviousInput("");
        setCurrentInput("");
        setOperator("");
      }
    }
  }
  function Calculate(number1: string, operator : string , number2: string) {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    switch (operator) {
      case "+" :
        return num1 + num2;
      case "*" :
        return num1 * num2;
      case "-" :
        return num1 - num2;
      case "/" :
        return num1 / num2;
      default:
        return number2;
    }
  }

  return (
    <div className="m-14">
      <div className="w-64  h-14 m-auto p-2 text-right border-2">{screen}</div>
      <div className="grid grid-rows-5 grid-cols-4 gap-1 w-64 h-80 m-auto">
        {buttonsArray.flat().map((buttons, index) => (
          <button
            className=" m-3 w-12 bg-black-400 hover:border-2"
            key={index}
            value={buttons}
            onClick={() => handleClick(buttons)}
          >
            {" "}
            {buttons}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Main;
