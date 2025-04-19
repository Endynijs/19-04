
import React from "react";

export default function Homepage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🔧 Navigatie Test</h1>
      <nav className="bg-red-600 p-4 rounded-xl flex flex-col gap-4 text-center">
        <a href="#diensten" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold">Diensten</a>
        <a href="#over" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold">Over ons</a>
        <a href="#projecten" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold">Projecten</a>
        <a href="#contact" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold">Contact</a>
      </nav>
    </div>
  );
}
