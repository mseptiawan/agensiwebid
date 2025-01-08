import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HalamanHome,
  HalamanPortofolio,
  HalamanKontak,
  NotFound,
} from "./pages";
import "./App.css";
import "./index.css";
function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HalamanHome />} />
        <Route path="/portofolio" element={<HalamanPortofolio />} />
        <Route path="/kontak" element={<HalamanKontak />} />
        <Route path="*" element={<NotFound />} /> {/* Fallback */}
      </Routes>
    </Router>
  );
}

export default App;
