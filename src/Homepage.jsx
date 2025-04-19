
import React, { useState } from "react";
import { Menu } from "lucide-react";

export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#0e141e] text-white font-sans min-h-screen">
      {/* Header */}
      <header className="p-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <img src="/images/nijs-logo.png" alt="Nijs Solutions Group" className="h-20 w-auto object-contain" />
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="h-6 w-6 text-white" />
          </button>
          <nav className="hidden md:flex space-x-6 text-base text-white/80">
            <a href="#diensten">Diensten</a>
            <a href="#over">Over ons</a>
            <a href="/realisaties">Realisaties</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        {menuOpen && (
          <nav className="flex flex-col mt-4 space-y-2 text-white/80 md:hidden">
            <a href="#diensten">Diensten</a>
            <a href="#over">Over ons</a>
            <a href="/realisaties">Realisaties</a>
            <a href="#contact">Contact</a>
          </nav>
        )}
      </header>
    </div>
  );
}
