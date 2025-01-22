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
import { Homes, Portfolio, ContactUs, NotFound } from "./pages";
import "./App.css";
import "./index.css";
function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Navigate to="/jasa-pembuatan-website" />} />
        <Route path="/jasa-pembuatan-website" element={<Homes />} />
        <Route path="/portofolio-web" element={<Portfolio />} />
        <Route path="/hubungi-kami" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
