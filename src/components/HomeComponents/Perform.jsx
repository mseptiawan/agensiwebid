import { dukungan, keamanan, pengalaman, teknologiterbaru } from "../../assets";
const Perform = () => {
  return (
    <div>
      <div className=" w-11/12 xxl:w-[1850px] mx-auto   rounded-lg rounded-tl-[150px] rounded-bl-3xl font-poppins ">
        <div className="flex flex-col items-center md:mt-10 -mt-14 w-2/3 mx-auto justify-center text-center space-y-4  bg-cover bg-center ">
          <h1 className="text-3xl font-bold    ">Mengapa di MyConsultanIT?</h1>
          <h3 className="text-lg font-medium ">
            Bersama MyConsultanIT, Website Anda, Kunci Kesuksesan Anda.
          </h3>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 list-none p-0 m-0 scale-75 mx-auto xs:-mt-60 md:-mt-0 md:w-full  ss:grid-cols-2 ss:-mt-20">
          <li className="p-4 rounded-lg transition-colors duration-200  ">
            <article className="space-y-2">
              <img
                src={teknologiterbaru}
                alt="teknologiterbaru"
                className="-mt-28 mb-10 "
              />
              <h3 className="text-xl font-bold">Teknologi terbaru.</h3>
              <p className="text-lg font-medium ">
                "Dengan MyConsultanIT, Anda akan selalu berada di garis depan
                inovasi. Kami menggunakan teknologi terbaru untuk memastikan
                website Anda tidak hanya relevan, tetapi juga unggul di pasar
                yang terus berkembang."
              </p>
            </article>
          </li>
          <li className="p-4  rounded-lg transition-colors duration-200  ">
            <article className="space-y-2">
              <img
                src={pengalaman}
                alt="pengalaman"
                className="-mt-28  mb-10"
              />
              <h3 className="text-xl font-bold">Berpengalaman.</h3>
              <p className="text-lg font-normal  ">
                "Kami telah bekerja dengan berbagai bisnis dari berbagai
                industri, memberikan solusi web yang efektif dan teruji.
                Pengalaman kami adalah aset yang akan membantu Anda mencapai
                tujuan lebih cepat dan lebih efisien."
              </p>
            </article>
          </li>
          <li className="p-4  rounded-lg transition-colors duration-200  ">
            <article className="space-y-2">
              <img src={keamanan} alt="keamanan" className="-mt-28 mb-10 " />
              <h3 className="text-xl font-bold">Keamanan.</h3>
              <p className="text-lg font-normal  ">
                "Keamanan website Anda adalah prioritas utama kami. Dengan
                MyConsultanIT, Anda bisa tenang, mengetahui bahwa setiap data
                dan informasi yang Anda miliki terlindungi dengan sistem
                keamanan canggih."
              </p>
            </article>
          </li>
          <li className="p-4  rounded-lg transition-colors duration-200  ">
            <article className="space-y-2">
              <img src={dukungan} alt="dukungan" className="-mt-28 mb-10 " />
              <h3 className=" font-bold text-xl">Dukungan jangka panjang.</h3>
              <p className="text-lg font-normal  ">
                "Kami tidak hanya membangun website, tetapi juga menjaga
                hubungan jangka panjang. Dukungan berkelanjutan kami memastikan
                website Anda terus berkembang dan berfungsi optimal, meski waktu
                berjalan."
              </p>
            </article>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Perform;
