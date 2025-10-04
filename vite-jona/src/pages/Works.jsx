import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

function Works() {
  const [revealedItems, setRevealedItems] = useState(new Set());

  // Helper function for image paths
  const getImageUrl = (imagePath) => {
    return `${import.meta.env.BASE_URL}images/${imagePath}`;
  };

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

  // Animaciones Framer Motion para líneas
  const horizontalLine = (delay = 0) => ({
    initial: { scaleX: 0, transformOrigin: "left" },
    animate: { scaleX: 1 },
    transition: { duration: 1.5, delay, ease: "easeOut" },
  });

  const verticalLine = (delay = 0) => ({
    initial: { scaleY: 0, transformOrigin: "top" },
    animate: { scaleY: 1 },
    transition: { duration: 1.5, delay, ease: "easeOut" },
  });

  return (
    <div className="relative bg-white dark:bg-darkBg overflow-hidden transition-colors duration-500">
      <Navbar />

      {/* ------------------ DESKTOP ------------------ */}
      <div className="hidden lg:block min-h-[1752px] relative">
        {/* Líneas animadas Desktop */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Horizontales */}
          {[
            { top: "67px", delay: 0 },
            { top: "606px", delay: 0.5 },
            { top: "1145px", delay: 1 },
            { bottom: "67px", delay: 1.5 },
          ].map((line, i) => (
            <motion.div
              key={`h-desktop-${i}`}
              className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white"
              style={{ top: line.top, bottom: line.bottom }}
              {...horizontalLine(line.delay)}
            />
          ))}

          {/* Verticales */}
          {[20, 40, 60, 80].map((percent, i) => (
            <motion.div
              key={`v-desktop-${i}`}
              className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white"
              style={{ left: `${percent}%` }}
              {...verticalLine(0.5 + i * 0.5)}
            />
          ))}
        </div>

        {/* Grid items Desktop */}
        {projects.map(({ name, img, row, col }) => {
          const top = 67 + 539 * row;
          const left = `${col * 20}%`;

          return (
            <div
              key={name}
              className="absolute w-[20%] h-[539px] z-10"
              style={{ top: `${top}px`, left }}
            >
              <Link
                to={`/works/${name.toLowerCase().replace(/\s+/g, "-")}`}
                className="block w-full h-full"
              >
                <div className="group relative w-full h-full overflow-hidden">
                  <img
                    src={getImageUrl(img)}
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

      {/* ------------------ TABLET ------------------ */}
      <div className="hidden md:block lg:hidden min-h-screen relative">
        {/* Líneas animadas Tablet */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Horizontales */}
          {[
            { top: "64px", delay: 0 },
            { top: "300px", delay: 0.5 },
            { bottom: "64px", delay: 1 },
          ].map((line, i) => (
            <motion.div
              key={`h-tablet-${i}`}
              className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white"
              style={{ top: line.top, bottom: line.bottom }}
              {...horizontalLine(line.delay)}
            />
          ))}
          {/* Verticales 2 columnas */}
          {["50%"].map((pos, i) => (
            <motion.div
              key={`v-tablet-${i}`}
              className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white"
              style={{ left: pos }}
              {...verticalLine(0.5 + i * 0.5)}
            />
          ))}
        </div>

        {/* Grid container Tablet */}
        <div className="grid grid-cols-2 gap-2 p-4 pt-20">
          {projects.map(({ name, img }) => (
            <Link 
              key={name}
              to={`/works/${name.toLowerCase().replace(/\s+/g, "-")}`} 
              className="block aspect-square"
            >
              <div className="group relative w-full h-full overflow-hidden border border-black dark:border-white">
                <img
                  src={getImageUrl(img)}
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

      {/* ------------------ MOBILE ------------------ */}
      <div className="block md:hidden min-h-screen relative">
        {/* Líneas animadas Mobile */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Verticales - 3 columnas */}
          {[33.33, 66.66].map((percent, i) => (
            <motion.div
              key={`v-mobile-${i}`}
              className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white"
              style={{ left: `${percent}%` }}
              {...verticalLine(0.5 + i * 0.5)}
            />
          ))}
          {/* Horizontales */}
          {[64, 200, 336, 472, 608].map((top, i) => (
            <motion.div
              key={`h-mobile-${i}`}
              className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white"
              style={{ top: `${top}px` }}
              {...horizontalLine(i * 0.3)}
            />
          ))}
        </div>

        {/* Grid container Mobile */}
        <div className="grid grid-cols-3 pt-16">
          {projects.map(({ name, img }) => {
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
                    src={getImageUrl(img)}
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
