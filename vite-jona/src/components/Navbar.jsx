import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarContent, setSidebarContent] = useState("");
  const location = useLocation();

  // Detectar si estamos en Home para usar configuración específica
  const isHome = location.pathname === '/';
  
  const barColor = theme === "dark" ? "bg-white" : "bg-black";

  const openSidebar = (content) => {
    setSidebarContent(content);
    setSidebarOpen(true);
    setMenuOpen(false); // Cerrar menú móvil si está abierto
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* JC - Home Button - Solo visible fuera de Home */}
      {!isHome && (
        <Link
          to="/"
          className="absolute left-[40px] md:left-[160px] top-[10px] text-center font-migella text-black dark:text-white z-30"
          style={{ fontSize: "50px" }}
        >
          JC
        </Link>
      )}

      {/* LIGHT / DARK Toggle */}
      <div
        onClick={toggleTheme}
        className={`absolute left-1/2 -translate-x-1/2 text-black dark:text-white font-plus font-extralight cursor-pointer z-[999] text-lg sm:text-xl md:text-base lg:text-xl xl:text-xl px-3 py-1 lg:px-4 lg:py-2 ${
          isHome 
            ? "top-3 lg:top-7" 
            : "top-5 lg:top-8"
        }`}
      >
        {theme === "dark" ? "DARK" : "LIGHT"}
      </div>

      {isHome ? (
        // CONFIGURACIÓN ORIGINAL DE HOME
        <>
          {/* Botón Hamburguesa - UNIFICADO igual que Works */}
          <div className="md:hidden absolute right-4 top-3 z-[1100]">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="w-9 h-9 flex flex-col items-center justify-center gap-[6px] rounded-full active:scale-95 transition"
            >
              {/* barra 1 */}
              <span
                className={[
                  "block h-[1.5px] w-6 transition-transform duration-300",
                  barColor,
                  menuOpen ? "translate-y-[7px] rotate-45" : "",
                ].join(" ")}
              />
              {/* barra 2 */}
              <span
                className={[
                  "block h-[1.5px] w-6 transition-opacity duration-200",
                  barColor,
                  menuOpen ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              {/* barra 3 */}
              <span
                className={[
                  "block h-[1.5px] w-6 transition-transform duration-300",
                  barColor,
                  menuOpen ? "-translate-y-[7px] -rotate-45" : "",
                ].join(" ")}
              />
            </button>
          </div>

          {/* Menú Full-Screen - Solo móvil HOME */}
          <div
            className={`fixed inset-0 z-[1000] bg-white dark:bg-darkBg flex flex-col items-center justify-center gap-8 transform transition-all duration-500 ease-in-out md:hidden
              ${menuOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"}
            `}
          >
            <Link
              to="/works"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-plus text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition"
            >
              WORKS
            </Link>
            <button
              onClick={() => openSidebar("about")}
              className="text-2xl font-plus text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition"
            >
              ABOUT
            </button>
            <button
              onClick={() => openSidebar("contact")}
              className="text-2xl font-plus text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition"
            >
              CONTACT
            </button>
          </div>

          {/* Overlay oscuro HOME */}
          {menuOpen && (
            <div
              className="fixed inset-0 z-[500] bg-black bg-opacity-50 md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            ></div>
          )}

          {/* Menu desktop HOME - Visible desde tablet */}
          <div className="hidden md:flex absolute top-1 right-2 z-[999] lg:top-8 lg:right-[100px] xl:right-[160px] gap-6 text-black dark:text-white font-plus font-light md:text-base md:gap-6 lg:text-lg lg:gap-7 xl:text-xl xl:gap-8">
            <Link to="/works" className="relative group">
              WORKS
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button
              onClick={() => openSidebar("about")}
              className="relative group text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition"
            >
              ABOUT
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => openSidebar("contact")}
              className="relative group text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition"
            >
              CONTACT
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
        </>
      ) : (
        // CONFIGURACIÓN PARA OTRAS PÁGINAS (WORKS, ETC.)
        <>
          {/* Links en Desktop - Otras páginas */}
          <div
            className="hidden md:flex absolute top-5 right-2 lg:top-8 lg:right-[40px] xl:right-[60px] z-[999] gap-14 text-2xl text-black dark:text-white font-plus font-light"
            style={{ fontSize: "20px" }}
          >
            <Link
              to="/works"
              className="relative group font-plus text-black dark:text-white mr-[195px]"
            >
              WORKS
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button
              onClick={() => openSidebar("about")}
              className="relative group font-plus text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition"
            >
              ABOUT
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => openSidebar("contact")}
              className="relative group font-plus text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition"
            >
              CONTACT
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Botón Hamburguesa - solo móvil OTRAS PÁGINAS */}
          <div className="md:hidden absolute right-6 top-6 z-[1000]">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="w-9 h-9 flex flex-col items-center justify-center gap-[6px] rounded-full active:scale-95 transition"
            >
              {/* barra 1 */}
              <span
                className={[
                  "block h-[1.5px] w-6 transition-transform duration-300",
                  barColor,
                  menuOpen ? "translate-y-[7px] rotate-45" : "",
                ].join(" ")}
              />
              {/* barra 2 */}
              <span
                className={[
                  "block h-[1.5px] w-6 transition-opacity duration-200",
                  barColor,
                  menuOpen ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              {/* barra 3 */}
              <span
                className={[
                  "block h-[1.5px] w-6 transition-transform duration-300",
                  barColor,
                  menuOpen ? "-translate-y-[7px] -rotate-45" : "",
                ].join(" ")}
              />
            </button>
          </div>

          {/* Menú Full-Screen - Móvil OTRAS PÁGINAS */}
          <div
            className={`fixed inset-0 z-50 bg-white dark:bg-darkBg flex flex-col items-center justify-center gap-8 transform transition-all duration-500 ease-in-out md:hidden
              ${menuOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"}
            `}
          >
            {/* Líneas verticales del menú */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Línea vertical izquierda */}
              <div className="absolute top-0 bottom-0 w-[1px] bg-black dark:bg-white left-12" />
            </div>

            {/* Enlaces con líneas horizontales */}
            <div className="relative flex flex-col items-center gap-12">
              
              <Link
                to="/works"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-plus text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition relative"
              >
                WORKS
              </Link>
              
              {/* Línea horizontal entre Works y About */}
              <div className="absolute h-[1px] bg-black dark:bg-white" style={{ top: "30px", left: "-50vw", right: "-50vw", width: "100vw" }} />
              
              <button
                onClick={() => openSidebar("about")}
                className="text-2xl font-plus text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition relative"
              >
                ABOUT
              </button>
              
              {/* Línea horizontal entre About y Contact */}
              <div className="absolute h-[1px] bg-black dark:bg-white" style={{ top: "110px", left: "-50vw", right: "-50vw", width: "100vw" }} />
              
              <button
                onClick={() => openSidebar("contact")}
                className="text-2xl font-plus text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition relative"
              >
                CONTACT
              </button>
              
              {/* Línea horizontal inferior */}
              <div className="absolute h-[1px] bg-black dark:bg-white" style={{ top: "192px", left: "-50vw", right: "-50vw", width: "100vw" }} />
            </div>
          </div>

          {/* Overlay oscuro para menú móvil OTRAS PÁGINAS */}
          {menuOpen && (
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
          )}
        </>
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-96 max-w-[90vw] bg-white dark:bg-darkBg border-l border-black dark:border-white z-[1100] transform transition-all duration-500 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header del Sidebar */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-black dark:border-white">
          <h2 className="text-xl font-plus font-light text-black dark:text-white uppercase mt-2">
            {sidebarContent}
          </h2>
          <button
            onClick={closeSidebar}
            className="w-9 h-9 flex flex-col items-center justify-center gap-[6px] rounded-full active:scale-95 transition"
            aria-label="Close sidebar"
          >
            {/* X animada igual que el hamburger */}
            <span className={`block h-[1.5px] w-6 transition-transform duration-300 ${barColor} translate-y-[7px] rotate-45`} />
            <span className={`block h-[1.5px] w-6 transition-opacity duration-200 ${barColor} opacity-0`} />
            <span className={`block h-[1.5px] w-6 transition-transform duration-300 ${barColor} -translate-y-[7px] -rotate-45`} />
          </button>
        </div>

        {/* Contenido del Sidebar */}
        <div className="p-6 h-full overflow-y-auto">
          {sidebarContent === "about" && (
            <div className="space-y-4">
              <h3 className="text-lg font-plus font-medium text-black dark:text-white mb-4">
                About Me
              </h3>
              <p className="text-black dark:text-white font-plus font-light leading-relaxed">
                Soy estudiante avanzado de la carrera de arquitectura, tambien con conocimientos de programacion. 
              </p>
              <p className="text-black dark:text-white font-plus font-light leading-relaxed">
                Con experiencia en modelado 3d arquictonico y renderizado en un amplio abanicos de programas.
              </p>
              <div className="mt-6 space-y-2">
                <h4 className="font-plus font-medium text-black dark:text-white">Habilidades:</h4>
                <ul className="space-y-1 text-black dark:text-white font-plus font-light">
                  <li>• SketchUp</li>
                  <li>• D5 Render</li>
                  <li>• Enscape</li>
                  <li>• V-Ray</li>
                  <li>• React & JavaScript</li>
                  <li>• UI/UX Design</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
            </div>
          )}

          {sidebarContent === "contact" && (
            <div className="space-y-6">
              <h3 className="text-lg font-plus font-medium text-black dark:text-white mb-4">
                Contact Me
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-plus font-medium text-black dark:text-white mb-2">Email</h4>
                  <a 
                    href="mailto:joonacalistro@gmail.com" 
                    className="text-black dark:text-white font-plus font-light hover:text-gray-600 dark:hover:text-gray-300 transition"
                  >
                    joonacalistro@gmail.com
                  </a>
                </div>
                
                <div>
                  <h4 className="font-plus font-medium text-black dark:text-white mb-2">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/jonathan-calistro-ab328a14b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black dark:text-white font-plus font-light hover:text-gray-600 dark:hover:text-gray-300 transition"
                  >
                    linkedin.com/jonathan-calistro
                  </a>
                </div>
                
                <div>
                  <h4 className="font-plus font-medium text-black dark:text-white mb-2">GitHub</h4>
                  <a 
                    href="https://github.com/Joonacius" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black dark:text-white font-plus font-light hover:text-gray-600 dark:hover:text-gray-300 transition"
                  >
                    github.com/Joonacius
                  </a>
                </div>

                <div className="mt-8 p-4 border border-black dark:border-white">
                  <h4 className="font-plus font-medium text-black dark:text-white mb-3">Envíame un mensaje</h4>
                  <form 
                    action={`mailto:joonacalistro@gmail.com`}
                    method="get"
                    encType="text/plain"
                    className="space-y-3"
                  >
                    <input
                      type="text"
                      name="subject"
                      placeholder="Asunto del mensaje"
                      className="w-full p-2 border border-gray-400 dark:border-gray-500 bg-gray-100 dark:bg-gray-700 text-black dark:text-white font-plus font-light focus:outline-none focus:border-black dark:focus:border-white transition"
                    />
                    <textarea
                      name="body"
                      placeholder="Tu mensaje"
                      rows="4"
                      className="w-full p-2 border border-gray-400 dark:border-gray-500 bg-gray-100 dark:bg-gray-700 text-black dark:text-white font-plus font-light resize-none focus:outline-none focus:border-black dark:focus:border-white transition"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full py-2 bg-black dark:bg-white text-white dark:text-black font-plus font-light hover:bg-gray-800 dark:hover:bg-gray-200 transition"
                    >
                      ENVIAR
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay para Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-[1050] bg-black bg-opacity-50"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Navbar;