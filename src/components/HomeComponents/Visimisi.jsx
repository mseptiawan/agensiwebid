import {
  misi,
  value,
  visi,
} from "../../assets";
const Visimisi = () => {
  return (
    <div>
      <section className="font-poppins py-16 xl:py-32 scale-110 mt-4   mx-auto">
        <div className=" xs:w-5/6   md:w-4/6 ss:w-5/6  xxl:w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className=" text-3xl font-bold text-left mt-2  ">Visi Misi</h2>
          <div className=" mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3  xs:grid-cols-1">
            <div className="bg-white text-black rounded-lg  p-4">
              <div className="flex items-center justify-center h-12 w-20 rounded-md  text-white">
                <img src={misi}  alt="misi" className="" />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-bold ">Misi</h3>
                <p className="mt-2 text-base xs:text-xs ">
                  Menyediakan layanan berkualitas seperti pembuatan website
                  landing page, portofolio, blog, dan WordPress, dengan fokus
                  pada kepuasan klien dan inovasi.
                </p>
              </div>
            </div>
            <div className="bg-white text-black rounded-lg  p-4">
              <div className="flex items-center justify-center h-12 w-20 rounded-md  text-white">
                <img src={value}  alt="nilai" />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-bold ">Nilai</h3>
                <p className="mt-2 text-base xs:text-xs">
                  Kepercayaan, inovasi, efisiensi, dan komitmen untuk memberikan
                  solusi IT yang tepat guna dan berdampak positif.
                </p>
              </div>
            </div>
            <div className="bg-white text-black rounded-lg  p-4">
              <div className="flex items-center justify-center h-12 w-20 rounded-md  text-white">
                <img src={visi}  alt="visi" className="" />
              </div>
              <div className="mt-6 ">
                <h3 className="text-lg font-bold  ">Visi</h3>
                <p className="mt-2 text-base xs:text-xs ">
                  Menjadi mitra IT terpercaya yang memberikan solusi inovatif,
                  efektif, dan berkelanjutan untuk membantu klien mencapai
                  keberhasilan digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visimisi;
