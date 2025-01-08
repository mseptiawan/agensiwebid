const Paket = () => {
  return (
    <div className="w-11/12 mx-auto scale-75 " id="paket">
      <section className=" ">
        <div className="max-w-screen-xl px-4 xl:mt-20 lg:-mt-20 mx-auto lg:px-6">
          <div className="max-w-screen-md mx-auto xs:-mt-[400px] ss:-mt-[400px] md:-mt-[100px] text-center md:mb-[300px]  xs:mb-[450px] scale-150 ">
            <h2 className="text-3xl font-bold  mt-2">Pilihan paket</h2>
            <p className="mb-12 font-light  sm:text-xl  font-poppins mt-4 sm:w-1/2 xs:w-5/6 mx-auto">
              Kami menyediakan beberapa tingkatan paket, tunggu apa lagi?
              sesuaikan dengan kebutuhanmu!
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 xs:scale-[1.30]">
            {/* Starter Plan */}
            <div
              className="flex flex-col  max-w-lg p-6 mx-auto text-center text-black   border border-gray-100 rounded-lg shadow  xl:p-8 bg-white   duration-300 md:scale-[0.90]  scale-110 xs:mb-36 xs:mt-[600px] md:mt-0 md:mb-0 
            "
            >
              <h3 className="mb-4 text-2xl font-bold">Basic</h3>
              <p className="font-bold  sm:text-lg  text-black">
                Website portofolio dan landing page sederhana menggunakan
                WordPress, mudah dikelola, responsif, dan hemat biaya.
              </p>
              <div className="flex mb-4">
                <span className="mr-2 text-left  line-through text-lg font-tight  mt-6">
                  <span>Rp</span> 800.000
                </span>
                <span className="bg-[#00e649]   text-white rounded-xl h-10 mt-4 p-4 flex items-center justify-center font-bold">
                  Diskon 37.5%
                </span>
              </div>
              <div className="flex items-baseline justify-center my-8 -mt-0 ">
                <span className="mr-2 sm:text-3xl lg:text-4xl font-extrabold">
                  <span className="text-base">Rp </span>
                  500.000
                </span>
                <span>Setahun</span>

                <span className="text-gray-500 "></span>
              </div>
              <span className="-mt-6 mb-6 text-center font-semibold text-sm ">
                Perpanjangan 400.000 pertahun
              </span>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="">
                    Lama pengerjaan :<span> 3 hari kerja </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    dapat domain domain .com .online .shop .info .xyx .me
                    .support .live .org .my.id .site .blog .click .pro
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Terdapat email bisnis </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>5 Halaman</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Hosting 1.5 GB
                    <span className="font-semibold"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    SSL
                    <span className="font-semibold"></span>
                  </span>
                </li>

                <p className="text-lg ml-2 ">Masa Pemeliharaan</p>

                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="">
                    gratis update :<span> 1 Halaman </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="">
                    tambahan update :<span> Rp 15.000 / Halaman </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="">
                    buat halaman baru :<span> Rp 20.000 / Halaman </span>
                  </span>
                </li>
              </ul>
              <a
                href="https://wa.me/6287789035813?text=Halo%20saya%20mau%20buat%20website%20[isi%20website%20apa%20yang%20ingin%20anda%20pesan]%20dengan%20paket%20Basic"
                target="_blank"
                className="text-white bg-[#00e649] shadow-2xl focus:ring-4 focus:ring-purple-200 font-bold rounded-lg text-sm px-5 py-3 text-center dark:text-white dark:focus:ring-purple-900 hover:scale-95 duration-100"
              >
                Pesan
              </a>
            </div>
            <div className="">
              <div className="flex flex-col max-w-lg p-6 mx-auto text-center   border-4  border-white rounded-lg shadow  xl:p-8  scale-110  duration-300 bg-white text-black xs:mb-32 md:mb-0 ">
                <h3 className="mb-4 text-lg xl:-mx-[36px] bg-[#00e649] text-white -mx-[28px] font-bold  rounded-t-3xl -mt-[50px]  p-2 font-poppins ">
                  Paling Laris
                </h3>

                <h3 className="mb-4 text-3xl  font-bold ">Pro</h3>
                <p className="font-bold   sm:text-lg ">
                  Website interaktif dan dinamis menggunakan React dan Tailwind
                  CSS, desain modern, kustomisasi tinggi.
                </p>
                <div className="flex mb-4">
                  <span className="mr-2 text-left  line-through text-lg font-tight  mt-6">
                    <span>Rp</span> 1.600.000
                  </span>
                  <span className="bg-[#00e649]   text-white rounded-xl h-10 mt-4 p-4 flex items-center justify-center font-bold">
                    Diskon 60%
                  </span>
                </div>
                <div className="flex items-baseline justify-center my-8 -mt-0  ">
                  <span className="mr-2 sm:text-3xl lg:text-4xl  xs:text-2xl font-extrabold ">
                    <span className="text-base">Rp </span>
                    1.000.000
                  </span>
                  <span>Setahun</span>
                </div>
                <span className="-mt-6 mb-6 text-center font-semibold text-sm ">
                  Perpanjangan 700.000 pertahun
                </span>
                {/* <span className=" "></span> */}

                <ul role="list" className="mb-8 space-y-4 text-left ">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="">
                      Lama pengerjaan :<span> 7 hari kerja </span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      dapat domain domain .com .online .shop .info .xyx .me
                      .support .live .org .my.id .site .blog .click .pro
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Terdapat email bisnis </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>10 Halaman</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Hosting unlimited
                      <span className="font-semibold"></span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      SSL
                      <span className="font-semibold"></span>
                    </span>
                  </li>
                  <p className="text-lg ml-2 ">Masa Pemeliharaan</p>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="">
                      gratis update :<span> 3 Halaman </span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="">
                      tambahan update :<span> Rp 20.000 / Halaman </span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="">
                      buat halaman baru :<span> Rp 25.000 / Halaman </span>
                    </span>
                  </li>
                </ul>
                <a
                  href="https://wa.me/6287789035813?text=Halo%20saya%20mau%20buat%20website%20[isi%20website%20apa%20yang%20ingin%20anda%20pesan]%20dengan%20paket%20Pro"
                  className=" bg-[#00e649] shadow-2xl text-white focus:ring-4 focus:ring-purple-200 font-bold rounded-lg text-sm px-5 py-3 text-center dark: dark:focus:ring-purple-900 hover:scale-95 duration-100"
                >
                  Pesan
                </a>
              </div>
            </div>
            <div className="flex flex-col  max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-blue-100 rounded-lg shadow  xl:p-8    duration-300 xs:scale-110 md:scale-[0.90]    ">
              <h3 className="mb-4 text-2xl font-bold ">Business</h3>
              <p className="font-bold  sm:text-lg ">
                Website kompleks (blog, CRUD, company profile) dengan WordPress,
                fitur lengkap, dan fungsionalitas lebih.
              </p>
              <div className="flex mb-4">
                <span className="mr-2 text-left  line-through text-lg font-tight  mt-6">
                  <span>Rp</span> 2.500.000
                </span>
                <span className="bg-[#00e649]  text-white rounded-xl h-10 mt-4 p-4 flex items-center justify-center font-bold">
                  Diskon 40%
                </span>
              </div>
              <div className="flex items-baseline justify-center my-8 -mt-0 ">
                <span className="mr-2 sm:text-3xl lg:text-4xl  xs:text-2xl font-extrabold">
                  <span className="text-base">Rp </span>
                  1.500.000{" "}
                </span>
                <span>Setahun</span>

                <span className="text-gray-500 "></span>
              </div>
              <span className="-mt-6 mb-6 text-center font-semibold text-sm">
                Perpanjangan 50% pertahun dari harga awal
              </span>

              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="">
                    Lama pengerjaan :<span> 10 hari kerja </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    dapat domain domain .com .online .shop .info .xyx .me
                    .support .live .org .my.id .site .blog .click .pro
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Terdapat email bisnis </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>15 Halaman</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Hosting unlimited
                    <span className="font-semibold"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    SSL
                    <span className="font-semibold"></span>
                  </span>
                </li>
                <p className="text-lg ml-2 ">Masa Pemeliharaan</p>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="">
                    gratis update :<span> 5 Halaman </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="">
                    Tambahan :<span> Rp 20.000 / Halaman </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="">
                    buat halaman baru :<span> Rp 30.000 / Halaman </span>
                  </span>
                </li>
              </ul>
              <a
                href="https://wa.me/6287789035813?text=Halo%20saya%20mau%20buat%20website%20[isi%20website%20apa%20yang%20ingin%20anda%20pesan]%20dengan%20paket%20Business"
                className="text-white bg-[#00e649] shadow-2xl focus:ring-4 focus:ring-purple-200  rounded-lg text-sm px-5 py-3 text-center dark:text-white dark:focus:ring-purple-900 hover:scale-95 duration-100 font-bold"
              >
                Pesan
              </a>
            </div>

            {/* Tambahkan div "Company" dan "Enterprise" dengan pola yang sama */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Paket;
