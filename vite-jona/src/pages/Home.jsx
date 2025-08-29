import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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

  return (
    <div className="relative min-h-screen bg-white dark:bg-darkBg transition-colors duration-500 overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* ------------------ MOBILE (320px - 767px) ------------------ */}
      <div className="md:hidden relative w-full min-h-screen overflow-hidden">

        {/* Líneas de la grilla MOBILE */}
        <div className="absolute inset-0 pointer-events-none z-50">
          {/* Líneas horizontales */}
          <div className="absolute top-[50px] sm:top-[65px] left-0 w-full h-[1px] bg-black dark:bg-white" />
          <div className="absolute top-[231px] sm:top-[322px] left-0 w-full h-[1px] bg-black dark:bg-white" />
          <div className="absolute top-[512px] sm:top-[662px] left-0 w-full h-[1px] bg-black dark:bg-white" />
          <div className="absolute top-[561px] sm:top-[711px] left-0 w-full h-[1px] bg-black dark:bg-white" />
          <div className="absolute bottom-[30px] sm:bottom-[45px] left-0 w-full h-[1px] bg-black dark:bg-white" />

          {/* Líneas verticales */}
          <div className="absolute top-0 bottom-0 left-[60px] sm:left-[75px] w-[1px] bg-black dark:bg-white" />
          <div className="absolute top-0 bottom-0 right-[60px] sm:right-[75px] w-[1px] bg-black dark:bg-white" />
        </div>

        {/* Título + tagline MOBILE */}
        <div className="flex flex-col items-center justify-start pt-16 sm:pt-28 px-4 relative z-20">
          <p className="font-migella text-5xl sm:text-6xl md:text-7xl text-center">JONATHAN</p>
          <p className="font-migella text-5xl sm:text-6xl md:text-7xl mt-2 text-center">CALISTRO</p>
          <p className="font-plus text-base sm:text-lg mt-6 sm:mt-9 text-center text-black dark:text-white px-4">
            Architecture and Interior design
          </p>
        </div>

        {/* Contenido móvil */}
        <div className="flex flex-col gap-4 sm:gap-6 mt-4 sm:mt-10 relative z-20 mx-[60px] sm:mx-[75px]">
          {/* Carrusel mobile */}
          <div className="w-full h-[280px] sm:h-[320px] overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ 
                delay: 2000, 
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                reverseDirection: false,
                stopOnLastSlide: false
              }}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              speed={1500}
              allowTouchMove={false}
              simulateTouch={false}
              className="w-full h-full"
            >
              {slideElements}
            </Swiper>
          </div>
        </div>

        {/* Imágenes apiladas MOBILE - Posicionadas en la última línea */}
        <div className="absolute bottom-[30px] sm:bottom-[75px] left-[60px] sm:left-[75px] right-[60px] sm:right-[75px] z-20">
          <div className="flex w-full h-[200px] sm:h-[260px] md:h-[300px] overflow-hidden">
            {[5, 6, 7].map((num) => (
              <div
                key={num}
                className="group flex-1 overflow-hidden transition-all duration-500 ease-in-out hover:flex-[2]"
              >
                <img
                  src={getImageUrl(`img${num}.jpg`)}
                  alt={`Imagen ${num}`}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------------ TABLET (768px - 1023px) ------------------ */}
      <div className="hidden md:block lg:hidden relative min-h-screen">
        {/* Líneas de la cuadrícula TABLET */}
        <div className="absolute inset-0 z-20">
          <div className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white top-[60px]" />
          <div className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white top-[50%]" />
          <div className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white bottom-[60px]" />
          <div className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white left-[50%]" />
        </div>

        {/* Título TABLET */}
        <div className="relative pt-16 px-8">
          <p className="font-migella text-7xl xl:text-8xl text-center">JONATHAN</p>
          <p className="font-migella text-7xl xl:text-8xl mt-2 text-center">CALISTRO</p>
          <p className="font-plus text-xl xl:text-2xl mt-6 text-center text-black dark:text-white">
            Architecture and Interior design
          </p>
        </div>

        {/* Layout TABLET */}
        <div className="absolute top-[60px] bottom-[60px] left-0 right-0 flex">
          {/* Carrusel TABLET */}
          <div className="w-1/2 p-4 flex flex-col gap-4">
            <div className="flex-1 overflow-hidden">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ 
                  delay: 2000, 
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                  reverseDirection: false,
                  stopOnLastSlide: false
                }}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                speed={1500}
                allowTouchMove={false}
                simulateTouch={false}
                className="w-full h-full"
              >
                {slideElements}
              </Swiper>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="w-1/2 p-4">
            <div className="flex gap-2 w-full h-[300px] overflow-hidden">
              {[5, 6, 7].map((num) => (
                <div
                  key={num}
                  className="group flex-1 overflow-hidden transition-all duration-500 ease-in-out hover:flex-[2]"
                >
                  <img
                    src={getImageUrl(`img${num}.jpg`)}
                    alt={`Imagen ${num}`}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

{/* ------------------ DESKTOP (1024px+) ------------------ */}
<div className="hidden lg:block relative min-h-[1747px]">
      {/* Líneas de la cuadrícula DESKTOP */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        <div className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white" style={{ top: "67px" }} />
        <div className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white" style={{ top: "873px" }} />
        <div className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white" style={{ bottom: "67px" }} />
        <div className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white" style={{ left: "33.3333%" }} />
        <div className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white" style={{ left: "66.6666%" }} />
      </div>

      {/* Textos columna izquierda */}
      <div 
        className="absolute flex flex-col justify-between px-8"
        style={{
          left: "0",
          width: "33.3333%",
          top: "68px",
          height: "calc(873px - 68px)"
        }}
      >
        {/* Parte superior: Jonathan Calistro */}
        <div>
          <p className="font-migella text-[6vw] xl:text-[128px] leading-none">JONATHAN</p>
          <p className="font-migella text-[6vw] xl:text-[128px] leading-none">CALISTRO</p>
        </div>

        {/* Parte inferior: Architecture... */}
        <p className="font-plus text-black dark:text-white text-[2vw] xl:text-[33px] mb-6">
          Architecture and Interior design
        </p>
      </div>

  {/* Carrusel central */}
  <div 
    className="absolute overflow-hidden z-10"
    style={{ 
      left: "33.3333%", 
      width: "33.3333%", 
      top: "68px", 
      height: "calc(873px - 68px)"
    }}
  >
    <Swiper
      modules={[Autoplay]}
      autoplay={{ 
        delay: 2000, 
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        reverseDirection: false,
        stopOnLastSlide: false
      }}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      speed={1500}
      allowTouchMove={false}
      simulateTouch={false}
      className="w-full h-full"
    >
      {slideElements}
    </Swiper>
  </div>

  {/* Imagen derecha inferior */}
  <div 
    className="group absolute overflow-hidden z-40"
    style={{ 
      left: "66.6666%", 
      width: "33.3333%", 
      top: "874px", 
      bottom: "68px" 
    }}
  >
    <img
      src={getImageUrl("hoverlg.jpg")}
      alt="Imagen en grilla"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-white dark:bg-darkBg transition-opacity duration-1000 opacity-100 group-hover:opacity-0 pointer-events-none z-10"></div>
  </div>

  {/* Imágenes columna izquierda - parte inferior */}
  <div 
    className="absolute flex flex-row overflow-hidden z-40"
    style={{ 
      left: "0", 
      width: "33.3333%", 
      top: "874px", 
      bottom: "68px" 
    }}
  >
    {[5, 6, 7].map((num) => (
      <div
        key={num}
        className="group flex-1 overflow-hidden transition-all duration-500 ease-in-out hover:flex-[2]"
      >
        <img
          src={getImageUrl(`img${num}.jpg`)}
          alt={`Imagen ${num}`}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0"
        />
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default Home;