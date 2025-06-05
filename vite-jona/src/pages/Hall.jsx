import Navbar from "../components/Navbar";

function Hall() {
  return (
    <div className="relative min-h-[1752px] bg-white dark:bg-[#151515] transition-colors duration-500 overflow-hidden">
      <Navbar />

      {/* Líneas de la cuadrícula */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Líneas horizontales */}
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

      {/* Imagen 1: Ocupa columnas 1-2 de filas 1 y 2 */}
      <div
        className="absolute z-20 w-[40%] h-[1078px]"
        style={{ top: "67px", left: "0%" }}
      >
        <div className="w-full h-full p-[1px] bg-black dark:bg-white">
          <img
            src="/images/hall/hall1.jpg"
            alt="hall1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Imagen 2: Ocupa columnas 4-5 de fila 2 */}
      <div
        className="absolute z-20 w-[40%] h-[539px]"
        style={{ top: "606px", left: "60%" }}
      >
        <div className="w-full h-full p-[1px] bg-black dark:bg-white">
          <img
            src="/images/hall/hall2.jpg"
            alt="hall2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hall;
