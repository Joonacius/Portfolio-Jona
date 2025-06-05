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
    </SwiperSlide>
  ]);

  return (
    <div className="relative min-h-[1747px] bg-white dark:bg-darkBg transition-colors duration-500 overflow-hidden">
      {/* Cuadrícula */}
      <div className="absolute inset-0 z-20">
        <div className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white" style={{ top: "67px" }} />
        <div className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white" style={{ top: "873px" }} />
        <div className="absolute left-0 right-0 h-[1px] bg-black dark:bg-white" style={{ bottom: "67px" }} />
        <div className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white" style={{ left: "33.3333%" }} />
        <div className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white" style={{ left: "66.6666%" }} />
      </div>

      {/* LIGHT / DARK Toggle */}
      <div
        onClick={toggleTheme}
        className="absolute left-1/2 transform -translate-x-1/2 text-black dark:text-white font-plus font-extralight cursor-pointer w-fit z-[999]"
        style={{
          top: "38px",
          fontSize: "20px",
        }}
      >
        {theme === "dark" ? "DARK" : "LIGHT"}
      </div>

      {/* Navbar items */}
      <div
        className="absolute right-24 top-[38px] z-[999] flex gap-14 text-2xl text-black dark:text-white font-plus font-light"
        style={{ fontSize: "20px" }}
      >
        <Link
          to="/works"
          className="relative group font-plus text-black dark:text-white"
        >
          WORKS
          <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <div>ABOUT</div>
        <div>CONTACT</div>
      </div>

      {/* Título */}
      <div className="relative h-screen">
        <p
          className="absolute font-migella"
          style={{
            top: "30px",
            left: "33px",
            fontSize: "128px",
          }}
        >
          JONATHAN
        </p>
        <p
          className="absolute font-migella"
          style={{
            top: "180px",
            left: "36px",
            fontSize: "128px",
          }}
        >
          CALISTRO
        </p>

        <p
          className="absolute font-plus text-black dark:text-white"
          style={{
            top: "850px",
            left: "70px",
            transform: "translateY(-50%)",
            fontSize: "33px",
          }}
        >
          Architecture and Interior design
        </p>
      </div>

      {/* Carrusel central */}
      <div className="absolute left-[33.3333%] w-[33.3333%] top-[67px] bottom-1/2 z-10 overflow-hidden flex items-center justify-center shadow-lm">
        <div className="w-full h-full">
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
      </div>

      {/* Imagen derecha inferior */}
      <div className="group absolute left-[66.6666%] w-[33.3333%] top-[873px] bottom-[67px] z-50 overflow-hidden">
        <img
          src="/images/hoverlg.jpg"
          alt="Imagen en grilla"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white dark:bg-darkBg transition-colors transition-opacity duration-1000 opacity-100 group-hover:opacity-0 pointer-events-none z-10"></div>
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-black dark:bg-white" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black dark:bg-white" />
          <div className="absolute top-0 left-0 w-[1px] h-full bg-black dark:bg-white" />
        </div>
      </div>

      {/* Imágenes columna izquierda */}
      <div className="absolute left-0 w-[33.3333%] top-[873px] bottom-[67px] z-40 flex flex-row overflow-hidden">
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

      {/* Líneas decorativas */}
      <div className="absolute left-0 w-[33.3333%] top-[873px] bottom-[67px] z-50 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-black dark:bg-white" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black dark:bg-white" />
      </div>
    </div>
  );
}

export default Home;
