import { useState } from "react";
import { pertanyaan } from "../../assets";
const Pertanyaan = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);
  const questionsAndAnswers2 = [
    {
      question:
        "Apa keunggulan AgensiWeb dibandingkan penyedia layanan lain?",
      answer:
        "Kami menawarkan fitur yang solid serta kami membagikan ebook gratis",
    },
    {
      question: "Apakah bisa request desain website?",
      answer:
        "Bisa, anda kirimkan saja referensi atau gambar website yang anda inginkan. dengan sekejap mata akan kami selesaikan",
    },
    {
      question: "Apakah bisa mengedit atau memelihara konten website sendiri?",
      answer:
        "Bisa, kami dapat membagikan  video di youtube tentang cara mengedit website  seperti memperbarui kalimat, gambar dan lainnya, namun jika  tidak mau pusing kami bisa membantu memperbarui website anda tetapi akan dikenakan biaya lebih lanjut.",
    },
    {
      question: "Bagaimana jika saya telah punya domain dan hosting sendiri?",
      answer:
        "Pembuatan website tetap bisa kami lakukan, nanti setelah website selesai maka akan kami kirim file website tersebut dan anda dapat mengupload nya pada penyedia hosting anda, terkait biaya dapat disesuaikans",
    },
    {
      question: "Apa itu dashboard wordpress?",
      answer:
        "Dashboard wordpress digunakan untuk memanajemen website , dengan itu anda dapat mengedit dan banyak lain hal yang dapat anda gunakan. nanti anda mendapatkan akun yang dapat digunakan untuk masuk kedalam dashboard wordpress.",
    },
  ];
  const questionsAndAnswers = [
    {
      question: "Bagaimana proses pembayaran?",
      answer:
        "Sebelum kami membuat website anda, anda diminta untuk membayar uang muka terlebih dahulu sebesar 50%. setelah website selesai maka klien diminta untuk membayar pelunasan",
    },
    {
      question: "Apa saja aset yang diperlukan saat membuat website?",
      answer:
        "Diperlukan gambar yang akan kita dimasukkan ke website, deskripsi, dan konten lainnya.",
    },
    {
      question: "Kegunaan website portofolio apa?",
      answer:
        "Website portofolio adalah cara profesional menampilkan karya, keahlian, dan pengalaman Anda secara online. Cocok untuk menarik klien, membangun reputasi, dan memperluas peluang karir.",
    },
    {
      question: "Apa beda website landing page dan website company profile?",
      answer:
        "Landing page fokus pada satu tujuan spesifik, seperti promosi atau konversi. Company profile menampilkan informasi lengkap tentang perusahaan, seperti visi, misi, layanan, dan sejarah",
    },
    {
      question: "Tarif Perpanjangan diperlukan untuk apa?",
      answer:
        "Perpanjangan diperlukan untuk memastikan website tetap aktif, dapat diakses, dan jasa atas maintenance, termasuk memperpanjang domain, hosting agar operasional website berjalan lancar tanpa gangguan.",
    },
    {
      question: "Bagaimana jika terjadi error pada website saya nanti?",
      answer:
        "Klien dapat menghubungi kami dan kami akan dengan segera memperbaiki error tersebut.",
    },
  ];

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  const toggleAnswer2 = (index) => {
    if (openIndex2 === index) {
      setOpenIndex2(null);
    } else {
      setOpenIndex2(index);
    }
  };

  return (
    <div>
      <div className="relative  isolate font-outfit overflow-hidden bg-custom scale-100 mt-10">
        <div className="py-10 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 ">
          <div className="flex flex-col text-left basis-1/2">
            <p className="inline-block font-semibold mb-4 xs:text-center md:text-left">
              F.A.Q
            </p>
            <p className="sm:text-4xl text-3xl font-extrabold text-base-content xs:text-center md:text-left">
              Pertanyaan yang sering diajukan
            </p>
            <img
              src={pertanyaan}
              alt="Ikon pertanyaan untuk mengakses FAQ atau tanya jawab"
              className="w-[400px] mt-6 xs:mx-auto md:ml-0"
            />
          </div>
          <ul className="basis-1/2">
            {questionsAndAnswers.map((item, index) => (
              <li key={index} className="group">
                <button
                  onClick={() => toggleAnswer(index)}
                  className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                  aria-expanded={openIndex === index ? "true" : "false"}
                >
                  <span className="flex-1 text-base-content">
                    {item.question}
                  </span>
                  <svg
                    className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y=" "
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${
                        openIndex === index ? "rotate-90" : ""
                      }`}
                    ></rect>
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className="group-hover:opacity-0 transform origin-center transition-all duration-200 ease-out"
                    ></rect>
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? "max-h-60" : "max-h-0"
                  }`}
                  style={{ transition: "max-height 0.3s ease-in-out 0s" }}
                >
                  <div className="pb-5 leading-relaxed">
                    <div className="space-y-2 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ul className="xs:w-5/6 md:w-[1000px] mx-auto -mt-10">
          {questionsAndAnswers2.map((item, index) => (
            <li key={index} className="group">
              <button
                onClick={() => toggleAnswer2(index)}
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded={openIndex2 === index ? "true" : "false"}
              >
                <span className="flex-1 text-base-content">
                  {item.question}
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-200 ease-out ${
                      openIndex2 === index ? "rotate-90" : ""
                    }`}
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="group-hover:opacity-0 transform origin-center transition-all duration-200 ease-out"
                  ></rect>
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex2 === index ? "max-h-60" : "max-h-0"
                }`}
                style={{ transition: "max-height 0.3s ease-in-out 0s" }}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">{item.answer}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pertanyaan;
