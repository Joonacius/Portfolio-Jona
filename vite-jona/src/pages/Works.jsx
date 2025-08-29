import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

function Works() {
  const [revealedItems, setRevealedItems] = useState(new Set());

  const handleMobileTouch = (itemName, navigate) => {
    if (revealedItems.has(itemName)) {
      // Segunda pulsación: navegar
      navigate();
    } else {
      // Primera pulsación: revelar imagen y ocultar las demás
      setRevealedItems(new Set([itemName])); // Solo mantiene el actual revelado
    }
  };

  const projects = [
    // Fila 1
    { name: "HALL", img: "hall.jpg", row: 0, col: 0 },
    { name: "KITCHEN", img: "kitchen.jpg", row: 0, col: 1 },
    { name: "BROWN", img: "brown.jpg", row: 0, col: 2 },
    { name: "LITTLE", img: "little.jpg", row: 0, col: 3 },
    { name: "WOMAN", img: "woman.jpg", row: 0, col: 4 },
    // Fila 2
    { name: "SOHO", img: "soho.jpg", row: 1, col: 0 },
    { name: "SCANDI", img: "scandi.jpg", row: 1, col: 1 },
    { name: "RETRO", img: "retro.jpg", row: 1, col: 2 },
    { name: "PARIS", img: "paris.jpg", row: 1, col: 3 },
    { name: "TONS", img: "tons.jpg", row: 1, col: 4 },
    // Fila 3
    { name: "ZOOM", img: "zoom.jpg", row: 2, col: 0 },
    { name: "LIVING", img: "living.jpg", row: 2, col: 1 },
    { name: "MODERN SUIT", img: "modern.jpg", row: 2, col: 2 },
    { name: "GREY", img: "grey.jpg", row: 2, col: 3 },
    { name: "NEON", img: "neon.jpg", row: 2, col: 4 },
  ];

  return (
    <div className="relative bg-white dark:bg-darkBg overflow-hidden transition-colors duration-500">
      <Navbar />

      {/* Layout para Desktop (pantallas grandes) */}
      <div className="hidden lg:block min-h-[1752px]">
        {/* Líneas horizontales - Desktop */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white" style={{ top: "67px" }} />
          <div className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white" style={{ top: "606px" }} />
          <div className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white" style={{ top: "1145px" }} />
          <div className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white" style={{ bottom: "67px" }} />

          {/* Líneas verticales - Desktop */}
          <div className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white" style={{ left: "20%" }} />
          <div className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white" style={{ left: "40%" }} />
          <div className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white" style={{ left: "60%" }} />
          <div className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white" style={{ left: "80%" }} />
        </div>

        {/* Grid items - Desktop */}
        {projects.map(({ name, img, row, col }) => {
          const top = 67 + 539 * row;
          const left = `${col * 20}%`;

          return (
            <div
              key={name}
              className="absolute w-[20%] h-[539px] z-10"
              style={{ top: `${top}px`, left }}
            >
              <Link to={`/works/${name.toLowerCase().replace(/\s+/g, "-")}`} className="block w-full h-full">
                <div className="group relative w-full h-full overflow-hidden">
                  <img
                    src={`/images/${img}`}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-white dark:bg-darkBg opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-in-out flex items-end justify-center z-10">
                    <p className="text-black dark:text-white font-plus text-5xl">{name}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Layout para Tablet */}
      <div className="hidden md:block lg:hidden min-h-screen">
        {/* Grid container para tablet - 2 columnas */}
        <div className="grid grid-cols-2 gap-2 p-4 pt-20">
          {projects.map(({ name, img }) => (
            <Link 
              key={name}
              to={`/works/${name.toLowerCase().replace(/\s+/g, "-")}`} 
              className="block aspect-square"
            >
              <div className="group relative w-full h-full overflow-hidden border border-black dark:border-white">
                <img
                  src={`/images/${img}`}
                  alt={name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white dark:bg-darkBg opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-in-out flex items-center justify-center z-10">
                  <p className="text-black dark:text-white font-plus text-2xl md:text-3xl text-center px-2">{name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Layout para Móvil */}
      <div className="block md:hidden min-h-screen relative">
        {/* Líneas de la grilla para móvil */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Líneas verticales - divide en 3 columnas */}
          <div className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white" style={{ left: "33.33%" }} />
          <div className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white" style={{ left: "66.66%" }} />
          
          {/* Líneas horizontales - coincidiendo con bordes de imágenes */}
          <div className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white" style={{ top: "64px" }} />
          {[1, 2, 3, 4].map((row) => {
            const imageHeight = window.innerWidth * 0.3333 * 1.5; // 33.33% del ancho * 1.5 (aspect ratio)
            const topPosition = 64 + (row * imageHeight);
            return (
              <div 
                key={row}
                className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white" 
                style={{ top: `${topPosition}px` }} 
              />
            );
          })}
        </div>

        {/* Grid container para móvil - 3 columnas */}
        <div className="grid grid-cols-3 pt-16">
          {projects.map(({ name, img }, index) => {
            const isRevealed = revealedItems.has(name);
            
            return (
              <div
                key={name}
                className="cursor-pointer relative z-10"
                style={{ aspectRatio: '1 / 1.5' }}
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileTouch(name, () => {
                    window.location.href = `/works/${name.toLowerCase().replace(/\s+/g, "-")}`;
                  });
                }}
              >
                <div className="group relative w-full h-full overflow-hidden">
                  <img
                    src={`/images/${img}`}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-white dark:bg-darkBg transition-opacity duration-300 ease-in-out flex items-center justify-center z-10 ${
                    isRevealed ? 'opacity-0' : 'opacity-100'
                  }`}>
                    <p className="text-black dark:text-white font-plus text-sm text-center px-2">{name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Works;