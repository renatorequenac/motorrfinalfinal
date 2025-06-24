import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Moto = {
  id: number;
  marca: string;
  modelo: string;
  precio: number;
  imagen: string;
};

const motos: Moto[] = [
  { id: 1, marca: "Honda", modelo: "XR150L", precio: 4746.67, imagen: "https://motos.honda.com.pe/wp-content/uploads/2021/09/FOTO-PRINCIPAL.png" },
  { id: 2, marca: "Bajaj", modelo: "Pulsar 150", precio: 3990.0, imagen: "https://p150.pulsar.pe/storage/app/uploads/public/63b/837/18a/63b83718a686f917746045.png" },
  { id: 3, marca: "Yamaha", modelo: "FZ-S", precio: 4260.0, imagen: "https://somosmoto.pe/images/models/gallery/yamaha-fzs-fi-2022-gallery-709cb1.jpg" },
  { id: 4, marca: "Suzuki", modelo: "Gixxer 150", precio: 4550.0, imagen: "https://www.domeinvehiculos.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-07-at-12.14.19-PM-1.jpeg" },
  { id: 5, marca: "TVS", modelo: "Apache RTR 160", precio: 4100.0, imagen: "https://www.motocorp.pe/wp-content/uploads/2024/08/APACHE-1604V-ROJO-DE-COSTADO-800X800-e1724024386793.png" },
  { id: 6, marca: "KTM", modelo: "Duke 200", precio: 5200.0, imagen: "https://socopur.com.pe/wp-content/uploads/2024/09/aa4eaffb-4de0-4e81-a3d9-c5dc8e637367.png" },
  { id: 7, marca: "Italika", modelo: "FT150", precio: 3500.0, imagen: "https://www.mundomotoperu.com/wp-content/uploads/italika-ft150-chakarera-negro.png" },
  { id: 8, marca: "Lifan", modelo: "LF150-10B", precio: 3620.0, imagen: "https://lh4.googleusercontent.com/proxy/dvh8B87qRdFiPFBWSY1gh6WN5cglU8p82YvHehg9webnKDeV2X081kId-mIV3vZLjm7KwEGlNIrkfZn1pGXdEbgDfB7uZRB-ARCg-0p0gZ6byYyk9EU0MOtFdC8FHl2Fko6e-IN-lg" },
  { id: 9, marca: "Zongshen", modelo: "Z-One 200", precio: 3870.0, imagen: "http://mundomotoperu.com/wp-content/uploads/zongshen-zone-150-rojo.png" },
  { id: 10, marca: "Keeway", modelo: "RKS 150 Sport", precio: 3780.0, imagen: "https://benelliquilmes.com.ar/wp-content/uploads/2021/08/RKS150GSred-1400x830-1-2400x2400.jpg" },
];

export default function Carrito() {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    const almacenado = localStorage.getItem("carrito");
    if (almacenado) {
      setItems(JSON.parse(almacenado));
    }
  }, []);

  const vaciar = () => {
    localStorage.removeItem("carrito");
    setItems([]);
  };

  const seleccionadas: Moto[] = motos.filter((m: Moto) => items.includes(m.id));
  const total = seleccionadas.reduce((acc: number, m: Moto) => acc + m.precio, 0);

  return (
    <div style={{ backgroundColor: "#0f0f0f", color: "white", minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ color: "#facc15", fontSize: "2rem", textAlign: "center", marginBottom: "2rem" }}>🛒 Tu carrito</h1>
        {seleccionadas.length === 0 ? (
          <p style={{ textAlign: "center", color: "#d1d5db" }}>Tu carrito está vacío.</p>
        ) : (
          <>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {seleccionadas.map((moto) => (
                <li key={moto.id} style={{ display: "flex", marginBottom: "1rem", background: "#1f2937", borderRadius: 8 }}>
                  <img src={moto.imagen} alt={moto.modelo} style={{ width: 100, height: 100, objectFit: "cover", borderRadius: "8px 0 0 8px" }} />
                  <div style={{ padding: "1rem" }}>
                    <h3 style={{ margin: 0, color: "#facc15" }}>{moto.marca} {moto.modelo}</h3>
                    <p style={{ margin: 0 }}>Precio: S/ {moto.precio.toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>
            <h2 style={{ textAlign: "right", marginTop: "2rem" }}>Total: S/ {total.toFixed(2)}</h2>
            <div style={{ textAlign: "right", marginTop: "1.5rem" }}>
              <button onClick={vaciar} style={{
                backgroundColor: "#374151", color: "white", padding: "0.5rem 1rem",
                borderRadius: "6px", marginRight: "1rem", border: "none", cursor: "pointer"
              }}>Vaciar carrito</button>
              <Link to="/pago">
                <button style={{
                  backgroundColor: "#facc15", color: "#1f2937", padding: "0.5rem 1.25rem",
                  borderRadius: "6px", border: "none", fontWeight: "bold", cursor: "pointer"
                }}>Proceder al pago</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
