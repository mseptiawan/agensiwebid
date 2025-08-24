import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="w-11/12 xxl:w-[1850px]  mx-auto mt-2">
        <div className="flex items-center justify-between -mt-14 ">
          <div className="flex items-center">
            <Link to="/jasa-pembuatan-website" className="text-2xl font-bold">
              <p className=" lg:w-60 w-52 xs:w-40 text-black mt-16">Agency</p>
            </Link>
          </div>
          <div className="hidden sm:block mt-14">
            <div className="ml-10 font-outfit relative ">
              <div className="flex">
                <NavLink
                  to="/jasa-pembuatan-website"
                  className={({ isActive }) =>
                    isActive
                      ? "px-3 text-black  py-2 rounded-md text-sm font-semibold border-2 border-blue-500 text-bold"
                      : "px-3 text-black py-2 rounded-md text-lg  duration-75 font-semibold font-outline-4  text-semibold "
                  }
                >
                  Beranda
                </NavLink>

                <NavLink
                  to="/portofolio-web"
                  className={({ isActive }) =>
                    isActive
                      ? "px-3 py-2 text-black  rounded-md text-sm font-semibold border-2 border-blue-500 text-bold"
                      : "px-3 py-2  text-black  rounded-md text-lg  duration-75 font-semibold font-outline-4  text-semibold "
                  }
                >
                  Portofolio
                </NavLink>

                <NavLink
                  to="/hubungi-kami"
                  className={({ isActive }) =>
                    isActive
                      ? "px-3 py-2 text-black  rounded-md text-sm font-semibold border-2 border-blue-500 text-bold"
                      : "px-3 py-2 text-black  rounded-md text-lg  duration-75 font-semibold font-outline-4  text-semibold "
                  }
                >
                  Kontak
                </NavLink>
              </div>
            </div>
          </div>

          <div className="-mr-2 mt-16 flex sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none  "
            >
              <svg
                className="h-9 w-9 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 ml-5 font-inter pt-2 pb-3 space-y-1 sm:px-3 bg-[#f9fafb] border  mx-4  rounded-lg border-[#0a0422b6] ">
            <NavLink
              to="/jasa-pembuatan-website"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-medium bg-black text-white "
                  : "block px-3 py-2 rounded-md text-base font-medium text-black"
              }
            >
              Beranda
            </NavLink>

            <NavLink
              to="/portofolio-web"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-medium bg-black text-white "
                  : "block px-3 py-2 rounded-md text-base font-medium text-black "
              }
            >
              Portofolio web
            </NavLink>

            <NavLink
              to="/hubungi-kami"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-medium bg-black text-white "
                  : "block px-3 py-2 rounded-md text-base font-medium text-black "
              }
            >
              Kontak kami
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
