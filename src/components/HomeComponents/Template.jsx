import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { capporto, capcompany } from "../../assets";

const Template = () => {
  const [templates, setTemplates] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Untuk menyimpan halaman yang aktif
  const itemsPerPage = 8; // Menampilkan 8 template per halaman
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  useEffect(() => {
    // Mengambil data JSON dari folder public
    const fetchData = async () => {
      const response = await fetch("/data/template.json");
      const data = await response.json();
      setTemplates(data); // Menyimpan data ke state
    };

    fetchData();
  }, []); // Hanya sekali saat komponen dimuat

  useEffect(() => {
    // Mengambil kategori unik dari data template
    const uniqueCategories = [
      ...new Set(templates.map((template) => template.category)),
    ];
    setCategories(uniqueCategories); // Menyimpan kategori unik ke state
  }, [templates]);

  // Memfilter templates berdasarkan kategori yang dipilih
  const filterByCategory = () => {
    if (selectedCategory === "Semua") {
      return templates; // Menampilkan semua templates
    }
    return templates.filter(
      (template) => template.category === selectedCategory
    ); // Menampilkan berdasarkan kategori
  };

  // Fungsi untuk scroll ke atas ketika kategori dipilih
  const scrollToTop = () => {
    const element = document.getElementById("design-header");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected); // Mengatur halaman yang aktif
    scrollToTop(); // Gulir ke atas saat halaman diubah
  };

  // Dapatkan templates yang sudah difilter berdasarkan kategori yang dipilih
  const filteredTemplates = filterByCategory();

  // Tentukan template yang akan ditampilkan berdasarkan halaman aktif
  const displayedTemplates = filteredTemplates.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Hitung total halaman berdasarkan jumlah template yang difilter
  const pageCount = Math.ceil(filteredTemplates.length / itemsPerPage);

  return (
    <div className="w-11/12 xxl:w-[1850px] mx-auto">
      <div
        id="design-header"
        className="mx-auto flex flex-col items-center space-y-4 text-center mt-20  md:w-1/2 xs:w-3/2 mb-14"
      >
        <div className="mx-auto flex  flex-col items-center font-poppins space-y-4 text-center  ss:mt-4   mb-4">
          <h2 className="text-3xl font-bold  mt-2 ">Ada banyak desain </h2>

          <p className=" leading-normal  sm:text-lg sm:leading-7 ">
            Banyak desain menakjubkan yang dapat anda pilih
          </p>
        </div>
        <div>
          <h2 className=" text-2xl mt-2 font-poppins">Telusuri berbagai website :</h2>
        </div>

        {/* Kategori Buttons */}
        <div className="flex justify-center font-poppins items-center space-x-6 mt-4">
          {/* Tombol untuk menampilkan semua kategori */}
          <button
            className={`bg-white border-2 border-solid shadow-xl xs:p-2 ss:p-4 rounded-lg text-black font-bold ${
              selectedCategory === "Semua" ? "" : "scale-110"
            }`}
            onClick={() => {
              setSelectedCategory("Semua");
              setCurrentPage(0); // Reset halaman ke 0 saat kategori berubah
              scrollToTop(); // Scroll ke atas saat kategori diubah
            }}
          >
            Semua
          </button>

          {/* Tombol untuk kategori lainnya, berdasarkan data kategori */}
          {categories.map((category, index) => (
            <button
              key={index}
              className={`bg-white shadow-xl border-2 border-double xs:p-2 ss:p-4 rounded-lg text-black font-bold ${
                selectedCategory === category ? "scale-100" : "scale-110"
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(0); // Reset halaman ke 0 saat kategori diubah
                scrollToTop(); // Scroll ke atas saat kategori diubah
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menampilkan template sesuai kategori yang dipilih */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center font-poppins">
        {displayedTemplates.map((template, index) => (
          <div key={template.id} className="relative p-4">
            <div
              className={`h-full rounded-md shadow-xl ${
                index % 2 === 0 ? "bg-white" : "bg-[#f9fafb]"
              }`}
            >
              <img
                src={template.image}
                alt={template.title}
                className="w-full object-cover p-2 rounded-2xl"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black text-center">
                  {template.title}
                </h3>
                <div className="flex justify-center space-x-6 mt-4">
                  <a
                    href="https://wa.me/6287789035813?text=Halo%20kak,%20saya%20tertarik%20untuk%20membuat%20website%20di%20agensiweb%20😀"
                    className="bg-black hover:scale-[0.97] p-2 w-1/2 m-2 text-white rounded-lg flex items-center justify-center text-center shadow-lg"
                  >
                    Pesan
                  </a>
                  <button
                    className="bg-black hover:scale-[0.97] p-2 w-1/2 m-2 text-white rounded-lg h-12"
                    onClick={() => window.open(template.link, "_blank")}
                  >
                    Pratinjau
                  </button>
                </div>
              </div>
            </div>
            {selectedCategory === "Semua" && (
              <div className="absolute top-44 right-0 m-4">
                {/* Logika cap berdasarkan kategori */}
                {template.category === "Portofolio" && (
                  <img
                    src={capporto} // Ganti dengan cap untuk kategori Portofolio
                    alt="Cap Portofolio"
                    className="w-24 h-24 object-contain"
                  />
                )}
                {template.category === "Company" && (
                  <img
                    src={capcompany} // Ganti dengan cap untuk kategori Perusahaan
                    alt="Cap Perusahaan"
                    className="w-24 h-24 object-contain"
                  />
                )}
                {/* Cap default untuk kategori lainnya */}
                {template.category !== "Portofolio" &&
                  template.category !== "Company" && (
                    <img
                      src="capDefault.png" // Ganti dengan cap untuk kategori lainnya
                      alt="Cap Default"
                      className="w-16 h-16 object-contain"
                    />
                  )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          pageCount={pageCount}
          previousLabel="<"
          containerClassName="pagination"
          activeClassName="active"
          marginPagesDisplayed={1}
          previousClassName="previous"
          nextClassName="next"
          disabledClassName="disabled"
        />
      </div>
    </div>
  );
};

export default Template;
