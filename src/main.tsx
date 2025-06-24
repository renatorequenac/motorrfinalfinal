import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MotoDetalle from "./MotoDetalle";
import VenderTuMoto from "./VenderTuMoto";
import Carrito from "./Carrito";
import Pago from "./Pago";

// Verificamos que el root exista
const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/moto/:id" element={<MotoDetalle />} />
          <Route path="/vender" element={<VenderTuMoto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/pago" element={<Pago />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  throw new Error("No se encontró el elemento #root en el HTML");
}
