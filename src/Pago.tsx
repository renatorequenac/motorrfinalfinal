import { useEffect, useState } from "react";

type Moto = {
  id: number;
  marca: string;
  modelo: string;
  precio: number;
};

const motos: Moto[] = [
  { id: 1, marca: "Honda", modelo: "XR150L", precio: 4746.67 },
  { id: 2, marca: "Bajaj", modelo: "Pulsar 150", precio: 3990.0 },
  { id: 3, marca: "Yamaha", modelo: "FZ-S", precio: 4260.0 },
  { id: 4, marca: "Suzuki", modelo: "Gixxer 150", precio: 4550.0 },
  { id: 5, marca: "TVS", modelo: "Apache RTR 160", precio: 4100.0 },
  { id: 6, marca: "KTM", modelo: "Duke 200", precio: 5200.0 },
  { id: 7, marca: "Italika", modelo: "FT150", precio: 3500.0 },
  { id: 8, marca: "Lifan", modelo: "LF150-10B", precio: 3620.0 },
  { id: 9, marca: "Zongshen", modelo: "Z-One 200", precio: 3870.0 },
  { id: 10, marca: "Keeway", modelo: "RKS 150 Sport", precio: 3780.0 },
];

export default function Pago() {
  const [items, setItems] = useState<number[]>([]);
  const [confirmado, setConfirmado] = useState(false);

  useEffect(() => {
    const almacenado = localStorage.getItem("carrito");
    if (almacenado) setItems(JSON.parse(almacenado));
  }, []);

  const seleccionadas: Moto[] = motos.filter((m: Moto) => items.includes(m.id));
  const total: number = seleccionadas.reduce((acc: number, m: Moto) => acc + m.precio, 0);

  const confirmarCompra = () => {
    localStorage.removeItem("carrito");
    setConfirmado(true);
  };

  if (confirmado) {
    return (
      <div style={{ backgroundColor: "#0f0f0f", color: "white", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#facc15" }}>✅ ¡Gracias por tu compra!</h1>
          <p>Un asesor de <strong>Moto RR</strong> se comunicará contigo en breve.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#0f0f0f", color: "white", minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <h1 style={{ color: "#facc15", fontSize: "2rem", textAlign: "center", marginBottom: "2rem" }}>💳 Pago Automático</h1>

        <form style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }} onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Nombre completo" required style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }} />
          <input placeholder="DNI" required style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }} />
          <input placeholder="Correo electrónico" required type="email" style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }} />
          <input placeholder="Número de tarjeta" required type="text" style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }} />
        </form>

        <h2 style={{ marginTop: "2rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>🛒 Resumen</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {seleccionadas.map((m: Moto) => (
            <li key={m.id} style={{ marginBottom: "0.5rem" }}>
              {m.marca} {m.modelo} – S/ {m.precio.toFixed(2)}
            </li>
          ))}
        </ul>
        <h3 style={{ marginTop: "1rem", textAlign: "right" }}>Total: S/ {total.toFixed(2)}</h3>

        <div style={{ textAlign: "right", marginTop: "1.5rem" }}>
          <button onClick={confirmarCompra} style={{
            backgroundColor: "#facc15", color: "#1f2937", padding: "0.75rem 1.5rem",
            borderRadius: "6px", border: "none", fontWeight: "bold", cursor: "pointer"
          }}>
            Confirmar compra
          </button>
        </div>
      </div>
    </div>
  );
}
