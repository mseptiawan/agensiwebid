import { misi, visi } from "../../assets";
const Goal = () => {
  return (
    <div>
      <section className="font-outfit py-16 xl:py-32 scale-110 mt-4   mx-auto mb-10">
        <div className=" xs:w-5/6   md:w-4/6 ss:w-5/6  xxl:w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className=" text-3xl font-bold text-left mt-2  ">Visi Misi</h2>
          <div className=" mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2  xs:grid-cols-1">
          
            <div className="bg-white text-black rounded-lg  p-4">
              <div className="flex items-center justify-center h-12 w-20 rounded-md  text-white">
                <img src={visi}  alt="Ikon untuk melihat visi perusahaan" className="" />
              </div>
              <div className="mt-6 ">
                <h3 className="text-lg font-bold  ">Visi</h3>
                <p className="mt-2 xs:text-normal ">
                  Menjadi penyedia jasa pembuatan website yang paling inovatif
                  dan terus berkelanjutan pada tahun 2030
                </p>
              </div>
            </div>
            <div className="bg-[#EAFAEA] text-black rounded-lg  p-4">
              <div className="flex items-center justify-center h-12 w-20 rounded-md  text-white">
                <img src={misi} alt="Ikon misi untuk menggambarkan tujuan atau misi perusahaan kami" className="" />
              </div>
              <div className="mt-6 ">
                <h3 className=" text-lg font-bold ">Misi</h3>
                <p className="mt-2  mb-4 ">Misi AgensiWeb mencakup :</p>

                <div className="flex flex-col  space-y-4 ">
                  <div className="flex items-start">
                    <span className="mr-2">1.</span>
                    <p>
                      Menjadi penyedia layanan yang paling murah sejagad raya
                    </p>
                  </div>
                  <div className="flex items-start ">
                    <span className="mr-2">2.</span>
                    <p>Berusaha terus update mengenai perkembangan teknologi</p>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">3.</span>
                    <p>
                      Membantu UMKM anda, sehingga dapat bersaing pada era saat
                      ini
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Goal;
