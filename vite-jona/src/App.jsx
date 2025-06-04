function App() {
  return (
    <div className="relative min-h-[1747px] bg-white overflow-y-auto">
      {/* Cuadrícula */}
      <div className="absolute inset-0 z-0">
        {/* Línea horizontal superior: 67px */}
        <div className="absolute left-0 right-0 h-[1px] bg-black" style={{ top: '67px' }} />

        {/* Línea horizontal intermedia */}
        <div className="absolute left-0 right-0 h-[1px] bg-black" style={{ top: '873px' }} />

        {/* Línea horizontal inferior: 67px desde abajo */}
        <div className="absolute left-0 right-0 h-[1px] bg-black" style={{ bottom: '67px' }} />

        {/* Líneas verticales */}
        <div className="absolute top-0 bottom-0 w-[1px] bg-black" style={{ left: '33.3333%' }} />
        <div className="absolute top-0 bottom-0 w-[1px] bg-black" style={{ left: '66.6666%' }} />
      </div>

   <div
  className="absolute w-full text-center text-black font-plus font-extralight"
  style={{ 
    top: '38px',
    fontSize: "20px",
    }}
>
  LIGHT
</div>

<div
  className="absolute right-24 top-[38px] flex gap-14 text-2xl text-black font-plus font-light"
  style={{
    fontSize: "20px",
    }}
>
  <div>WORKS</div>
  <div>ABOUT</div>
  <div>CONTACT</div>
</div>

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
        className="absolute font-plus"
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
    
    </div>
  );
}

export default App;
