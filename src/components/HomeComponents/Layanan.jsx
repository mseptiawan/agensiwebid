import { useState, useRef, useEffect } from "react";
import { layananSeo,website,zoom } from "../../assets";

const Layanan = () => {
  return (
    <div className="w-full mx-auto  text-[10px] font-outfit " id="paket">
      <section className=" ">
        <div className="">
          <div className="">
            <h2 className="text-3xl font-bold text-center mt-2">
              Layanan
            </h2>
            <p className="ss:mb-24 md:mb-32 xs:-mb-32 font-light  text-xl  text-center font-outfit mt-4 sm:w-1/2 xs:w-5/6 mx-auto">
              Penawaran Professional, Fitur mewah dan bonus ebook terbaik
            </p>
          </div>
        </div>
    <div className=" flex items-center justify-center bg-white">
      <div className="flex gap-6">
        <div className="w-60 h-60 mt-10 bg-[#f9fafb] rounded shadow-lg">
              <img
                src={zoom}
                alt="Ikon SEO untuk layanan optimasi mesin pencari"
                className="w-full p-2   "
              />
        </div>
        <div className="w-80 h-80 bg-[#f9fafb] rounded shadow-lg">
             <img
                src={layananSeo}
                alt="Ikon SEO untuk layanan optimasi mesin pencari"
               className="w-full p-2   "
              />
        </div>
        <div className="w-96 h-96 -mt-10 bg-[#f9fafb] shadow-lg">
             <img
                src={website}
                alt="Ikon SEO untuk layanan optimasi mesin pencari"
               className="w-full p-2  "
              />
        </div>
      </div>
    </div>
      </section>
    </div>
  );
};

export default Layanan;
