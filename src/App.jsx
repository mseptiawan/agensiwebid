import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Homes, Portofolio, KontakKita, TidakDitemukan } from "./pages";
import "./App.css";
import "./index.css";
function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Navigate to="/pemenang-karir" />} />
        <Route path="/pemenang-karir" element={<Homes />} />
        <Route path="/portofolio-web" element={<Portofolio />} />
        <Route path="/hubungi-kami" element={<KontakKita />} />
        <Route path="*" element={<TidakDitemukan />} />
      </Routes>
    </Router>
  );
}

export default App;
