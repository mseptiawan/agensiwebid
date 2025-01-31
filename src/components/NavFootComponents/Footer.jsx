import { instagram, linkdin, emailicon, whatsapp, angle } from "../../assets";
import emailjs from "emailjs-com";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Footer = () => {
  emailjs.init("KA1948RXTL38AVhqi");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); //

  const navigate = useNavigate();

  const handleNavigation = () => {
    window.scrollTo(0, 0);
    navigate("/jasa-pembuatan-website");
  };

  return (
    <div className=" xs:bg-bg-foot2  lg:bg-bg-foot3  bg-cover    bg-[#000000] ">
      <footer className="w-full font-outfit xs:text-medium md:text-lg ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 py-14 lg:grid-cols-8">
            <div className="mb-0 col-span-full lg:col-span-3 ">
              <a className="flex mt-2">
                <p className=" w-52 text-2xl font-bold">| AgensiWeb</p>
              </a>
              <p className="mt-6   ">
                Layanan penyedia jasa pembuatan website landing page, website
                informasi seperti company profile dan informasi produk anda.
                dengan menjadi mitra anda ayo kita menuju kesuksesan bersama.
              </p>
            </div>
            <div className="w-full text-center lg:w-auto lg:text-left col-span-full sm:col-span-4 md:col-span-4 lg:col-span-2 ">
              <div className="flex">
                <h4 className="text-2xl  font-medium mb-7">| Kontak Kami</h4>
              </div>
              <ul className=" transition-all duration-500">
                <div className="flex">
                  <li className="mb-6 ">mseptiawan017@gmail.com</li>
                </div>
                <div className="flex">
                  <li className="mb-6 ">+62 877-8903-5813</li>
                </div>
                <div className="flex text-left">
                  <li className="mb-6  ">
                    Suka Maju, Kec. Sako, Kota Palembang, Sumatera Selatan,
                    Indonesia.
                  </li>
                </div>
              </ul>
            </div>
            <div className="w-full text-center lg:w-auto lg:text-left col-span-full sm:order-last sm:col-span-4 md:col-span-4 lg:order-none lg:col-span-1">
              <div className="flex">
                <h4 className="text-2xl font-medium mb-7">| Link cepat</h4>
              </div>
              <ul className=" transition-all duration-500  ">
                <li className="mb-6">
                  <div className="flex space-x-2">
                    <img src={angle} alt="" className="w-4 h-6 filter invert" />

                    <NavLink
                      to={"/jasa-pembuatan-website"}
                      onClick={handleNavigation}
                    >
                      Beranda
                    </NavLink>
                  </div>
                </li>
                <li className="mb-6">
                  <div className="flex space-x-2">
                    <img src={angle} alt="" className="w-4 h-6 filter invert" />
                    <a href="/jasa-pembuatan-website#paket">Pilihan website</a>
                  </div>
                </li>
                <li className="mb-6">
                  <div className="flex space-x-2">
                    <img src={angle} alt="" className="w-4 h-6 filter invert" />
                    <NavLink to={"/portofolio-web"}>Portofolio web</NavLink>
                  </div>
                </li>
                <li className="sm:mb-6">
                  <div className="flex space-x-2">
                    <img src={angle} alt="" className="w-4 h-6 filter invert" />
                    <NavLink to={"/hubungi-kami"}>Kontak kami</NavLink>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-full text-center lg:w-auto lg:text-left col-span-full sm:col-span-4 md:col-span-4 lg:col-span-2 ">
              <div className="flex">
                <div className="flex">
                  <h4 className="text-2xl text-center  font-medium mb-7 lg:text-left">
                    | Sosial Media
                  </h4>
                </div>
              </div>
              <div className="grid grid-cols-4 ">
                <a
                  href="https://www.instagram.com/agensiwebid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-16 h-16 bg-white rounded-xl scale-75 hover:scale-100 duration-75"
                >
                  <img
                    src={instagram}
                    alt="Ikon Instagram untuk mengunjungi profil kami"
                    className="w-14 filter invert"
                  />
                </a>

                <a
                  href="https://wa.me/6287789035813?text=Halo%20kak,%20saya%20tertarik%20untuk%20membuat%20website%20di%20agensiweb%20😁"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-16 h-16 bg-white rounded-lg scale-75 hover:scale-100 duration-75"
                >
                  <img
                    src={whatsapp}
                    alt="Ikon WhatsApp untuk menghubungi kami"
                    className="w-14 filter invert"
                  />
                </a>

                <a
                  href="mailto:mseptiawan017@gmail.com?subject=Tertarik%20untuk%20membuat%20website&body=Halo,%20saya%20tertarik%20untuk%20membuat%20website%20di%20agensiweb%20😁"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-16 h-16 bg-white rounded-lg scale-75 hover:scale-100 duration-75"
                >
                  <img
                    src={emailicon}
                    alt="Ikon email untuk menghubungi kami"
                    className="w-14 filter invert"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/m-septiawan-771305246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-16 h-16 bg-white rounded-lg scale-75 hover:scale-100 duration-75"
                >
                  <img
                    src={linkdin}
                    alt="Ikon LinkedIn untuk mengunjungi profil kami"
                    className="w-14 filter invert"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="py-7 border-t border-gray-200">
            <div className="flex  justify-center text-center flex-col  lg:flex-row">
              <span className="   ">
                Copyright © 2025<a href=""> agensiweb</a>, Powered by Agensiweb.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
