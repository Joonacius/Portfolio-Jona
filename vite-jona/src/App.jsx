import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Hall from "./pages/Hall";

function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-500">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/hall" element={<Hall />} />
      </Routes>
    </div>
  );
}

export default App;