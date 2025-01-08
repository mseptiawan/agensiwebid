const NotFound = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#1E90FF]  text-gray-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="mb-8">
            <h2 className="mt-6 text-6xl font-extrabold text-gray-900 ">404</h2>
            <p className="mt-1 text-3xl font-bold text-gray-900 ">
              Page not found
            </p>
            <p className="mt-2 text-sm  ">Maaf, halaman tidak tersedia</p>
          </div>
          <div className="mt-2">
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-black  focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              <svg
                className="mr-2 -ml-1 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12h18m-9-9l9 9-9 9"
                />
              </svg>
              Kembali ke beranda
            </a>
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
              <span className="px-2  text-sm  ">
                Jika anda menemukan kesalahan, Mohon kita kami. Terima kasih
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
