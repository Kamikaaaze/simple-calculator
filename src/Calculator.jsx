import { useState } from "react";
import "./Calculator.css";
import toast, {Toaster} from "react-hot-toast";

function Calculator() {
  const notify= () => toast("er er");
  const [num,setNum]= useState("");
  function handleClick(n) {
   setNum(num+n);
  }
  function result(){
    console.log(eval(num));
    setNum(eval(num));
  }
  function handleDelete(){
    setNum(num.slice(0,-1));
  }
  return (
    <div className="mainDiv">
      <div className="result">
        <p className="answer">{num}</p>
      </div>

      <div className="pad">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleDelete()}>DEL</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button
          onClick={() => {
            handleClick("3");
          }}
        >
          3
        </button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button className="reset"
          onClick={() => {
            setNum("");
          }}
        >
          Reset
        </button>
        <button className="equal" onClick={() => result()}>=</button>
      </div>
    </div>
  );
}
export default Calculator;
