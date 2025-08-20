import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import "swiper/css";
import "../fonts.css";

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const slides = [1, 2, 3, 4];

  const slideElements = slides.flatMap((num, index) => [
    <SwiperSlide key={`img-${num}`}>
      <img
        src={`/images/img${num}.jpg`}
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
      {/* Cuadrícula solo en desktop */}
      <div className="absolute inset-0 z-20 hidden lg:block">
        <div className="absolute left-0 right-0 h-px bg-black dark:bg-white top-[4%]" />
        <div className="absolute left-0 right-0 h-px bg-black dark:bg-white top-1/2" />
        <div className="absolute left-0 right-0 h-px bg-black dark:bg-white bottom-[4%]" />
        <div className="absolute top-0 bottom-0 w-px bg-black dark:bg-white left-1/3" />
        <div className="absolute top-0 bottom-0 w-px bg-black dark:bg-white left-2/3" />
      </div>

      {/* LIGHT / DARK Toggle */}
      <div
        onClick={toggleTheme}
        className="absolute left-1/2 transform -translate-x-1/2 
                  text-black dark:text-white font-plus font-extralight cursor-pointer w-fit z-[999] 
                  top-[16px] md:top-[26px] lg:top-[15px] 
                  text-[14px] md:text-[16px] lg:text-[18px]"
      >
        {theme === "dark" ? "DARK" : "LIGHT"}
      </div>

      {/* Navbar items */}
      <div
        className="absolute right-4 md:right-10 lg:right-20 
                  top-[16px] md:top-[26px] lg:top-[15px] 
                  z-[999] flex gap-4 md:gap-8 lg:gap-12 
                  text-[14px] md:text-[16px] lg:text-[18px] 
                  text-black dark:text-white font-plus font-light"
      >
        <Link to="/works" className="relative group font-plus text-black dark:text-white">
          WORKS
          <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <div>ABOUT</div>
        <div>CONTACT</div>
      </div>


{/* Título + tagline */}
<div className="relative h-auto lg:h-screen">
  <p
    className="absolute font-migella text-[64px] md:text-[96px] lg:text-[110px]
               top-[20px] md:top-[40px] lg:top-[60px] left-[20px] md:left-[40px]"
  >
    JONATHAN
  </p>

  <p
    className="absolute font-migella text-[64px] md:text-[96px] lg:text-[110px]
               top-[120px] md:top-[160px] lg:top-[200px] left-[22px] md:left-[42px]"
  >
    CALISTRO
  </p>

  {/* Tagline debajo del título */}
  <p
    className="absolute font-plus text-black dark:text-white
               text-[16px] sm:text-[18px] md:text-[22px] lg:text-[33px]
               top-[220px] md:top-[280px] lg:top-[420px]
               left-[26px] md:left-[46px]"
  >
    Architecture and Interior design
  </p>
</div>


      {/* Contenido responsive */}
      <div className="lg:hidden flex flex-col gap-6 px-4 mt-10">
        {/* Carrusel */}
        <div className="w-full aspect-video overflow-hidden shadow-lg">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            speed={1500}
            className="w-full h-full"
          >
            {slideElements}
          </Swiper>
        </div>

        {/* Imagen derecha (ahora apilada) */}
        <div className="w-full aspect-video overflow-hidden relative group">
          <img
            src="/images/hoverlg.jpg"
            alt="Imagen en grilla"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white dark:bg-darkBg transition-opacity duration-1000 opacity-100 group-hover:opacity-0 pointer-events-none z-10"></div>
        </div>

        {/* Imágenes columna izquierda (en fila) */}
        <div className="flex gap-2 w-full">
          {[5, 6, 7].map((num) => (
            <div
              key={num}
              className="flex-1 aspect-video overflow-hidden group transition-all duration-500 ease-in-out"
            >
              <img
                src={`/images/img${num}.jpg`}
                alt={`Imagen ${num}`}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Layout original solo en desktop */}
      <div className="hidden lg:block">
        {/* Carrusel central */}
        <div className="absolute left-1/3 w-1/3 top-[4%] bottom-1/2 z-10 overflow-hidden flex items-center justify-center shadow-lm">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={1500}
            className="w-full h-full"
          >
            {slideElements}
          </Swiper>
        </div>

        {/* Imagen derecha inferior */}
        <div className="group absolute left-2/3 w-1/3 top-1/2 bottom-[4%] z-50 overflow-hidden">
          <img
            src="/images/hoverlg.jpg"
            alt="Imagen en grilla"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white dark:bg-darkBg transition-opacity duration-1000 opacity-100 group-hover:opacity-0 pointer-events-none z-10"></div>
        </div>

        {/* Imágenes columna izquierda */}
        <div className="absolute left-0 w-1/3 top-1/2 bottom-[4%] z-40 flex flex-row overflow-hidden">
          {[5, 6, 7].map((num) => (
            <div
              key={num}
              className="group flex-1 overflow-hidden transition-all duration-500 ease-in-out hover:flex-[2]"
            >
              <img
                src={`/images/img${num}.jpg`}
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
