import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import QRCode from "react-qr-code";
import "./App.css";

const ids = [7028, 9478, 3197, 8897, 7646, 8853, 2103, 6222, 9808, 2118, 3444, 5243];

function App() {
  const [appMode, setAppMode] = useState("barcodes");
  const changeAppMode = () => {
    const newMode = appMode === "barcodes" ? "scan" : "barcodes";
    setAppMode(newMode);
  };
  return (
    <>
      <button className="border border-slate-700 p-2" onClick={changeAppMode}>
        {appMode === "barcodes" ? "Scan" : "Barcodes"}
      </button>
      {appMode === "barcodes" && (
        <div className="max-w-2xl m-auto grid grid-cols-3 gap-8">
          {ids.map((id) => (
            <div key={id} className="card">
              <QRCode className="w-full aspect-square" value={`${id}`} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
