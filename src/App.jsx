import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BarcodeScanner } from "react-barcode-scanner";
import "react-barcode-scanner/polyfill";
import "./App.css";

function App() {
  const handleCapture = () => {
    alert(captured);
  };

  return (
    <div className="card">
      <BarcodeScanner onCapture={handleCapture} options={{ formats: ["code_128"] }} />
    </div>
  );
}

export default App;
