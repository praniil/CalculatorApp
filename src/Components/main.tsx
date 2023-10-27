import React, { useState } from "react";
import { buttonsArray } from "./buttons";
import { stringify } from "querystring";

const Main = () => {
  interface screenInterface {
    sign: string;
    num: string;
    res: number;
  }
  const [screen, setScreen] = useState<screenInterface>({
    sign: "",
    num: "0",
    res: 0,
  });

  function handleClick(event: string) {
    console.log(screen.num);
    if (/[0-9]/.test(event)) {
      setScreen((prevScreen) => ({
        ...prevScreen,
        num: prevScreen.num === "0" ? event : prevScreen.num + event,
      }));
    }
    if (/[%,+=]/.test(event)) {
      setScreen((prevScreen) => ({
        ...prevScreen,
        sign: prevScreen.sign === "" ? event : prevScreen.sign + event,
      }));
    }
    if (/[+/-/*-]/.test(event)) {
      setScreen((prevScreen) => ({
        ...prevScreen,
        sign: prevScreen.sign === "" ? event : prevScreen.sign + event,
      }));
    }
}
    return (
      <div>
        <div className="w-64 bg-red-400 h-14 m-auto p-2 text-right">
          {screen.num}{screen.sign}
        </div>
        <div className="grid grid-rows-5 grid-cols-4 gap-1 w-64 h-80 m-auto">
          {buttonsArray.flat().map((buttons, index) => (
            <button
              className="p-3 m-3 w-12 bg-red-400 "
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
