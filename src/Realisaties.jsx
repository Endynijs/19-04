
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
    <div className="bg-[#0e141e] text-white font-sans min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="h-20 pr-4">
          <img src="/images/nijs-logo.png" alt="Nijs Solutions Group" className="h-full object-contain" />
        </div>
        <nav className="space-x-6 text-sm text-white/80">
          <a href="/">Home</a>
          <a href="/realisaties">Realisaties</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Onze Realisaties</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projecten.map((project, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white text-black">
                <img src={project.src} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
