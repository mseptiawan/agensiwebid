import { useState } from "react";
import emailjs from "emailjs-com";
import { clickicon, jamkerja, alamat, kontak } from "../../assets";
import { toast } from "react-hot-toast";

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dfrrrjr",
        "template_nwfn9pp",
        e.target,
        "KA1948RXTL38AVhqi"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Terima kasih telah menghubungi kami.");
        },
        (error) => {
          console.log(error.text);
          toast.error("Opps, Terjadi kesalahan.");
        }
      );

    setFormData({ name: "", user_email: "", message: "" });
  };

  return (
    <section
      className="-mt-10 text-white  font-poppins "
      id="contact"
    >
      <div className="mx-auto  max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide ">
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight  text-3xl sm:text-5xl">
              Hubungi kami
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl ">
              Kami sangat menunggu kabar Anda
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 ml-4 text-lg ">
                Jika ada suatu hal yang membingungkan Anda, jangan sungkan untuk
                bertanya. Kami akan membaca dan membalas pesan Anda. Anda bisa
                menghubungi kami melalui formulir atau langsung kontak WhatsApp
                untuk informasi lebih lanjut.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded text-gray-50">
                    <img src={alamat}  alt="alamat" className="w-20" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 ">
                      Alamat kami
                    </h3>
                    <p className="">
                      Sukamaju, Palembang, Indonesia
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded text-gray-50">
                    <img src={kontak}  alt="kontak" className="w-20" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 ">
                      Kontak
                    </h3>
                    <p className="">
                      Mobile: +62 877-8903-5813
                    </p>
                    <p className="">
                      Email: mseptiawan017@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded text-gray-50">
                    <img src={jamkerja}  alt="jamkerja" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 ">
                      Jam kerja
                    </h3>
                    <p className="">
                      Senin - Sabtu: 08:00 - 17:00
                    </p>
                    <p className="">Minggu: 08:00 - 22:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold dark:text-white">
                Silahkan tanyakan pada kami
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="mx-0 mb-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama"
                      className="mb-2 w-full text-black rounded-md border border-gray-400 py-2 pl-2 pr-4  font-poppins shadow-md"
                      required
                    />
                  </div>
                  <div className="mx-0 mb-4">
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      placeholder="Masukkan alamat email"
                      className="mb-2 w-full text-black rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md font-poppins"
                      required
                    />
                  </div>
                  <div className="mx-0 mb-4">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      cols="30"
                      rows="5"
                      placeholder="Tulis pesanmu ..."
                      className="mb-2 w-full text-black rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md font-poppins"
                      required
                    />
                  </div>
                </div>
                <div className="text-center relative">
                  <button
                    type="submit"
                    className="w-full bg-white text-black px-6 py-3 font-bold rounded-md hover:scale-95 duration-100"
                  >
                    Kirim pesan
                    <img
                      src={clickicon}
                      
                      alt="clickicon"
                      className="absolute   xs:w-10 xs:right-[60px] xs:top-4 md:right-[200px] w-10"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;
