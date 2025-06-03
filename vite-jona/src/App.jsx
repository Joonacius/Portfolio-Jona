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

      {/* Texto "Light" centrado horizontalmente, encima de la línea superior */}
      <div 
  className="absolute w-full text-center font-semibold text-black font-MiFuente2 text-3xl" 
  style={{ top: '30px' }}
>
  Light
</div>
    </div>
  );
}

export default App;
