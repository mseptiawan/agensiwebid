import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#004aad] text-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 ">
        <div className="bg-[#0a0422b6] rounded-lg">
          <div className="max-w-md w-full space-y-8 text-center ">
            <div className="mb-8">
              <h2 className="mt-6 text-6xl font-extrabold  ">404</h2>
              <p className="mt-1 text-3xl font-bold  ">Page not found</p>
              <p className="mt-2 text-sm  ">Maaf, halaman tidak tersedia</p>
            </div>
            <div className="mt-2">
              <NavLink
                to="/jasa-pembuatan-website"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#005DFF]  focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Kembali ke beranda
              </NavLink>
            </div>
          </div>
          <div className="mt-2 w-full max-w-2xl">
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-gray-300 "></div>
              </div>
              <div className="relative flex justify-center ">
                <span className="px-2  text-sm text-center w-5/6  mb-6">
                  Jika anda menemukan kesalahan, Mohon kita kami. Terima kasih
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
