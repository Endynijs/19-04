
import React from "react";

export default function Realisaties() {
  const projecten = [
    { src: "/images/project1.jpg", title: "Industriële sturingen" },
    { src: "/images/project2.jpg", title: "Thuislaadpunt installatie" },
    { src: "/images/project3.jpg", title: "Zonnepanelen bij bedrijfsgebouw" },
    { src: "/images/project4.jpg", title: "Slimme energiesturing" },
    { src: "/images/project5.jpg", title: "Herstelling Alfen laadpunt" },
    { src: "/images/project6.jpg", title: "Commerciële laadpleinen" },
    { src: "/images/project7.jpg", title: "Particulier laadstation" },
  ];

  return (
    <section className="bg-white text-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Onze Realisaties</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projecten.map((project, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={project.src} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
