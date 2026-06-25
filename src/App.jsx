import "./App.css";

const whatsapp = "https://wa.me/523336730773";
const mapsUrl = "https://maps.app.goo.gl/62nLYtujVFm4XUwZ8";

const specialties = [
  ["/corte.jpg", "Cortes a la parrilla", "Vacío, Rib Eye, lomo y arrachera sellados al carbón con guarnición."],
  ["/provoleta.jpg", "Entradas argentinas", "Provoleta, tuétanos, chinchulines y clásicos para abrir el apetito."],
  ["/empanadas.jpg", "Empanadas", "Piezas artesanales de carne, humita o cebolla frita, doradas al momento."],
  ["/ensalada.jpg", "Ensaladas", "Opciones frescas como Quilombo, César y Torre Caprese."],
  ["/interior.jpg", "Pepitos", "Sándwiches generosos con espíritu de barrio y sabor de parrilla."],
  ["/galeria1.jpg", "Pizzas", "Masa crujiente, horno caliente e ingredientes para compartir."],
  ["/galeria2.jpg", "Pastas", "Recetas reconfortantes para una mesa familiar y sin prisa."],
  ["/parrilla.jpg", "Parrilla y brasas", "El corazón de la casa: fuego, madera, cortes y técnica argentina."],
];

const menu = [
  {
    category: "Entradas",
    items: [
      ["Chinchulines", "150 g", "$185"],
      ["Tuétanos al grill", "750 g", "$175"],
      ["Aguachile de Rib Eye", "400 g", "$325"],
      ["Carpaccio de Res", "150 g", "$175"],
      ["Tostada de Atún", "", "$110"],
      ["Guacamole", "250 g", "$95"],
      ["Provoleta", "240 g", "$155"],
      ["Empanadas", "70 g", "$55"],
    ],
  },
  {
    category: "Ensaladas",
    items: [
      ["Quilombo", "220 g", "$135"],
      ["César", "220 g", "$140"],
      ["Torre Caprese", "220 g", "$130"],
      ["Extra Pollo", "100 g", "$68"],
      ["Extra Camarón", "100 g", "$69"],
    ],
  },
  {
    category: "Cortes",
    items: [
      ["Vacío", "350 g", "$330"],
      ["Rib Eye Premium Nacional", "350 g", "$315"],
      ["Lomo en Caña", "350 g", "$325"],
      ["Arrachera", "310 g", "$290"],
      ["Milanesa de Res", "300 g", "$290"],
      ["Milanesa de Pollo", "300 g", "$265"],
      ["Pechuga de Pollo", "300 g", "$265"],
      ["Atún a la Parrilla", "230 g", "$265"],
      ["Salmón en salsa de limón", "230 g", "$275"],
    ],
    note: "Todos los cortes incluyen guarnición de papas fritas o ensalada.",
  },
];

const favorites = [
  ["Vacío a la parrilla", "Corte jugoso con punto perfecto de brasas.", "/corte.jpg"],
  ["Rib Eye Premium", "Marmoleo, sabor profundo y sellado de parrilla.", "/parrilla.jpg"],
  ["Empanadas argentinas", "Clásicas, doradas y listas para compartir.", "/empanadas.jpg"],
  ["Provoleta", "Queso fundido al grill con carácter argentino.", "/provoleta.jpg"],
  ["Aguachile de Rib Eye", "Fresco, intenso y con giro contemporáneo.", "/galeria3.jpg"],
  ["Torre Caprese", "Jitomate, mozzarella y albahaca en equilibrio.", "/ensalada.jpg"],
];

const gallery = ["/galeria1.jpg", "/galeria2.jpg", "/galeria3.jpg", "/galeria4.jpg", "/galeria5.jpg", "/galeria6.jpg"];

function ImageBlock({ src, alt, className = "", children }) {
  return (
    <div className={`image-block ${className}`}>
      <img src={src} alt={alt} onError={(event) => event.currentTarget.classList.add("is-hidden")} />
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <nav className="navbar" aria-label="Navegación principal">
        <a className="brand" href="#inicio"><img src="/logo.png" alt="" onError={(e) => e.currentTarget.remove()} /><span>Quilombo</span></a>
        <div className="nav-links">
          <a href="#especialidades">Especialidades</a><a href="#menu">Menú</a><a href="#ubicacion">Ubicación</a><a href={whatsapp} target="_blank" rel="noreferrer">Reservar</a>
        </div>
      </nav>

      <header className="hero" id="inicio">
        <ImageBlock src="/hero.jpg" alt="Interior cálido de Quilombo" className="hero-media" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Parrilla argentina · Guadalajara</p>
          <h1>Quilombo</h1>
          <p>Cocina de barrio, cortes a la parrilla y sabor argentino en un ambiente cálido.</p>
          <div className="hero-buttons"><a href="#menu">Ver menú</a><a href={whatsapp} target="_blank" rel="noreferrer">Reservar por WhatsApp</a><a className="secondary" href={mapsUrl} target="_blank" rel="noreferrer">Cómo llegar</a></div>
        </div>
      </header>

      <section className="specialties section" id="especialidades"><p className="eyebrow">Especialidades</p><h2>Fuego, barrio y mesa compartida</h2><div className="specialty-grid">{specialties.map(([img, title, desc]) => <article className="specialty-card" key={title}><ImageBlock src={img} alt={title} /><div><h3>{title}</h3><p>{desc}</p></div></article>)}</div></section>

      <section className="menu section" id="menu"><p className="eyebrow">Menú destacado</p><h2>Clásicos de la casa</h2><div className="menu-grid">{menu.map((group) => <article className="menu-card" key={group.category}><h3>{group.category}</h3>{group.items.map(([name, grams, price]) => <div className="menu-row" key={name}><span><strong>{name}</strong>{grams && <small>{grams}</small>}</span><b>{price}</b></div>)}{group.note && <p className="menu-note">{group.note}</p>}</article>)}</div></section>

      <section className="favorites section"><p className="eyebrow">Favoritos de la casa</p><h2>Los imperdibles</h2><div className="favorite-grid">{favorites.map(([title, desc, img]) => <article className="favorite-card" key={title}><ImageBlock src={img} alt={title} /><div><h3>{title}</h3><p>{desc}</p></div></article>)}</div></section>

      <section className="experience"><div className="section experience-copy"><p className="eyebrow">Experiencia Quilombo</p><h2>Un restaurante con alma de barrio</h2><div className="experience-grid">{["Cocina de barrio", "Cortes a la parrilla", "Ambiente cálido", "Platillos preparados al momento"].map((item) => <div className="experience-item" key={item}><span>✦</span><h3>{item}</h3><p>Detalles cuidados, servicio cercano y sabores pensados para volver.</p></div>)}</div></div></section>

      <section className="gallery section" id="galeria"><p className="eyebrow">Galería</p><h2>Texturas de madera, brasas y cocina</h2><div className="gallery-grid">{gallery.map((img, index) => <ImageBlock key={img} src={img} alt={`Galería Quilombo ${index + 1}`} />)}</div></section>

      <section className="location section" id="ubicacion"><div><p className="eyebrow">Ubicación</p><h2>Quilombo</h2><p>Guadalajara, Jalisco</p><a className="button" href={mapsUrl} target="_blank" rel="noreferrer">Abrir en Google Maps</a></div><iframe title="Mapa aproximado de Quilombo en Guadalajara" src="https://www.google.com/maps?q=Quilombo%20Guadalajara%20Jalisco&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></section>

      <section className="contact section" id="contacto"><p className="eyebrow">Contacto</p><h2>Reserva tu mesa o pregunta por disponibilidad</h2><p>Teléfono / WhatsApp: <strong>33 3673 0773</strong></p><a className="button" href={whatsapp} target="_blank" rel="noreferrer">Reservar por WhatsApp</a></section>

      <footer><div><h3>Quilombo</h3><p>Cocina de barrio · Parrilla argentina</p></div><div><p>Tel. 33 3673 0773</p><p>Guadalajara, Jalisco</p></div><div className="social"><a href="#inicio">Instagram</a><a href="#inicio">Facebook</a><a href="#inicio">TikTok</a></div></footer>
      <a className="whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Reservar por WhatsApp">☘</a>
    </div>
  );
}
