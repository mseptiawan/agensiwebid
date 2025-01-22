import { useState, useRef, useEffect } from "react";
import { tanya, down } from "../../assets";

const WebsiteType = () => {
  const [activeTooltip, setActiveTooltip] = useState(null); // Track tooltip state
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const keterangan = "(Home, About us, etc)";
  const tooltipRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setActiveTooltip(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleTooltip = (index) => {
    setActiveTooltip(activeTooltip === index ? null : index);
  };

  // Handle click outside tooltip
  const features = [
    {
      text: "Pengerjaan 7 hari",
      tooltip: "Pengerjaan paling lama diselesaikan dalam 7 hari.",
    },
    {
      text: "Free Domain .Com, etc",
      tooltip:
        "Selain domain dot com, anda juga bisa memilih domain lain seperti dot id atau dot me. harga nanti kita sesuaikan.",
    },
    {
      text: "Dapat email bisnis",
      tooltip:
        "Kamu dapat membuat email dari domain yang telah anda pilih, misal domain anda agensi.com, maka anda akan dapat email namaanda@agensi.com.",
    },
    {
      text: "Hingga 10 Halaman",
      tooltip:
        "Anda dapat membuat sampai 10 Halaman!, berikan saja halaman tambahan apa yang ingin anda butuhkan.",
    },
    {
      text: "Free Hosting",
      tooltip:
        "Untuk saat ini kita menggunakan shared hosting, namun kedepannya kita akan beralih ke VPS.",
    },
    {
      text: "Sertifikasi SSL",
      tooltip:
        "Fitur keamananan yang akan menjaga websitemu tetap stabil tanpa gangguan.",
    },
    {
      text: "Plugin premium elementor Pro",
      tooltip:
        "Plugin ajaib yang akan membuat website anda tampak elegan dan menarik.",
    },
    {
      text: "Bonus 4 ebook terbaik",
      tooltip:
        "Ebook tentang usaha bisnis yang menghadapi era digital, lalu panduan pemrograman dasar dan buku edukasi tentang kecerdasan finansial.",
    },
    {
      text: "Terkait biaya Tambahan blog/artikel untuk Seo",
      tooltip:
        "Jika website anda ingin ada blog maka diminta untuk membayar biaya tambahan sebesar Rp. 300.000 Rupiah.",
    },

    {
      text: "Tedapat google map",
      tooltip: "Bertujuan agar pengunjung website tau lokasi usaha anda.",
    },

    // Detail tambahan yang akan ditampilkan setelah tombol diklik
    {
      text: "Fitur subscriber newsletter",
      tooltip:
        "Berguna sebagai upaya untuk mengumpulkan informasi pengunjung untuk penawaran lebih lanjut.",
    },
    {
      text: "Free Maintenance",
      tooltip:
        "Sebagai upaya untuk mempertahankan website anda agar tetap berjalan.",
    },
    {
      text: "Terintegrasi WhatsApp",
      tooltip: "Integrasi untuk menghubungkan ikon WhatsApp dengan ini pengunjung dapat menghubungi anda.",
    },
    
    {
      text: "Dashboard Wordpress",
      tooltip: "Dashboard untuk mengelola konten berbasis Wordpress.",
    },
    {
      text: "Terintegrasi E-Commerce",
      tooltip: "Terdapat ikon marketplace yang nantinya bisa pengunjung klik dan langsung menuju ke online shop anda bertujuan untuk mempermudah penjualan.",
    },
  ];

  return (
    <div className="w-full mx-auto  text-[10px] font-outfit " id="paket">
      <section className=" ">
        <div className="">
          <div className="">
            <h2 className="text-3xl font-bold text-center mt-2">
              Pilihan Website
            </h2>
            <p className="ss:mb-24 md:mb-32 xs:-mb-32 font-light  text-xl  text-center font-outfit mt-4 sm:w-1/2 xs:w-5/6 mx-auto">
              Harga murah, Fitur mewah dan bonus ebook terbaik, wahh banyak yaa,
              Pilih sekarang!
            </p>
          </div>
          <div className="  xs:scale-[.9] sm:scale-100 text-lg  -mt-28">
            <div className="ss:flex xs:flex-none justify-center items-center xs:space-x-0 ss:space-x-4 ">
              <div className="xs:mt-36 md:mt-44 flex flex-col xs:w-full sm:max-w-sm p-2 text-center border-4 border-white h-[620px] rounded-lg shadow duration-75 bg-white text-black ">
                <h3 className="text-xl bg-[#005DFF] text-white -mx-[13px] h-20 font-bold rounded-t-3xl -mt-[50px] p-2 flex justify-center items-center">
                  Landing Page
                </h3>
                <h3 className="mb-4 font-bold"></h3>
                <p>
                  Landing Page adalah 1 halaman web yang bertujuan untuk
                  marketing agar orang dapat melihat jasa atau produk yang anda
                  tawarkan
                </p>
                <div className="flex mb-4">
                  <span className="mr-2 text-left line-through text-lg font-tight mt-6">
                    <span>Rp</span> 990.000
                  </span>
                  <span className="bg-[#005DFF] text-white rounded-xl h-10 mt-4 p-4 flex items-center justify-center font-bold text-lg">
                    Diskon 30,30%
                  </span>
                </div>
                <div className="flex items-baseline justify-center my-8 -mt-0">
                  <span className="mr-2 sm:text-3xl lg:text-4xl xs:text-2xl font-extrabold">
                    <span className="text-base">Rp </span> 690.000
                  </span>
                  <span>Setahun</span>
                </div>
                <span className="-mt-6 mb-6 text-center font-semibold text-sm">
                  Perpanjangan 500.000 pertahun
                </span>

                <ul role="list" className="mb-8 space-y-4 text-left flex-grow">
                  {[
                    {
                      text: "Pengerjaan 3 hari",
                      tooltip:
                        "Pengerjaan paling lama diselesaikan dalam 3 hari.",
                    },

                    {
                      text: " 1 Halaman",
                      tooltip:
                        "Landing page hanya perlu 1 Halaman yang to the point.",
                    },

                    {
                      text: "Pemasangan facebook pixel",
                      tooltip:
                        "Dengan menggunakan Facebook Pixel, Anda dapat melacak perilaku pengunjung di situs Anda, mengukur konversi, dan mengoptimalkan kampanye iklan untuk meningkatkan penjualan.",
                    },
                    {
                      text: "Fitur Pop up",
                      tooltip:
                        "Menggunakan fitur Pop-up memungkinkan Anda untuk menarik perhatian pengunjung dengan tawaran khusus, formulir pendaftaran, atau informasi penting, sehingga meningkatkan interaksi dan konversi.",
                    },
                  ].map((item, index) => (
                    <li
                      key={index + 20}
                      className="flex items-center space-x-3 relative"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item.text}</span>

                      <img
                        src={tanya}
                        alt=""
                        className="bg-black w-4 rounded-full "
                        onClick={() => toggleTooltip(index + 20)}
                      />

                      {activeTooltip === index + 20 && (
                        <div
                          ref={tooltipRef}
                          className="absolute bg-white border border-gray-300 rounded-lg shadow-lg p-2 -top-10 left-8 z-50"
                        >
                          {item.tooltip}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href="https://wa.me/6287789035813?text=Halo%20kak,%20saya%20tertarik%20untuk%20membuat%20website%20di%20agensiwebid%20😀"
                    className="bg-[#005DFF] shadow-2xl text-white focus:ring-4 focus:ring-purple-200 font-bold rounded-lg text-xl px-5 py-3 text-center dark: dark:focus:ring-purple-900 h-14 flex justify-center items-center"
                  >
                    Pesan
                  </a>
                </div>
              </div>

              <div className="xs:mt-16 flex flex-col xs:w-full justify-center sm:max-w-sm p-2 text-center border-4 border-white rounded-lg shadow duration-75 bg-white text-black -mt-20">
                <h3 className="mb-4 text-xl bg-[#005DFF] text-white -mx-[13px] h-20 font-bold rounded-t-3xl -mt-[50px] p-2 flex justify-center items-center">
                  Website Informasi
                </h3>
                <p>
                  Website ini sangat cocok untuk company profile yang
                  memperlihatkan informasi tentang detail perusahaan dan
                  informasi tentang produk
                </p>
                <div className="flex mb-4">
                  <span className="mr-2 text-left line-through text-lg font-tight mt-6">
                    <span>Rp</span> 1.690.000
                  </span>
                  <span className="bg-[#005DFF] text-white rounded-xl h-10 mt-4 p-4 flex items-center justify-center font-bold text-lg">
                    Diskon 47,32%
                  </span>
                </div>
                <div className="flex items-baseline justify-center my-8 -mt-0">
                  <span className="mr-2 sm:text-3xl lg:text-4xl xs:text-2xl font-extrabold">
                    <span className="text-base">Rp </span> 890.000
                  </span>
                  <span>Setahun</span>
                </div>
                <span className="-mt-6 mb-6 text-center font-semibold text-sm">
                  Perpanjangan 800.000 pertahun
                </span>

                {/* hp */}
                <ul
                  role="list"
                  className="mb-8 space-y-4 text-left xs:block ss:hidden"
                >
                  {features.slice(0).map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-3 relative"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item.text}</span>
                      <img
                        src={tanya}
                        alt=""
                        className="bg-black w-4 rounded-full "
                        onClick={() => toggleTooltip(index)}
                      />

                      {activeTooltip === index && (
                        <div
                          ref={tooltipRef}
                          className="absolute bg-white border border-gray-300 rounded-lg shadow-lg p-2 -top-10 left-8 z-50"
                        >
                          {item.tooltip}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                <ul
                  role="list"
                  className="mb-8 space-y-4 text-left xs:hidden ss:block"
                >
                  {features.slice(0, 4).map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-3 relative"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item.text}</span>
                      <img
                        src={tanya}
                        alt=""
                        className="bg-black w-4 rounded-full "
                        onClick={() => toggleTooltip(index)}
                      />

                      {activeTooltip === index && (
                        <div
                          ref={tooltipRef}
                          className="absolute bg-white border border-gray-300 rounded-lg shadow-lg p-2 -top-10 left-8 z-50"
                        >
                          {item.tooltip}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-center mt-4 xs:hidden ss:block">
                  <button
                    onClick={toggleDetails}
                    className="bg-[#0a0422b6] text-white rounded-lg px-6 py-2 font-normal flex items-center space-x-2 mb-6"
                  >
                    <img src={down} alt="" className="w-6" />

                    <span>
                      {showDetails
                        ? "Tutup Spesifikasi"
                        : "Lihat Spesifikasi Lengkap"}
                    </span>
                  </button>
                </div>

                {showDetails && (
                  <ul className="mt-4 space-y-4 text-left mb-6 xs:hidden ss:block">
                    {features.slice(8).map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-3 relative"
                      >
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{item.text}</span>
                        <img
                          src={tanya}
                          alt=""
                          className="bg-black w-4 rounded-full "
                          onClick={() => toggleTooltip(index + 9)}
                        />

                        {activeTooltip === index + 9 && (
                          <div
                            ref={tooltipRef}
                            className="absolute bg-white border border-gray-300 rounded-lg shadow-lg p-2 -top-10 left-8 z-50"
                          >
                            {item.tooltip}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href="https://wa.me/6287789035813?text=Halo%20kak,%20saya%20tertarik%20untuk%20membuat%20website%20di%20agensiwebid%20😀"
                  className="bg-[#005DFF] shadow-2xl text-white focus:ring-4 focus:ring-purple-200 font-bold rounded-lg text-xl px-5 py-3 text-center dark:dark:focus:ring-purple-900 h-14 flex justify-center items-center"
                >
                  Pesan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteType;
