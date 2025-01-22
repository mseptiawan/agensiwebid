import { useState, useEffect } from "react";

const WebsitePortofolio = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Semua");

  useEffect(() => {
    fetch("/data/portofolio.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        const uniqueCategories = [
          "Semua",
          ...new Set(data.map((project) => project.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="xs:w-5/6  font-outfit md:w-4/6 ss:w-5/6  xxl:w-[1500px]font-outfit text-white mx-auto portfolio-section py-16 px-4 -mt-10"
    >
      <div className="container mx-auto ">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Portofolio kami</h2>
          <p className="text-lg w-5/5 mx-auto  font-semibold"></p>
        </div>

        <div className="flex flex-wrap justify-center  mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`filter-button px-4 py-2 mr-2 mb-2 text-black rounded ${
                activeCategory === category
                  ? "bg-white font-bold"
                  : "bg-white scale-110  font-bold mx-4 "
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-white border-x-8  text-black portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden"
            >
              <a href={project.link}>
                <img
                  className="w-full  object-contain rounded-lg mt-2"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:shadow-3xl" />
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-black text-center ">
                    {project.title}
                  </h3>
                  <span className="text-sm font-bold text-black">
                    {project.category}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsitePortofolio;
