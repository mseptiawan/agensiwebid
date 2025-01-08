import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useState, useEffect } from "react";
import { check, clickicon } from "../assets";
import Testimonials from "./HomeComponents/Testimonials";
import Visimisi from "./HomeComponents/Visimisi";
import Cta from "./HomeComponents/Cta";
import Features from "./HomeComponents/Features";
import Questions from "./HomeComponents/Questions";
import Perform from "./HomeComponents/Perform";
import Paket from "./HomeComponents/Paket";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data/layanan.json")
      .then((response) => response.json())
      .then((data) => setServices(data.services));
  }, []);

  return (
    <div>
      <div className=""></div>
      <div className="w-11/12 xxl:w-[1850px]    mx-auto ss:bg-background-utama bg-cover  xl:p-32 lg:p-12  bg-center    xs:bg-background-handphone font-poppins  ">
        <div className=" p-10 sm:w-1/2 md:w-2/5 md:ml-20  -ml-6 xs:px-10  lg:scale-125 xl:scale-[1.7] xl:ml-32 ">
          <div>
            <h2 className="font-poppins    text-lg   text-left">
              Diskon hingga 60%
            </h2>
            <h1 className="font-poppins text-2xl font-bold  mb-2  text-left ">
              Ingin punya website tapi tidak tahu harus mulai dari mana?
            </h1>
            <h2 className="font-poppins  text-lg  mb-2 text-left">
              Kami siap membantu Anda!
            </h2>
            <ul className="flex flex-col space-y-0">
              <li className="flex items-center">
                <img src={check} alt="Check" className="w-10  mr-2" />
                <span>Selesai dengan cepat</span>
              </li>
              <li className="flex items-center">
                <img src={check} alt="Check" className="w-10  mr-2" />
                <span>Harga transparan dan kompetitif</span>
              </li>
              <li className="flex items-center">
                <img src={check} alt="Check" className="w-10 mr-2" />
                <span>Dukungan jangka panjang</span>
              </li>
            </ul>

            <div className=" flex font-poppins  text-left mt-4 ">
              <div className="relative hover:scale-95 duration-100">
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://wa.me/6287789035813?text=Halo,%20saya%20tertarik%20untuk%20membuat%20website.")
                  }
                  className="bg-white shadow-lg text-black font-bold md:px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 xs:px-2   "
                >
                  Hubungi kami!
                </button>
                <img
                  src={clickicon}
                  alt=""
                  className="absolute top-4 right-1 w-10"
                />
              </div>

              <a href="#paket">
                <h5 className="bg-white shadow-lg text-black font-bold md:px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 xs:px-2 ml-4  ">
                  Lihat paket
                </h5>
              </a>
            
            </div>
          </div>
        </div>
      </div>
      <Visimisi />
      <div className="font-poppins max-w-screen-md mx-auto mb-8 text-center lg:mb-12 xs:w-5/6">
        <h2
          className=" mb-4 text-3xl font-poppins tracking-tight    font-bold  mt-2"
          id="layanan"
        >
          Apa saja yang bisa kami bantu untuk anda?
        </h2>
        <p className="mb-5 font-light  sm:text-xl font-poppins">
          Transformasi IT Anda Dimulai di Sini: Solusi Pintar untuk Setiap
          Tantangan Teknologi!
        </p>
      </div>
      <div className="w-11/12 xxl:w-[1850px]  xs:px-0 md:px-36 mx-auto mt-10 ">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1500: { slidesPerView: 3 },
            1900: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          loop
          modules={[Navigation, Pagination]}
          style={{
            "--swiper-pagination-color": "#1e90ff", // Warna pagination
            "--swiper-pagination-bottom": "40px",
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className=" rounded-lg font-poppins h-[650px] bg-white  ">
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-[300px]  object-contain"
                    src={service.img}
                    alt={service.name}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      {service.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 ">
                    {service.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div
            className="swiper-button-next"
            style={{
              fontSize: "5px", // Ukuran font lebih kecil
              width: "2px", // Lebar tombol
              height: "5px", // Tinggi tombol
              marginTop: "-80px",
              color: "black",
              marginRight: "20px",
            }}
          ></div>
          <div
            className="swiper-button-prev"
            style={{
              fontSize: "5px", // Ukuran font lebih kecil
              width: "5px", // Lebar tombol
              height: "5px", // Tinggi tombol
              marginTop: "-80px",
              color: "black",
              marginLeft: "20px",
            }}
          ></div>
        </Swiper>
      </div>
      <Paket />
      <Perform />
      {/* <Cta1 /> */}
      <Features />
      <Questions />
      <Testimonials />
      <Cta />
    </div>
  );
};

export default Home;
