import { useState } from "react";
import { question } from "../../assets";
const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questionsAndAnswers = [
    {
      question: "Bagaimana proses pembayaran?",
      answer:
        "Sebelum kami membuat website anda, anda diminta untuk membayar uang muka terlebih dahulu sebesar 50%.",
    },
    {
      question: "Apa ada data yang diperlukan saat membuat website?",
      answer: (
        <div>
          <p>
            Ya, sebelum kami membuat website untuk Anda, Anda diminta untuk
            mengirimkan data seperti gambar, dan assets lainnya sesuai dengan
            jenis website yang Anda pesan.
          </p>
          <p className="mt-4 text-sm text-blue-700 p-3 bg-white rounded-xl ">
            <a
              href="/formulir-data-website.pdf" // Path ke formulir data website yang ingin diunduh
              download="formulir-data-website.pdf" // Nama file saat didownload
              className="text-center "
            >
              Download Formulir Data Pembuatan Website
            </a>
          </p>
        </div>
      ),
    },
    // Pertanyaan lainnya...
    {
      question: "Apa beda wordpress dan Coding secara manual?",
      answer:
        "WordPress menawarkan solusi cepat dengan template yang siap pakai. Coding manual memberikan fleksibilitas tak terbatas untuk menciptakan website unik sesuai kebutuhan spesifik Anda.",
    },
    {
      question: "Kegunaan website portofolio apa?",
      answer:
        "Website portofolio adalah cara profesional menampilkan karya, keahlian, dan pengalaman Anda secara online. Cocok untuk menarik klien, membangun reputasi, dan memperluas peluang karier.",
    },
    {
      question: "Apa beda website landing page dan website company profile?",
      answer:
        "Landing page fokus pada satu tujuan spesifik, seperti promosi atau konversi. Company profile menampilkan informasi lengkap tentang perusahaan, seperti visi, misi, layanan, dan sejarah",
    },
    {
      question: "Perpanjangan diperlukan untuk apa?",
      answer:
        "Perpanjangan diperlukan untuk memastikan website tetap aktif dan dapat diakses, termasuk memperpanjang domain, hosting agar operasional website berjalan lancar tanpa gangguan.",
    },
    {
      question:
        "Bagaimana tahapan untuk saya membuat website di MyConsultanIT?",
      answer:
        "Anda tidak perlu pusing dengan kode yang rumit, silahkan hubungi MyConsultanIT dapat melalui email atau WhatsApp +62 877-8903-5813.",
    },
  ];

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Menutup jawaban jika klik yang sama
    } else {
      setOpenIndex(index); // Membuka jawaban yang dipilih
    }
  };

  return (
    <div>
      <div className="relative isolate font-poppins overflow-hidden bg-custom scale-100 mt-10">
        <div className="py-10 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 ">
          <div className="flex flex-col text-left basis-1/2">
            <p className="inline-block font-semibold mb-4 xs:text-center md:text-left">
              F.A.Q
            </p>
            <p className="sm:text-4xl text-3xl font-extrabold text-base-content xs:text-center md:text-left">
              Pertanyaan yang sering diajukan
            </p>
            <img
              src={question}
              alt="question"
              className="w-[400px] mt-6 xs:mx-auto md:ml-0"
            />
          </div>
          <ul className="basis-1/2">
            {questionsAndAnswers.map((item, index) => (
              <li key={index} className="group">
                <button
                  onClick={() => toggleAnswer(index)} // Menambahkan fungsi onClick
                  className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                  aria-expanded={openIndex === index ? "true" : "false"} // Menentukan status ekspansi
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
      </div>
    </div>
  );
};

export default Questions;
