import { useState, useRef, useEffect } from "react";
import { layananSeo, website, zoom, sistemAnalis } from "../../assets";

const Layanan = () => {
  return (
    <div className="w-full mx-auto  text-lg  font-outfit " id="paket">
      <section className=" ">
        <div className="">
          <div className="">
            <h2 className="text-3xl font-bold text-center mt-2">Layanan</h2>
            <p className="ss:mb-4 md:mb-4 xs:-mb-4 font-light  text-xl  text-center font-outfit mt-4 sm:w-1/2 xs:w-5/6 mx-auto">
              Penawaran Professional, Fitur mewah
            </p>
          </div>
        </div>
        <div className="p-14 flex items-center justify-center bg-white ">
          <div className="grid gap-6 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="w-full  mt-10 bg-[#f9fafb] rounded shadow-lg">
              <img
                src={zoom}
                alt="Ikon konsultasi online"
                className="w-full p-2"
              />
              <span className="p-4 font-bold ">Harga 100.000/Jam</span>
              <p className="p-4">
                Layanan konsultasi online untuk membantu peningkatan layanan
                bisnis serta memberi arahan bagi calon mahasiswa yang ingin
                berkarier di bidang IT.
              </p>
              
            </div>

            <div className="w-full  bg-[#f9fafb] rounded shadow-lg">
              <img
                src={layananSeo}
                alt="Ikon SEO untuk layanan optimasi mesin pencari"
                className="w-full p-2"
              />
                 <span className="p-4 font-bold ">Harga Mulai 500.000</span>  
              <p className="p-4">
                Kami membantu mengoptimalkan website Anda agar dapat muncul pada
                peringkat teratas mesin pencari, sehingga meningkatkan
                visibilitas dan potensi kunjungan dari calon pelanggan.
              </p>
            </div>

            <div className="w-full  bg-[#f9fafb] shadow-lg">
              <img
                src={sistemAnalis}
                alt="Ikon sistem analis"
                className="w-full p-2"
              />
                 <span className="p-4 font-bold ">Harga Mulai 2.000.000</span>
              <p className="p-4">
                Layanan untuk mempelajari proses bisnis Anda, mengidentifikasi
                kebutuhan, serta merancang solusi sistem yang tepat sebelum
                masuk ke tahap pengembangan.
              </p>
            </div>

            <div className="w-full  bg-[#f9fafb] shadow-lg">
              <img
                src={website}
                alt="Ikon layanan pembuatan website"
                className="w-fu
                ll p-2"
              />
                 <span className="p-4 font-bold ">Harga Mulai 500.000</span>
              <p className="p-4">
                Layanan untuk mewujudkan sistem atau website sesuai hasil
                analisis kebutuhan atau ketentuan dari anda, mulai dari desain,
                pengembangan, hingga implementasi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Layanan;
