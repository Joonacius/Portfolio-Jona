import Navbar from "../components/Navbar";
import { useState } from "react";
import { getImageUrl } from "../utils/imageHelper";

function Hall() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc, imageAlt) => {
    console.log("Opening modal with:", imageSrc, imageAlt); // Debug
    setSelectedImage({ src: imageSrc, alt: imageAlt });
  };

  const closeModal = () => {
    console.log("Closing modal"); // Debug
    setSelectedImage(null);
  };

  console.log("Current selectedImage:", selectedImage); // Debug
  return (
    <div className="relative min-h-[1752px] md:min-h-[1752px] sm:min-h-screen bg-white dark:bg-[#151515] transition-colors duration-500 overflow-hidden">
      <Navbar />

      {/* DESKTOP - Líneas de la cuadrícula */}
      <div className="hidden md:block absolute inset-0 z-10 pointer-events-none">
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

      {/* DESKTOP - Imagen 1: Ocupa columnas 1-2 de filas 1 y 2 */}
      <div
        className="hidden md:block absolute z-20 w-[40%] h-[1078px] cursor-pointer transition-all duration-300 hover:opacity-90"
        style={{ top: "67px", left: "0%" }}
        onClick={() => openModal(getImageUrl("hall/hall1.jpg"), "hall1")}
      >
        <div className="w-full h-full p-[1px] bg-black dark:bg-white">
          <img
            src={getImageUrl("hall/hall1.jpg")}
            alt="hall1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* DESKTOP - Imagen 2: Ocupa columnas 4-5 de fila 2 */}
      <div
        className="hidden md:block absolute z-20 w-[40%] h-[539px] cursor-pointer transition-all duration-300 hover:opacity-90"
        style={{ top: "606px", left: "60%" }}
        onClick={() => openModal(getImageUrl("hall/hall2.jpg"), "hall2")}
      >
        <div className="w-full h-full p-[1px] bg-black dark:bg-white">
          <img
            src={getImageUrl("hall/hall2.jpg")}
            alt="hall2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* MOBILE/TABLET - Layout vertical apilado */}
      <div className="md:hidden relative z-20 pt-20 px-4 pb-8 space-y-6">
        
        {/* Imagen 1 - Móvil */}
        <div 
          className="w-full cursor-pointer transition-all duration-300 hover:opacity-90"
          onClick={() => openModal(getImageUrl("hall/hall1.jpg"), "hall1")}
        >
          <div className="aspect-[4/5] w-full p-[1px] bg-black dark:bg-white">
            <img
              src={getImageUrl("hall/hall1.jpg")}
              alt="hall1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Separador visual móvil */}
        <div className="w-full h-[1px] bg-black dark:bg-white opacity-30"></div>

        {/* Imagen 2 - Móvil */}
        <div 
          className="w-full cursor-pointer transition-all duration-300 hover:opacity-90"
          onClick={() => openModal(getImageUrl("hall/hall2.jpg"), "hall2")}
        >
          <div className="aspect-[4/3] w-full p-[1px] bg-black dark:bg-white">
            <img
              src={getImageUrl("hall/hall2.jpg")}
              alt="hall2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      {/* TABLET - Layout adaptado para pantallas medianas */}
      <div className="hidden sm:block md:hidden relative z-20 pt-24 px-8 pb-12">
        
        {/* Grid para tablet con 2 columnas */}
        <div className="grid grid-cols-2 gap-8 items-start">
          
          {/* Imagen 1 - Tablet */}
          <div 
            className="col-span-1 cursor-pointer transition-all duration-300 hover:opacity-90"
            onClick={() => openModal(getImageUrl("hall/hall1.jpg"), "hall1")}
          >
            <div className="aspect-[3/4] w-full p-[1px] bg-black dark:bg-white">
              <img
                src={getImageUrl("hall/hall1.jpg")}
                alt="hall1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Imagen 2 - Tablet */}
          <div 
            className="col-span-1 mt-24 cursor-pointer transition-all duration-300 hover:opacity-90"
            onClick={() => openModal(getImageUrl("hall/hall2.jpg"), "hall2")}
          >
            <div className="aspect-[4/3] w-full p-[1px] bg-black dark:bg-white">
              <img
                src={getImageUrl("hall/hall2.jpg")}
                alt="hall2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Líneas decorativas móviles */}
      <div className="md:hidden absolute inset-0 z-10 pointer-events-none">
        {/* Línea vertical izquierda móvil */}
        <div className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white left-4" />
        {/* Línea vertical derecha móvil */}
        <div className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white right-4" />
      </div>

      {/* MODAL DE PANTALLA COMPLETA */}
      {selectedImage && (
        <>
          {/* Overlay de fondo */}
          <div 
            className="fixed inset-0 z-[9998] bg-black bg-opacity-95"
            onClick={closeModal}
          />
          
          {/* Modal container */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <div className="relative pointer-events-auto">
              
              {/* Botón de cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-300 z-[10000]"
                aria-label="Close modal"
              >
                <span className="block h-[2px] w-6 bg-white rotate-45 absolute" />
                <span className="block h-[2px] w-6 bg-white -rotate-45 absolute" />
              </button>

              {/* Imagen en pantalla completa */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-[90vw] max-h-[90vh] object-contain"
              />
              
            </div>
          </div>

          {/* Indicador para cerrar */}
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[9999] pointer-events-none">
            <p className="text-white text-sm font-plus font-light opacity-70">
              Click outside to close
            </p>
          </div>
        </>
      )}

    </div>
  );
}

export default Hall;