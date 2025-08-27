import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Templat = () => {
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
    <div>
      ini dia
    </div>
  );
};

export default Templat;
