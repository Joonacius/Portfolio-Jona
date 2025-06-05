import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


function Works() {
  return (
<div className="relative min-h-[1752px] bg-white dark:bg-darkBg overflow-hidden transition-colors duration-500">


      <Navbar />

        {/* Líneas horizontales */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white" style={{ top: "67px" }} />
          <div className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white" style={{ top: "606px" }} />
          <div className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white" style={{ top: "1145px" }} />
          <div className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white" style={{ bottom: "67px" }} />

          {/* Líneas verticales */}
          <div className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white" style={{ left: "20%" }} />
          <div className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white" style={{ left: "40%" }} />
          <div className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white" style={{ left: "60%" }} />
          <div className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white" style={{ left: "80%" }} />
        </div>


      {/* Función de ayuda para renderizar celdas */}
      {[
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
      ].map(({ name, img, row, col }) => {
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
                    <p className="text-black dark:text-white font-plus" style={{ fontSize: "48px" }}>{name}</p>
                </div>

              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Works;