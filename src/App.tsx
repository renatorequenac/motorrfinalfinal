import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const motos = [
  { id: 1, marca: "Honda", modelo: "XR150L", anio: 2022, precio: 4746.67, imagen: "https://motos.honda.com.pe/wp-content/uploads/2021/09/FOTO-PRINCIPAL.png", transmision: "5 velocidades", estado: "A" },
  { id: 2, marca: "Bajaj", modelo: "Pulsar 150", anio: 2022, precio: 3990.0, imagen: "https://p150.pulsar.pe/storage/app/uploads/public/63b/837/18a/63b83718a686f917746045.png", transmision: "5 velocidades", estado: "B" },
  { id: 3, marca: "Yamaha", modelo: "FZ-S", anio: 2022, precio: 4260.0, imagen: "https://somosmoto.pe/images/models/gallery/yamaha-fzs-fi-2022-gallery-709cb1.jpg", transmision: "5 velocidades", estado: "A" },
  { id: 4, marca: "Suzuki", modelo: "Gixxer 150", anio: 2022, precio: 4550.0, imagen: "https://www.domeinvehiculos.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-07-at-12.14.19-PM-1.jpeg", transmision: "5 velocidades", estado: "A" },
  { id: 5, marca: "TVS", modelo: "Apache RTR 160", anio: 2022, precio: 4100.0, imagen: "https://tvsperu.com/wp-content/uploads/2024/02/RED-1604V-Flat-AZUL-1024x709.png", transmision: "5 velocidades", estado: "A" },
  { id: 6, marca: "KTM", modelo: "Duke 200", anio: 2022, precio: 5200.0, imagen: "https://socopur.com.pe/wp-content/uploads/2024/09/aa4eaffb-4de0-4e81-a3d9-c5dc8e637367.png", transmision: "6 velocidades", estado: "B" },
  { id: 7, marca: "Italika", modelo: "FT150", anio: 2022, precio: 3500.0, imagen: "https://www.mundomotoperu.com/wp-content/uploads/italika-ft150-chakarera-negro.png", transmision: "5 velocidades", estado: "A" },
  { id: 8, marca: "Lifan", modelo: "LF150-10B", anio: 2022, precio: 3620.0, imagen: "https://lh4.googleusercontent.com/proxy/dvh8B87qRdFiPFBWSY1gh6WN5cglU8p82YvHehg9webnKDeV2X081kId-mIV3vZLjm7KwEGlNIrkfZn1pGXdEbgDfB7uZRB-ARCg-0p0gZ6byYyk9EU0MOtFdC8FHl2Fko6e-IN-lg", transmision: "5 velocidades", estado: "B" },
  { id: 9, marca: "Zongshen", modelo: "Z-One 200", anio: 2022, precio: 3870.0, imagen: "http://mundomotoperu.com/wp-content/uploads/zongshen-zone-150-rojo.png", transmision: "5 velocidades", estado: "A" },
  { id: 10, marca: "Keeway", modelo: "RKS 150 Sport", anio: 2022, precio: 3780.0, imagen: "https://benelliquilmes.com.ar/wp-content/uploads/2021/08/RKS150GSred-1400x830-1-2400x2400.jpg", transmision: "5 velocidades", estado: "A" },
];

export default function App() {
  const [carrito, setCarrito] = useState<number[]>([]);
  const [filtros, setFiltros] = useState<{ marca: string; transmision: string; estado: string; precioMin: number; precioMax: number; }>({
    marca: "", transmision: "", estado: "", precioMin: 0, precioMax: 10000
  });

  useEffect(() => {
    const almacenado = localStorage.getItem("carrito");
    if (almacenado) setCarrito(JSON.parse(almacenado));
  }, []);

  const agregarAlCarrito = (id: number) => {
    if (!carrito.includes(id)) {
      const nuevo = [...carrito, id];
      setCarrito(nuevo);
      localStorage.setItem("carrito", JSON.stringify(nuevo));
    }
  };

  const motosFiltradas = motos.filter((m) =>
    (filtros.marca === "" || m.marca === filtros.marca) &&
    (filtros.transmision === "" || m.transmision === filtros.transmision) &&
    (filtros.estado === "" || m.estado === filtros.estado) &&
    m.precio >= filtros.precioMin &&
    m.precio <= filtros.precioMax
  );

  return (
    <div style={{ backgroundColor: "#0f0f0f", minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <img src="/motorr_logo_compressed.png" alt="Logo Moto RR" style={{ maxWidth: "220px", marginBottom: "1rem" }} />
          <h1 style={{ fontSize: "2.5rem", color: "#ffffff", fontFamily: "Arial Black", margin: 0 }}>MotoRR</h1>
          <p style={{ color: "#d1d5db", fontFamily: "Arial Black", marginTop: "0.5rem" }}>Compra y vende motos reacondicionadas con estilo y potencia</p>
          <div style={{ marginTop: "1rem" }}>
            <Link to="/vender">
              <button style={{ marginRight: "1rem", padding: "0.75rem 1.5rem", backgroundColor: "#facc15", color: "#1f2937", fontWeight: "bold", border: "none", borderRadius: "8px", cursor: "pointer" }}>🚀 Vende tu moto</button>
            </Link>
            <Link to="/carrito" style={{ color: "#facc15", fontWeight: "bold" }}>🛒 Ver carrito ({carrito.length})</Link>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem", justifyContent: "center" }}>
          <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFiltros({ ...filtros, marca: e.target.value })} style={{ padding: "0.5rem", borderRadius: 6 }}>
            <option value="">Todas las marcas</option>
            {[...new Set(motos.map(m => m.marca))].map((marca) => (
              <option key={marca} value={marca}>{marca}</option>
            ))}
          </select>
          <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFiltros({ ...filtros, transmision: e.target.value })} style={{ padding: "0.5rem", borderRadius: 6 }}>
            <option value="">Todas las transmisiones</option>
            <option value="5 velocidades">5 velocidades</option>
            <option value="6 velocidades">6 velocidades</option>
          </select>
          <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFiltros({ ...filtros, estado: e.target.value })} style={{ padding: "0.5rem", borderRadius: 6 }}>
            <option value="">Todos los estados</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
          <input type="number" placeholder="Precio mínimo" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFiltros({ ...filtros, precioMin: Number(e.target.value) })} style={{ padding: "0.5rem", borderRadius: 6 }} />
          <input type="number" placeholder="Precio máximo" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFiltros({ ...filtros, precioMax: Number(e.target.value) })} style={{ padding: "0.5rem", borderRadius: 6 }} />
          <button onClick={() => setFiltros({ marca: "", transmision: "", estado: "", precioMin: 0, precioMax: 10000 })} style={{ backgroundColor: "#facc15", color: "#1f2937", padding: "0.5rem 1rem", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>
            🔄 Restablecer filtros
          </button>
        </div>

        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          {motosFiltradas.map((moto) => (
            <div key={moto.id} style={{ width: "300px", background: "#1f2937", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.3)", overflow: "hidden", paddingBottom: "1rem", border: "1px solid #374151" }}>
              <img src={moto.imagen} alt={moto.modelo} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "1rem" }}>
                <h2 style={{ fontSize: "1.25rem", marginBottom: "0.25rem", color: "#facc15" }}>{moto.marca} {moto.modelo}</h2>
                <p style={{ margin: 0, color: "#d1d5db" }}>Año: {moto.anio}</p>
                <p style={{ margin: 0, fontWeight: 600, marginTop: "0.5rem", color: "#ffffff" }}>Precio: S/ {moto.precio.toFixed(2)}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1rem" }}>
                  <Link to={`/moto/${moto.id}`}>
                    <button style={{ width: "100%", backgroundColor: "#facc15", color: "#1f2937", padding: "0.5rem", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
                      Ver detalles
                    </button>
                  </Link>
                  <button onClick={() => agregarAlCarrito(moto.id)} style={{ width: "100%", backgroundColor: "#facc15", color: "#1f2937", padding: "0.5rem", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
                    🛒 Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
