import { ssl, buku, seo, copywriting, domain, responsif } from "../../assets";
const WhatYouGet = () => {
  return (
    <div className="">
      <section
        id="features"
        className=" w-11/12 xxl:w-[1850px] mx-auto px-4 space-y-6  py-8 md:py-12 lg:py-20 scale-110 xs:mt-32  ss:mt-20 font-outfit"
      >
        <div className="mx-auto flex  flex-col items-center space-y-4 text-center -mt-32 ss:mt-4 md:w-1/2 xs:w-3/2  mb-14">
          <h2 className="text-3xl font-bold  mt-2 ">Apa yang anda dapatkan?</h2>

          <p className="max-w-[85%] leading-normal  sm:text-lg sm:leading-7 ">
            Yuk kita ringkas apa saja yang anda peroleh dari layanan kami
          </p>
        </div>

        <div className=" grid justify-center gap-4 xs:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 xs:mx-2 md:mx-auto">
          <div className="relative overflow-hidden rounded-lg border bg-white select-none p-2    ">
            <div className="flex  flex-col justify-between rounded-md ss:p-6 xs:p-2 ">
              <img
                src={domain}
                alt="Ikon domain untuk layanan registrasi domain"
                className="w-20 -mt-4 mb-4"
              />

              <div className="space-y-2">
                <h3 className="font-bold text-black xs:text-xs ss:text-base">
                  Domain dan hosting
                </h3>
                <h4 className="text-black text-sm xs:text-[10px] ss:text-base">
                  Punya banyak pilihan domain seperti
                </h4>
                <p className="text-sm xs:text-[10px] ss:text-base text-black grid grid-cols-2 sm:grid-cols-2 ">
                  <span>&#10004; .com</span>
                  <span>&#10004; .online</span>
                  <span>&#10004; .shop</span>
                  <span>&#10004; .info</span>
                  <span>&#10004; .xyz</span>
                  <span>&#10004; .me</span>
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-[#f9fafb] select-none p-2">
            <div className="flex flex-col justify-between rounded-md  ss:p-6 xs:p-2 ">
              <img
                src={seo}
                alt="Ikon SEO untuk layanan optimasi mesin pencari"
                className="w-20 -mt-4 mb-4"
              />
              <div className="space-y-2">
                <h3 className="font-bold text-black xs:text-xs ss:text-base">
                  SEO Premium
                </h3>
                <p className="text-sm xs:text-[10px] ss:text-base text-black">
                  Dengan SEO Basic  maka akan membuat website anda terindek oleh Google
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-white select-none p-2">
            <div className="flex flex-col justify-between rounded-md ss:p-6 xs:p-2">
              <img
                src={responsif}
                alt="Ikon responsif untuk desain yang menyesuaikan layar"
                className="w-20 -mt-4 mb-4"
              />
              <div className="space-y-2">
                <h3 className="font-bold text-black xs:text-xs ss:text-base">
                  Tampilan responsif
                </h3>
                <p className="text-sm xs:text-[10px] ss:text-base text-black">
                  Website akan tampil sempurna di semua perangkat baik pada
                  dekstop, tablet, dan mobile
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-[#f9fafb]  select-none p-2">
            <div className="flex flex-col justify-between rounded-md ss:p-6 xs:p-2 ">
              <img
                src={ssl}
                alt="Ikon SSL untuk memastikan keamanan situs web"
                className="w-20 -mt-4 mb-4"
              />
              <div className="space-y-2">
                <h3 className="font-bold xs:text-xs ss:text-base  text-black">
                  Sertifikat SSL
                </h3>
                <p className="text-sm xs:text-[10px] ss:text-base  text-black">
                  Melindungi website dari serangan luar yang berpotensi
                  menganggu kerja website
                </p>
              </div>
            </div>
          </div>

          <div className="relative  overflow-hidden rounded-lg border bg-white select-none p-2">
            <div className="flex  flex-col justify-between rounded-md ss:p-6 xs:p-2">
              <img
                src={copywriting}
                alt="Ikon copywriting untuk layanan penulisan konten"
                className="w-20 -mt-4 mb-4"
              />
              <div className="space-y-2">
                <h3 className="font-bold xs:text-xs ss:text-base  text-black">
                  Teks copywriting
                </h3>
                <p className="text-sm xs:text-[10px] ss:text-base   text-muted-foreground text-black">
                  Pembuatan website dilakukan mencakup kalimat copywriting yang
                  sangat penting guna membuat produk atau jasa anda mudah
                  closing
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-[#f9fafb]  select-none p-2">
            <div className="flex flex-col justify-between rounded-md ss:p-6 xs:p-2">
              <img
                src={buku}
                alt="Bonus 4 Ebook Terbaik "
                className="w-20 -mt-4 mb-4"
              />
              <div className="space-y-2">
                <h3 className="font-bold xs:text-xs ss:text-base  text-black">
                  Bonus 4 Ebook Terbaik
                </h3>

                <div className="flex flex-col text-black  text-sm xs:text-[10px] ss:text-base">
                  <div className="flex items-start">
                    <span className="mr-[10px]">1.</span>
                    <p>Kinerja bisnis UMKM di era digital</p>
                  </div>
                  <div className="flex items-start ">
                    <span className="mr-2">2.</span>
                    <p>Kewirausahaan di era digital</p>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">3.</span>
                    <p>Belajar pemrograman dasar</p>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">4.</span>
                    <p>Kecerdasan Financial</p>
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

export default WhatYouGet;
