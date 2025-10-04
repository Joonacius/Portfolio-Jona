import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../context/ThemeContext";
import { getImageUrl } from "../utils/imageHelper";
import "swiper/css";
import "../fonts.css";

function Home() {
  const { theme } = useContext(ThemeContext);

  const slides = [1, 2, 3, 4];

  const slideElements = slides.flatMap((num, index) => [
    <SwiperSlide key={`img-${num}`}>
      <img
        src={getImageUrl(`img${num}.jpg`)}
        alt={`Slide ${num}`}
        className="w-full h-full object-cover"
      />
    </SwiperSlide>,
    <SwiperSlide key={`blank-${index}`}>
      <div className="w-full h-full bg-white dark:bg-darkBg transition-colors"></div>
    </SwiperSlide>,
  ]);

  // Variantes para las líneas animadas
  const horizontalLine = (delay = 0) => ({
    initial: { scaleX: 0, transformOrigin: "left" },
    animate: { scaleX: 1 },
    transition: { duration: 0.8, delay, ease: "easeOut" },
  });

  const verticalLine = (delay = 0) => ({
    initial: { scaleY: 0, transformOrigin: "top" },
    animate: { scaleY: 1 },
    transition: { duration: 0.8, delay, ease: "easeOut" },
  });

  return (
    <div className="relative min-h-screen bg-white dark:bg-darkBg transition-colors duration-500 overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* ------------------ MOBILE ------------------ */}
      <div className="md:hidden relative w-full min-h-screen overflow-hidden">
        {/* Líneas de la grilla MOBILE animadas */}
        <div className="absolute inset-0 pointer-events-none z-50">
          {/* Líneas horizontales */}
          {[
            { top: "50px", delay: 0 },
            { top: "231px", delay: 0.2 },
            { top: "512px", delay: 0.4 },
            { top: "561px", delay: 0.6 },
            { bottom: "30px", delay: 0.8 },
          ].map((line, i) => (
            <motion.div
              key={`h-mobile-${i}`}
              className="absolute left-0 w-full h-[1px] bg-black dark:bg-white"
              style={{ top: line.top, bottom: line.bottom }}
              {...horizontalLine(line.delay)}
            />
          ))}

          {/* Líneas verticales */}
          {[
            { left: "60px", delay: 1 },
            { right: "60px", delay: 1.2 },
          ].map((line, i) => (
            <motion.div
              key={`v-mobile-${i}`}
              className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white"
              style={{ left: line.left, right: line.right }}
              {...verticalLine(line.delay)}
            />
          ))}
        </div>

        {/* Título + tagline MOBILE */}
        <motion.div
          className="flex flex-col items-center justify-start pt-16 sm:pt-28 px-4 relative z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <p className="font-migella text-5xl sm:text-6xl text-center">JONATHAN</p>
          <p className="font-migella text-5xl sm:text-6xl mt-2 text-center">CALISTRO</p>
          <p className="font-plus text-base sm:text-lg mt-6 text-center text-black dark:text-white">
            Architecture and Interior design
          </p>
        </motion.div>

        {/* Carrusel mobile */}
        <motion.div
          className="flex flex-col gap-4 sm:gap-6 mt-4 relative z-20 mx-[60px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="w-full h-[280px] sm:h-[320px] overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                reverseDirection: false,
              }}
              slidesPerView={1}
              loop={true}
              speed={1500}
              allowTouchMove={false}
              className="w-full h-full"
            >
              {slideElements}
            </Swiper>
          </div>
        </motion.div>
      </div>

      {/* ------------------ TABLET ------------------ */}
      <div className="hidden md:block lg:hidden relative min-h-screen">
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Horizontales */}
          {[
            { top: "60px", delay: 0 },
            { top: "50%", delay: 0.2 },
            { bottom: "60px", delay: 0.4 },
          ].map((line, i) => (
            <motion.div
              key={`h-tablet-${i}`}
              className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white"
              style={{ top: line.top, bottom: line.bottom }}
              {...horizontalLine(line.delay)}
            />
          ))}

          {/* Vertical */}
          <motion.div
            className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white left-[50%]"
            {...verticalLine(0.6)}
          />
        </div>

        <motion.div
          className="relative pt-16 px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="font-migella text-7xl text-center">JONATHAN</p>
          <p className="font-migella text-7xl mt-2 text-center">CALISTRO</p>
          <p className="font-plus text-xl mt-6 text-center text-black dark:text-white">
            Architecture and Interior design
          </p>
        </motion.div>
      </div>

      {/* ------------------ DESKTOP ------------------ */}
      <div className="hidden lg:block">
        <div className="relative w-[1920px] min-h-[1747px] mx-auto">
          {/* Líneas de la cuadrícula DESKTOP animadas */}
          <div className="absolute inset-0 z-50 pointer-events-none">
            {/* Horizontales */}
            {[
              { top: "67px", delay: 1 },
              { top: "873px", delay: 1.2 },
              { bottom: "67px", delay: 1.4 },
            ].map((line, i) => (
              <motion.div
                key={`h-desktop-${i}`}
                className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white"
                style={{ top: line.top, bottom: line.bottom }}
                {...horizontalLine(line.delay)}
              />
            ))}

            {/* Verticales */}
            {[
              { left: "640px", delay: 0.6 },
              { left: "1280px", delay: 0.8 },
            ].map((line, i) => (
              <motion.div
                key={`v-desktop-${i}`}
                className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white"
                style={{ left: line.left }}
                {...verticalLine(line.delay)}
              />
            ))}
          </div>

          {/* Textos columna izquierda */}
          <motion.div
            className="absolute flex flex-col justify-between px-8"
            style={{
              left: "0",
              width: "640px",
              top: "68px",
              height: "calc(873px - 68px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div>
              <p className="font-migella text-[128px] leading-none">JONATHAN</p>
              <p className="font-migella text-[128px] leading-none">CALISTRO</p>
            </div>
            <p className="font-plus text-black dark:text-white text-[33px] mb-6">
              Architecture and Interior design
            </p>
          </motion.div>

          {/* Carrusel central */}
          <motion.div
            className="absolute overflow-hidden z-10"
            style={{
              left: "640px",
              width: "640px",
              top: "68px",
              height: "calc(873px - 68px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              slidesPerView={1}
              loop={true}
              speed={1500}
              allowTouchMove={false}
              className="w-full h-full"
            >
              {slideElements}
            </Swiper>
          </motion.div>

          {/* Imagen derecha inferior */}
          <motion.div
            className="group absolute overflow-hidden z-40"
            style={{
              left: "1280px",
              width: "640px",
              top: "874px",
              bottom: "68px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <img
              src={getImageUrl("hoverlg.jpg")}
              alt="Imagen en grilla"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white dark:bg-darkBg transition-opacity duration-1000 opacity-100 group-hover:opacity-0 pointer-events-none z-10"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
