import { arrow, chat } from "../assets";

import { NavigationBar, Home, Footer } from "../components";
const Homes = () => {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animasi smooth scroll
    });
  };
  const handleChatClick = () => {
    window.location.href =
      "https://wa.me/6287789035813?text=Halo%20kak,%20saya%20tertarik%20untuk%20membuat%20website%20di%20agensiweb%20😀";
  };
  return (
    <div className="bg-[#FFFCFB] bg-cover text-black ">
      <NavigationBar />
      <Home />
      <Footer />
      <div className="fixed bottom-0 right-4 mb-8 ml-8 flex flex-col">
        <div className="bg-[#0a0422b6] w-12 flex justify-center items-center h-12 rounded-lg ml-32">
          <img
            src={arrow}
            alt="Ikon panah untuk menggulir ke atas"
            className="xs:w-8 sm:w-10  cursor-pointer transform transition-transform duration-300 hover:scale-110 "
            onClick={handleScrollUp}
          />
        </div>
        <div className="flex w-48 font-outfit bg-[#10c03e] rounded-lg mt-4 items-center h-14">
          <button onClick={handleChatClick}>
            <img
              src={chat}
              alt="Ikon untuk membuka obrolan atau chat dengan kami"
              className="xs:w-10 sm:w-12 ml-2"
            />
          </button>

          <button onClick={handleChatClick}>
            <p className="font-bold ml-2 text-xl text-white">Chat Kami</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homes;
