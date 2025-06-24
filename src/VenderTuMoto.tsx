import { useState } from "react";

type Formulario = {
  nombre: string;
  celular: string;
  marca: string;
  modelo: string;
  anio: string;
  comentarios: string;
};

export default function VenderTuMoto() {
  const [form, setForm] = useState<Formulario>({
    nombre: "",
    celular: "",
    marca: "",
    modelo: "",
    anio: "2022",
    comentarios: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const mensaje = `
Hola, quiero vender una moto.
Nombre: ${form.nombre}
Celular: ${form.celular}
Marca: ${form.marca}
Modelo: ${form.modelo}
Año: ${form.anio}
Comentarios: ${form.comentarios}`;

  const whatsappLink = `https://wa.me/51957078956?text=${encodeURIComponent(mensaje)}`;

  return (
    <div style={{ padding: 24, backgroundColor: "#0f0f0f", minHeight: "100vh" }}>
      <div style={{
        maxWidth: 600,
        margin: "0 auto",
        background: "#1f2937",
        padding: 24,
        borderRadius: 12,
        boxShadow: "0 4px 10px rgba(0,0,0,0.6)",
        border: "1px solid #374151"
      }}>
        <h1 style={{
          textAlign: "center",
          fontSize: "2rem",
          color: "#facc15",
          marginBottom: 24,
          fontFamily: "Arial Black"
        }}>
          Vende tu moto
        </h1>

        <label style={labelStyle}>Nombre completo:</label>
        <input type="text" name="nombre" value={form.nombre} onChange={handleChange} style={inputStyle} />

        <label style={labelStyle}>Celular de contacto:</label>
        <input type="text" name="celular" value={form.celular} onChange={handleChange} style={inputStyle} />

        <label style={labelStyle}>Marca:</label>
        <input type="text" name="marca" value={form.marca} onChange={handleChange} style={inputStyle} />

        <label style={labelStyle}>Modelo:</label>
        <input type="text" name="modelo" value={form.modelo} onChange={handleChange} style={inputStyle} />

        <label style={labelStyle}>Año:</label>
        <input type="number" name="anio" value={form.anio} onChange={handleChange} style={inputStyle} />

        <label style={labelStyle}>Comentarios adicionales:</label>
        <textarea name="comentarios" value={form.comentarios} onChange={handleChange} style={{ ...inputStyle, height: "100px" }} />

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            marginTop: "1rem",
            backgroundColor: "#facc15",
            color: "#1f2937",
            textAlign: "center",
            padding: "0.75rem",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          Enviar por WhatsApp
        </a>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.5rem",
  marginBottom: "1rem",
  borderRadius: "6px",
  border: "1px solid #d1d5db",
  backgroundColor: "#374151",
  color: "#f9fafb",
  fontSize: "1rem"
};

const labelStyle: React.CSSProperties = {
  fontWeight: "bold",
  color: "#d1d5db",
  marginBottom: "0.25rem",
  display: "block"
};
