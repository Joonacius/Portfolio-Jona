import Navbar from "../components/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import { getImageUrl } from "../utils/imageHelper";

// Reutilizamos las animaciones del Home
const horizontalLine = (delay = 0) => ({
  initial: { scaleX: 0, opacity: 0 },
  animate: { scaleX: 1, opacity: 1 },
  transition: {
    duration: 1.2,
    delay,
    ease: [0.76, 0, 0.24, 1],
  },
});

const verticalLine = (delay = 0) => ({
  initial: { scaleY: 0, opacity: 0 },
  animate: { scaleY: 1, opacity: 1 },
  transition: {
    duration: 1.2,
    delay,
    ease: [0.76, 0, 0.24, 1],
  },
});

function Hall() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc, imageAlt) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt });
  };

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="relative min-h-[1752px] md:min-h-[1752px] sm:min-h-screen bg-white dark:bg-[#151515] transition-colors duration-500 overflow-hidden">
      <Navbar />

      {/* -------------------- DESKTOP -------------------- */}
      <div className="hidden md:block absolute inset-0 z-10 pointer-events-none">
        {/* Líneas horizontales animadas */}
        {[
          { top: "67px", delay: 0 },
          { top: "606px", delay: 0.2 },
          { top: "1145px", delay: 0.4 },
          { bottom: "67px", delay: 0.6 },
        ].map((line, i) => (
          <motion.div
            key={`h-desktop-${i}`}
            className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white origin-left"
            style={{ top: line.top, bottom: line.bottom }}
            {...horizontalLine(line.delay)}
          />
        ))}

        {/* Líneas verticales animadas */}
        {["20%", "40%", "60%", "80%"].map((pos, i) => (
          <motion.div
            key={`v-desktop-${i}`}
            className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white origin-top"
            style={{ left: pos }}
            {...verticalLine(0.8 + i * 0.1)}
          />
        ))}
      </div>

      {/* -------------------- TABLET -------------------- */}
      <div className="hidden sm:block md:hidden absolute inset-0 z-10 pointer-events-none">
        {/* Líneas horizontales */}
        {[
          { top: "60px", delay: 0 },
          { top: "50%", delay: 0.2 },
          { bottom: "60px", delay: 0.4 },
        ].map((line, i) => (
          <motion.div
            key={`h-tablet-${i}`}
            className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white origin-left"
            style={{ top: line.top, bottom: line.bottom }}
            {...horizontalLine(line.delay)}
          />
        ))}

        {/* Línea vertical central */}
        <motion.div
          className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white left-[50%] origin-top"
          {...verticalLine(0.6)}
        />
      </div>

      {/* -------------------- MOBILE -------------------- */}
      <div className="md:hidden absolute inset-0 z-10 pointer-events-none">
        <motion.div
          className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white left-4 origin-top"
          {...verticalLine(0.3)}
        />
        <motion.div
          className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white right-4 origin-top"
          {...verticalLine(0.5)}
        />
      </div>

      {/* -------------------- CONTENIDO -------------------- */}
      {/* Desktop imágenes */}
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

      {/* Mobile layout */}
      <div className="md:hidden relative z-20 pt-20 px-4 pb-8 space-y-6">
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

        <div className="w-full h-[1px] bg-black dark:bg-white opacity-30"></div>

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

      {/* Tablet layout */}
      <div className="hidden sm:block md:hidden relative z-20 pt-24 px-8 pb-12">
        <div className="grid grid-cols-2 gap-8 items-start">
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

      {/* -------------------- MODAL -------------------- */}
      {selectedImage && (
        <>
          <div
            className="fixed inset-0 z-[9998] bg-black bg-opacity-95"
            onClick={closeModal}
          />
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <div className="relative pointer-events-auto">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-300 z-[10000]"
                aria-label="Close modal"
              >
                <span className="block h-[2px] w-6 bg-white rotate-45 absolute" />
                <span className="block h-[2px] w-6 bg-white -rotate-45 absolute" />
              </button>

              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-[90vw] max-h-[90vh] object-contain"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

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
