import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import QRCode from "react-qr-code";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import "./App.css";

const ids = [7028, 9478, 3197, 8897, 7646, 8853, 2103, 6222, 9808, 2118, 3444, 5243];

function App() {
  const [appMode, setAppMode] = useState("scan");
  const [data, setData] = useState("Not Found");

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
            <div key={id} className="card text-center">
              <QRCode className="w-full aspect-square" value={`${id}`} />
              <span className="block">{id}</span>
            </div>
          ))}
        </div>
      )}
      {appMode === "scan" && (
        <div className="max-w-2xl m-auto">
          <BarcodeScannerComponent
            width={500}
            height={500}
            onUpdate={(err, result) => {
              if (result) setData(result.text);
              else setData("Not Found");
            }}
          />
          <p>{data}</p>
        </div>
      )}
    </>
  );
}

export default App;
