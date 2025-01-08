import { useState } from "react";
import {
  codeportofolio,
  wpcrud,
  wpblog,
  codecompany,
  codelandingpage,
} from "../../../public/images/layananImage";
import { Link, NavLink } from "react-router-dom";
import { consultan } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="w-11/12 xxl:w-[1850px]  mx-auto ">
        <div className="flex items-center justify-between -mt-14 ">
          <div className="flex items-center ">
            <Link to="/" className="text-2xl font-bold">
              <img
                src={consultan}
                alt=""
                className=" lg:w-60 w-52 xs:w-40  mt-16"
              />
            </Link>
          </div>
          <div className="hidden sm:block mt-14">
            <div className="ml-10 font-poppins relative ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 rounded-md text-sm font-semibold border-2 border-blue-500 text-bold"
                    : "px-3 py-2 rounded-md text-lg  duration-100 font-semibold font-outline-4  text-semibold "
                }
              >
                Home
              </NavLink>

              <div className="relative inline-block group">
                <Link
                  to="#"
                  className="px-3 py-2 rounded-md text-lg font-semibold inline-flex items-center group  "
                >
                  Layanan
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2  " />
                </Link>
                <div className="absolute text-lg z-10 -left-20 hidden bg-white rounded-md shadow-lg group-hover:block w-[420px] h-auto p-4">
                  <div className="flex flex-wrap justify-between space-x-2 mb-4">
                    <div className="flex w-[350px] space-x-2 mb-4">
                      {[
                        { img: codeportofolio, title: "Website Portofolio" },
                        { img: codelandingpage, title: "Website Landing Page" },
                        { img: codecompany, title: "Website Company Profile" },
                        { img: wpblog, title: "Website Blog" },
                        { img: wpcrud, title: "Website CRUD" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-[#1E90FF] rounded-md shadow-md p-4 w-1/5 hover:scale-95 duration-100 flex flex-col items-center"
                        >
                          <img
                            src={item.img}
                            alt={`Card ${index + 1}`}
                            className="w-full h-42 object-cover rounded-t-md"
                          />
                          <h3 className="mt-2 text-xs text-white font-semibold text-center">
                            {item.title}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <NavLink
                to="/portofolio"
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 rounded-md text-sm font-semibold border-2 border-blue-500 text-bold"
                    : "px-3 py-2 rounded-md text-lg  duration-100 font-semibold font-outline-4  text-semibold "
                }
              >
                Portofolio
              </NavLink>

              <NavLink
                to="/kontak"
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 rounded-md text-sm font-semibold border-2 border-blue-500 text-bold"
                    : "px-3 py-2 rounded-md text-lg  duration-100 font-semibold font-outline-4  text-semibold "
                }
              >
                Kontak
              </NavLink>
            </div>
          </div>

          <div className="-mr-2 mt-16 flex sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none  "
            >
              <svg
                className="h-9 w-9"
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
          <div className="px-2 ml-5 font-inter pt-2 pb-3 space-y-1 sm:px-3 bg-[#022d58] mx-4 border rounded-lg border-[#374151]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-medium bg-[#1E90FF] "
                  : "block px-3 py-2 rounded-md text-base font-medium "
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/portofolio"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-medium bg-[#1E90FF] "
                  : "block px-3 py-2 rounded-md text-base font-medium  "
              }
            >
              Portofolio
            </NavLink>

            <NavLink
              to="/kontak"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-medium bg-[#1E90FF] h"
                  : "block px-3 py-2 rounded-md text-base font-medium  "
              }
            >
              Kontak
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
