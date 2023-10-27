import React, { useState } from "react";
import { buttonsArray } from "./buttons";
import { stringify } from "querystring";

const Main = () => {

  const [screen, setScreen] = useState("0");
  function handleClick(event: string) {}

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
