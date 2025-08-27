import { klikIkon } from "../../assets";

const Ajakan = () => {
  return (
    <div>
      <div className=" xs:w-5/6 ss:w-1/2 font-outfit mx-auto mt-12 px-4 text-center mb-32 scale-125 ">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="sm:text-4xl font-bold xs:text-2xl  mt-2 mb-1">
            Buat Websitemu Sekarang!
          </h1>
          <h1 className="sm:text-2xl font-bold xs:text-ss  mb-4 ">
            #Bisnis <span className="text-[#0118D8]">maju</span> pakai{" "}
            <span className="text-red-600">digital</span>
          </h1>
          <p className="px-4 mb-8 leading-relaxed sm:text-xl xs:text-base">
            Dengan pengalaman yang kami miliki. Kami siap mewujudkan Website
            Impian Anda. Mulai Sekarang
          </p>

          <div className=" ">
            <button
              onClick={() =>
                (window.location.href =
                  "https://wa.me/6287789035813?text=Halo%20kak,%20saya%20tertarik%20untuk%20membuat%20website%20di%20agensiweb%20😀")
              }
              className="relative hover:scale-95 duration-75  bg-white text-black font-bold shadow-xl  sm:px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300   xs:px-2  xs:text-sm sm:text-lg"
            >
              Buat Website
              <p>
                <img
                  src={klikIkon}
                  alt="Ikon klik untuk melakukan tindakan"
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

export default Ajakan;
