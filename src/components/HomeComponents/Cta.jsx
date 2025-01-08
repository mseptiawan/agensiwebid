import { clickicon } from "../../assets";

const Cta = () => {
  return (
    <div>
      <div className=" xs:w-5/6 ss:w-1/2 font-poppins mx-auto mt-12 px-4 text-center mb-32 scale-125 ">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="sm:text-4xl font-bold xs:text-2xl  mt-2 mb-6">
            Buat Websitemu Sekarang!
          </h1>
          <p className="px-4 mb-8 leading-relaxed sm:text-xl xs:text-base">
            Dengan pengalaman yang kami miliki. Kami siap mewujudkan Website
            Impian Anda. Mulai Sekarang
          </p>

          <div className=" hover:scale-95 duration-100">
            <button
              onClick={() =>
                (window.location.href =
                  "https://wa.me/6287789035813?text=Halo,%20saya%20tertarik%20untuk%20membuat%20website.")
              }
              className="relative  bg-white text-black font-bold shadow-xl  sm:px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300   xs:px-2  xs:text-sm sm:text-lg"
            >
              Hubungi Kami Sekarang!
              <p>
                <img
                  src={clickicon}
                  alt=""
                  className="absolute  w-8 top-6 right-0"
                />
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
