// import React from 'react'
import { useState } from "react";

const Input = () => {
  const [inputtt, setinput] = useState("");
  const handleclick = () => {
    console.log(inputtt);
  };

  return (
    <>
      <input
        type="text"
        className="border-2 rounded-2xl p-2 m-3"
        placeholder="Enter txt"
        value={inputtt}
        onChange={(e) => setinput(e.target.value)
        }
      />
      <button onClick={handleclick} className="bg-amber-400 p-2 rounded-2xl ">Button</button>
    </>
  );
};

export default Input;
