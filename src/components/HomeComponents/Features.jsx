import {
  ssl,
  tutorial,
  seo,
  copywriting,
  domain,
  responsif,
} from "../../assets";
const Features = () => {
  return (
    <div>
      <section
        id="features"
        className=" w-11/12 xxl:w-[1850px] mx-auto px-4 space-y-6  py-8 md:py-12 lg:py-20 scale-110 -mt-10 font-poppins"
      >
        <div className="mx-auto flex  flex-col items-center space-y-4 text-center -mt-32 ss:mt-4 md:w-1/2 xs:w-3/2  ">
          <h2 className="text-3xl font-bold  mt-2">Apa yang anda dapatkan?</h2>

          <p className="max-w-[85%] leading-normal  sm:text-lg sm:leading-7">
            Selain teknologi terbaru, dukungan panjang, ada lagi alasan kenapa
            harus membuat website di MyConsultanIT
          </p>
        </div>

        <div className=" grid justify-center gap-4 xs:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 xs:mx-2 md:mx-auto">
          <div className="relative overflow-hidden rounded-lg border bg-white select-none p-2    ">
            <div className="flex  flex-col justify-between rounded-md ss:p-6 xs:p-2 ">
              <img src={domain}  alt="domainhosting" className="w-20 -mt-4 mb-4" />

              <div className="space-y-2">
                <h3 className="font-bold text-black xs:text-xs ss:text-base">
                  Domain dan hosting
                </h3>
                <p className="text-sm xs:text-[10px] ss:text-base text-black">
                  Nikmati domain  seperti .com, .online, .shop, .info,
                  .xyz, .me, dan lainnya!
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-white select-none p-2">
            <div className="flex flex-col justify-between rounded-md  ss:p-6 xs:p-2 ">
              <img src={seo} alt="seobasic"  className="w-20 -mt-4 mb-4" />
              <div className="space-y-2">
                <h3 className="font-bold text-black xs:text-xs ss:text-base">
                  SEO Basic
                </h3>
                <p className="text-sm xs:text-[10px] ss:text-base text-black">
                  Tingkatkan visibilitas di Google dengan optimasi SEO dasar
                  yang membuat website Anda mudah ditemukan.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-white select-none p-2">
            <div className="flex flex-col justify-between rounded-md ss:p-6 xs:p-2">
              <img src={responsif}  alt="responsif" className="w-20 -mt-4 mb-4" />
              <div className="space-y-2">
                <h3 className="font-bold text-black xs:text-xs ss:text-base">
                  Tampilan responsif
                </h3>
                <p className="text-sm xs:text-[10px] ss:text-base text-black">
                  Website Anda akan tampil sempurna di semua perangkat,
                  memberikan pengalaman terbaik bagi pengguna
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-white select-none p-2">
            <div className="flex flex-col justify-between rounded-md ss:p-6 xs:p-2 ">
              <img src={ssl} alt="sll"  className="w-20 -mt-4 mb-4" />
              <div className="space-y-2">
                <h3 className="font-bold xs:text-xs ss:text-base  text-black">
                  Sertifikat SSL
                </h3>
                <p className="text-sm xs:text-[10px] ss:text-base  text-black">
                  Lindungi website Anda dengan SSL untuk keamanan maksimal dan
                  jaminan kepercayaan Google.
                </p>
              </div>
            </div>
          </div>

          <div className="relative  overflow-hidden rounded-lg border bg-white select-none p-2">
            <div className="flex  flex-col justify-between rounded-md ss:p-6 xs:p-2">
              <img src={copywriting}  alt="copywriting" className="w-20 -mt-4 mb-4" />
              <div className="space-y-2">
                <h3 className="font-bold xs:text-xs ss:text-base  text-black">
                  Kalimat copywriting
                </h3>
                <p className="text-sm xs:text-[10px] ss:text-base   text-muted-foreground text-black">
                  Kami buat teks yang memikat dan mengundang pengunjung untuk
                  bertindak, seperti mengunjungi website Anda.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-white select-none p-2">
            <div className="flex flex-col justify-between rounded-md ss:p-6 xs:p-2">
              <img src={tutorial}  alt="tutorial" className="w-20 -mt-4 mb-4" />
              <div className="space-y-2">
                <h3 className="font-bold xs:text-xs ss:text-base  text-black">
                  Tutorial
                </h3>
                <p className="text-sm xs:text-[10px] ss:text-base   text-black">
                  Layaknya tour guide profesional, kami memandu Anda menuju
                  solusi website yang sempurna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
