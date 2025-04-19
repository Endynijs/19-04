import React from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Building2, Zap } from "lucide-react";

export default function Homepage() {
  return (
    <div className="bg-[#0e141e] text-white font-sans">
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold">
          <img src="/nijs-logo-cropped.png" alt="Nijs Logo" className="h-20" />
        </div>
        <nav className="space-x-6 text-sm text-white/80">
          <a href="#diensten">Diensten</a>
          <a href="#over">Over ons</a>
          <a href="/realisaties">Realisaties</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center px-4" style={{ backgroundImage: "url('/hero-nijs.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Slimme oplossingen<br />voor slimme gebouwen</h1>
          <a href="#contact">
            <Button className="mt-4 bg-[#5fd68b] hover:bg-[#4cc27a] text-black text-lg px-6 py-3 rounded-xl">Neem contact op</Button>
          </a>
        </div>
      </section>

      <section id="diensten" className="bg-white text-black py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">Onze diensten</h2>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl shadow text-center border">
            <div className="flex justify-center mb-4"><Building2 className="w-10 h-10 text-[#0e141e]" /></div>
            <h3 className="font-semibold text-lg mb-2">Gebouwautomatisering</h3>
            <p className="text-sm text-gray-600">Verlichting, zonwering, klimaatcontrole, aanwezigheidssensoren en meer.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow text-center border">
            <div className="flex justify-center mb-4"><Zap className="w-10 h-10 text-[#0e141e]" /></div>
            <h3 className="font-semibold text-lg mb-2">Energiebeheer</h3>
            <p className="text-sm text-gray-600">Slimme meters en optimalisatie van energieverbruik via monitoring en sturing.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow text-center border">
            <div className="flex justify-center mb-4">
              <img src="/loxone-logo.png" alt="Loxone" className="h-20 mx-auto mb-4 pt-1" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Loxone partner</h3>
            <p className="text-sm text-gray-600">Integraties en maatwerkoplossingen met Loxone-systemen.</p>
          </div>
        </div>
      </section>

      <section id="over" className="bg-[#0e141e] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img src="/office-interior.jpg" alt="Kantoorinterieur" className="rounded-xl shadow" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Over ons</h2>
            <p className="text-white/80 text-lg">Van advies tot realisatie: wij bieden innovatieve oplossingen voor slimmer en duurzamer gebouwbeheer.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4 text-black">Contact</h2>
          <p className="mb-6 text-gray-700">Neem gerust contact met ons op voor meer informatie of een adviesgesprek.</p>
          <form className="grid gap-4">
            <Input name="naam" placeholder="Naam" className="bg-gray-100 text-black" />
            <Input type="email" name="email" placeholder="E-mailadres" className="bg-gray-100 text-black" />
            <textarea name="bericht" placeholder="Bericht" className="bg-gray-100 text-black p-2 rounded-md" rows="4"></textarea>
            <Button className="bg-[#5fd68b] hover:bg-[#4cc27a] text-black rounded-xl">Verzenden</Button>
          </form>
        </div>
      </section>

      <section className="bg-[#f9fafb] text-black py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-4">Onze gegevens</h2>
            <p className="mb-2">📍 <strong>Adres:</strong> Driekruisenstraat 74, 3700 Tongeren-Borgloon</p>
            <p className="mb-2">📞 <strong>Telefoon:</strong> +32 492 31 98 78</p>
            <p className="mb-2">✉️ <strong>E-mail:</strong> endy@nijs.tech</p>
            <p className="mt-4 text-sm text-gray-600">Wij helpen je graag verder met je automatiseringsproject.</p>
          </div>
          
<iframe
  title="Nijs locatie"
  className="w-full h-64 rounded-xl shadow"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.2108742648966!2d5.3428128!3d50.8057409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f0c759ff0a33%3A0x148df257f0f10a74!2sDriekruisenstraat%2074%2C%203700%20Borgloon!5e0!3m2!1snl!2sbe!4v1713288677333!5m2!1snl!2sbe"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
      </section>
    </div>
  );
}
