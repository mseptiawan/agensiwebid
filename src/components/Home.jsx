import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import { check, clickicon, backgroundutama } from "../assets";
import Testimonials from "./HomeComponents/Testimonials";
import Goal from "./HomeComponents/Goal";
import CallToAction from "./HomeComponents/CallToAction";
import WhatYouGet from "./HomeComponents/WhatYouGet";
import Questions from "./HomeComponents/Questions";
import WebsiteType from "./HomeComponents/WebsiteType";
import Template from "./HomeComponents/Template";

const Home = () => {
  const [setServices] = useState([]);

  useEffect(() => {
    fetch("/data/layanan.json")
      .then((response) => response.json())
      .then((data) => setServices(data.services));
  }, []);

  return (
    <div className="">
      <div className=" mx-auto    font-outfit ">
        <div className="">
          <div className="md:flex md:justify-center md:space-x-36 -mt-12">
            <div className=" lg:mt-52 lg:ml-20 lg:scale-[1.5] xs:mt-0 sm:mt-36 ss:ml-0 md:ml-20 sm:scale-[1.2] ">
              <h2 className="xs:text-center md:text-left font-outfit text-lg xs:mt-20 md:mt-0 ">
                <span className="text-yellow-300 font-bold">Penawaran menarik</span>
              </h2>
              <div className="xs:text-center md:text-left ">
                <h1 className="font-outfit text-2xl font-bold mb-2">
                  Ingin punya{" "}
                  <span className="text-red-600 font-bold">website</span> tapi
                  tidak
                  <br /> tahu harus mulai dari mana?
                </h1>
              </div>

              <h2 className="font-outfit xs:text-center text-lg  mb-2 md:text-left">
                Kami siap membantu Anda
              </h2>

              <ul className="xs:block md:hidden flex flex-col items-center md:items-start text-center md:text-left mx-auto w-[300px]  text-sm ">
                <div className="ml-10">
                  <li className="flex items-center -mb-2 ">
                    <img
                      src={check}
                      alt="Ikon check untuk menandai tindakan yang sudah selesai"
                      className="w-10 "
                    />
                    <span>Dapat dibayar perbulan</span>
                  </li>
                  <li className="flex items-center -mb-2">
                    <img
                      src={check}
                      alt="Ikon check untuk menandai tindakan yang sudah selesai"
                      className="w-10 "
                    />
                    <span>Harga paling murah sejagad raya</span>
                  </li>
                  <li className="flex items-center -mb-2">
                    <img
                      src={check}
                      alt="Ikon check untuk menandai tindakan yang sudah selesai"
                      className="w-10 "
                    />
                    <span>Dukungan jangka panjang</span>
                  </li>
                </div>
              </ul>

              <ul className="xs:hidden md:block flex flex-col items-center md:items-start text-center md:text-left mx-auto">
                <li className="flex items-center ">
                  <img
                    src={check}
                    alt="Ikon check untuk menandai tindakan yang sudah selesai"
                    className="w-10 mr-2"
                  />
                  <span>Dapat dibayar perbulan</span>
                </li>
                <li className="flex items-center">
                  <img
                    src={check}
                    alt="Ikon check untuk menandai tindakan yang sudah selesai"
                    className="w-10 mr-2"
                  />
                  <span>Dapat Ebook tentang bisnis</span>
                </li>
                <li className="flex items-center">
                  <img
                    src={check}
                    alt="Ikon check untuk menandai tindakan yang sudah selesai"
                    className="w-10 mr-2"
                  />
                  <span>Dukungan jangka panjang</span>
                </li>
              </ul>

              <div className="flex flex-col xs:text-center md:text-left mt-4 mx-auto xs:items-center md:items-start">
                <div className="relative flex flex-col xs:items-center md:items-start space-y-4">
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://wa.me/6287789035813?text=Halo%20kak,%20saya%20tertarik%20untuk%20membuat%20website%20di%20agensiweb%20😀")
                    }
                    className="bg-white shadow-lg text-black font-bold md:px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 xs:px-2 hover:scale-95 duration-75"
                  >
                    BUAT WEBSITE
                    <img
                      src={clickicon}
                      alt="Ikon klik untuk melakukan tindakan"
                      className="absolute top-4 right-1 w-10"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-end xs:justify-center">
              <img
                src={backgroundutama}
                alt="Ikon background utama untuk elemen desain situs atau aplikasi"
                className="lg:w-[600px] ss:w-[500px] xs:w-[300px] "
              />
            </div>
          </div>
        </div>
      </div>
      <Goal />
      <WebsiteType />
      <WhatYouGet />
      <Template />
      <Questions />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
