import { useState } from "react";
import supakarLogo from "../public/logo.png";
import loading from "../public/sounds/loading.mp3";

function App() {
  const [instruction, setInstruction] = useState("Click on START to begin.");
  const audio = new Audio(loading);
  const [btn, setBtn] = useState("bg-blue-500 hover:bg-blue-700");
  const [btnText, setBtnText] = useState("START");

  const start = () => {
    audio.play();
    setTimeout(() => {
      setInstruction(`
        <p>Supakar est un petit projet pour l'apprentissage de React. </p>
          <p>Il est basé sur le template Vite + React. </p>
          <p>Pour démarrer, il suffit de cliquer sur le boutton "START". </p>
          <p>Bonne session de codage !</p>
        `);
    }, 1300);
    setBtn("bg-red-500 hover:bg-red-700");
    setBtnText("STOP");
  };

  return (
    <>
      <div className="p-5 flex flex-col items-center justify-center h-screen">
        <div className="w-64 mb-10">
          <img src={supakarLogo} alt="Supakar Logo" />
        </div>
        <button
          onClick={
            btnText === "START"
              ? start
              : () => {
                  audio.pause();
                  audio.currentTime = 0;
                  setInstruction("Click on START to begin.");
                  setBtn("bg-blue-500 hover:bg-blue-700");
                  setBtnText("START");
                }
          }
          className={btn + " text-white font-bold py-2 px-4 rounded"}
        >
          {btnText}
        </button>
        <div className="text-center text-lg transitison duration-300">
          {instruction}
        </div>
      </div>
    </>
  );
}

export default App;
