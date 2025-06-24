import { useParams } from "react-router-dom";
import { useState } from "react";

type Moto = {
  id: number;
  marca: string;
  modelo: string;
  anio: number;
  precio: number;
  imagen: string;
  estado: string;
  financiable: boolean;
  kilometraje: string;
  motor: string;
  transmision: string;
  detalles: string;
};

export default function MotoDetalle() {
  const { id } = useParams<{ id: string }>();
  const [plazo, setPlazo] = useState(12);
  const [addedToCart, setAddedToCart] = useState(false);

  const motos: Moto[] = [
    {
      id: 1,
      marca: "Honda",
      modelo: "XR150L",
      anio: 2022,
      precio: 4746.67,
      imagen: "https://motos.honda.com.pe/wp-content/uploads/2021/09/FOTO-PRINCIPAL.png",
      estado: "A",
      financiable: true,
      kilometraje: "11,200 km",
      motor: "150cc",
      transmision: "5 velocidades",
      detalles: "Moto en excelente estado, usada para reparto urbano, reacondicionada con garantía técnica."
    },
    {
      id: 2,
      marca: "Bajaj",
      modelo: "Pulsar 150",
      anio: 2022,
      precio: 3990.0,
      imagen: "https://p150.pulsar.pe/storage/app/uploads/public/63b/837/18a/63b83718a686f917746045.png",
      estado: "B",
      financiable: true,
      kilometraje: "10,500 km",
      motor: "149cc",
      transmision: "5 velocidades",
      detalles: "Unidad reacondicionada en sistema eléctrico y frenos, ideal para uso mixto."
    },
    {
      id: 3,
      marca: "Yamaha",
      modelo: "FZ-S",
      anio: 2022,
      precio: 4260.0,
      imagen: "https://somosmoto.pe/images/models/gallery/yamaha-fzs-fi-2022-gallery-709cb1.jpg",
      estado: "A",
      financiable: false,
      kilometraje: "12,000 km",
      motor: "150cc",
      transmision: "5 velocidades",
      detalles: "Reacondicionada con foco en estética y suspensión. No financiable actualmente."
    },
    {
      id: 4,
      marca: "Suzuki",
      modelo: "Gixxer 150",
      anio: 2022,
      precio: 4550.0,
      imagen: "https://www.domeinvehiculos.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-07-at-12.14.19-PM-1.jpeg",
      estado: "A",
      financiable: true,
      kilometraje: "8,900 km",
      motor: "154cc",
      transmision: "5 velocidades",
      detalles: "Excelente estabilidad y motor limpio, revisión completa."
    },
    {
      id: 5,
      marca: "TVS",
      modelo: "Apache RTR 160",
      anio: 2022,
      precio: 4100.0,
      imagen: "https://www.motocorp.pe/wp-content/uploads/2024/08/APACHE-1604V-ROJO-DE-COSTADO-800X800-e1724024386793.png",
      estado: "A",
      financiable: true,
      kilometraje: "10,200 km",
      motor: "159cc",
      transmision: "5 velocidades",
      detalles: "Suspensión revisada, estética deportiva y bajo consumo."
    },
    {
      id: 6,
      marca: "KTM",
      modelo: "Duke 200",
      anio: 2022,
      precio: 5200.0,
      imagen: "https://socopur.com.pe/wp-content/uploads/2024/09/aa4eaffb-4de0-4e81-a3d9-c5dc8e637367.png",
      estado: "B",
      financiable: true,
      kilometraje: "11,800 km",
      motor: "199cc",
      transmision: "6 velocidades",
      detalles: "Unidad deportiva con sistema de escape reacondicionado."
    },
    {
      id: 7,
      marca: "Italika",
      modelo: "FT150",
      anio: 2022,
      precio: 3500.0,
      imagen: "https://www.mundomotoperu.com/wp-content/uploads/italika-ft150-chakarera-negro.png",
      estado: "A",
      financiable: false,
      kilometraje: "9,400 km",
      motor: "149cc",
      transmision: "5 velocidades",
      detalles: "Moto económica, lista para trabajar, sin defectos mecánicos."
    },
    {
      id: 8,
      marca: "Lifan",
      modelo: "LF150-10B",
      anio: 2022,
      precio: 3620.0,
      imagen: "https://lh4.googleusercontent.com/proxy/dvh8B87qRdFiPFBWSY1gh6WN5cglU8p82YvHehg9webnKDeV2X081kId-mIV3vZLjm7KwEGlNIrkfZn1pGXdEbgDfB7uZRB-ARCg-0p0gZ6byYyk9EU0MOtFdC8FHl2Fko6e-IN-lg",
      estado: "B",
      financiable: true,
      kilometraje: "10,000 km",
      motor: "150cc",
      transmision: "5 velocidades",
      detalles: "Compacta y eficiente, revisión de frenos y arranque completo."
    },
    {
      id: 9,
      marca: "Zongshen",
      modelo: "Z-One 200",
      anio: 2022,
      precio: 3870.0,
      imagen: "http://mundomotoperu.com/wp-content/uploads/zongshen-zone-150-rojo.png",
      estado: "A",
      financiable: true,
      kilometraje: "11,000 km",
      motor: "196cc",
      transmision: "5 velocidades",
      detalles: "Ideal para ciudad y reparto, estética conservada."
    },
    {
      id: 10,
      marca: "Keeway",
      modelo: "RKS 150 Sport",
      anio: 2022,
      precio: 3780.0,
      imagen: "https://benelliquilmes.com.ar/wp-content/uploads/2021/08/RKS150GSred-1400x830-1-2400x2400.jpg",
      estado: "A",
      financiable: true,
      kilometraje: "9,800 km",
      motor: "149cc",
      transmision: "5 velocidades",
      detalles: "Versátil, económica y reacondicionada al 100%."
    }
  ];

  const moto = motos.find((m) => m.id === Number(id));
  if (!moto) return <div style={{ padding: 20, color: "white" }}>Motocicleta no encontrada.</div>;

  const whatsappLink = `https://wa.me/51957078956?text=Hola%2C%20estoy%20interesado%20en%20la%20motocicleta%20${moto.marca}%20${moto.modelo}`;
  const cuota = (moto.precio / plazo).toFixed(2);

  const addToCart = () => {
    const carrito: Moto[] = JSON.parse(localStorage.getItem("carrito") || "[]");
    const existe = carrito.find((item: Moto) => item.id === moto.id);
    if (!existe) {
      carrito.push(moto);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      setAddedToCart(true);
    }
  };

  return (
    <div style={{ padding: 20, backgroundColor: "#0f0f0f", minHeight: "100vh" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", background: "#1f2937", padding: 24, borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.6)", border: "1px solid #374151" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", color: "#facc15", fontFamily: "Arial Black" }}>
          Moto RR: {moto.marca} {moto.modelo} ({moto.anio})
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 24 }}>
          <img src={moto.imagen} alt={moto.modelo} style={{ width: "100%", borderRadius: 8 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 12, color: "#d1d5db" }}>
            <p><strong style={{ color: "#ffffff" }}>Precio:</strong> S/ {moto.precio.toFixed(2)}</p>
            <p><strong>Clasificación técnica:</strong> {moto.estado}</p>
            <p><strong>Kilometraje:</strong> {moto.kilometraje}</p>
            <p><strong>Motor:</strong> {moto.motor}</p>
            <p><strong>Transmisión:</strong> {moto.transmision}</p>
            <p><strong>Descripción:</strong> {moto.detalles}</p>

            {moto.financiable && (
              <div style={{ padding: "1rem", backgroundColor: "#1f2937", borderRadius: 8, border: "1px solid #facc15", color: "#f9fafb" }}>
                <label><strong style={{ color: "#facc15" }}>Simula tu crédito:</strong></label>
                <select
                  value={plazo}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPlazo(Number(e.target.value))}
                  style={{
                    marginLeft: 10,
                    padding: "0.5rem",
                    borderRadius: 6,
                    backgroundColor: "#374151",
                    color: "#f9fafb",
                    border: "1px solid #facc15"
                  }}
                >
                  <option value={6}>6 meses</option>
                  <option value={12}>12 meses</option>
                  <option value={18}>18 meses</option>
                </select>
                <p style={{ marginTop: 8 }}>Cuota estimada: <strong>S/ {cuota}</strong> / mes</p>
              </div>
            )}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#facc15",
                color: "#1f2937",
                textAlign: "center",
                padding: "0.75rem",
                borderRadius: "8px",
                fontWeight: "bold",
                textDecoration: "none"
              }}
            >
              Contactar vía WhatsApp
            </a>

            <button
              onClick={addToCart}
              disabled={addedToCart}
              style={{
                marginTop: "0.5rem",
                backgroundColor: addedToCart ? "#9ca3af" : "#facc15",
                color: "#1f2937",
                padding: "0.75rem",
                borderRadius: "8px",
                fontWeight: "bold",
                border: "none",
                cursor: addedToCart ? "not-allowed" : "pointer"
              }}
            >
              {addedToCart ? "Agregado al carrito" : "Agregar al carrito"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
