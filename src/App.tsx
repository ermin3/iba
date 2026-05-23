import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
// @ts-expect-error Vite handles asset imports dynamically
import logoIba from "./assets/logo1.png";
import {
  Instagram,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ChevronRight,
  ArrowDown,
  ArrowRight,
  Palette,
  Hammer,
  Layout,
  Star,
} from "lucide-react";

// --- Constants & Data ---

const NAVIGATION = [
  { name: "Početna", href: "#home" },
  { name: "O nama", href: "#about" },
  { name: "Usluge", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Kontakt", href: "#contact" },
];

const SERVICES = [
  {
    id: "furniture",
    title: "Namještaj po mjeri",
    description:
      "Specijalizirani smo za izradu i ugradnju visokokvalitetnog namještaja koji savršeno odgovara vašem prostoru.",
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1556911223-e250e3388f6a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "design",
    title: "Dizajn enterijera",
    description:
      "Transformišemo vaše ideje u funkcionalne i estetski besprijekorne prostore prilagođene vašem životnom stilu.",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  },
];

const PORTFOLIO_ITEMS = [
  {
    title: "Moderne Kuhinje",
    category: "Kuhinje",
    image:
      "https://images.unsplash.com/photo-1556912177-f547c12dd0ee?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Elegantni Ormari",
    category: "Spavaće sobe",
    image:
      "https://images.unsplash.com/photo-1595428774753-48817ba60a2b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Luksuzna Kupatila",
    category: "Kupatila",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Dnevni Boravak",
    category: "Showroom",
    image:
      "https://images.unsplash.com/photo-1616486341353-fb823091173d?auto=format&fit=crop&q=80&w=1200",
  },
];

// --- Components ---

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="block max-w-[200px]">
          <img
            src={logoIba}
            alt="Logo"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10">
          {NAVIGATION.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-widest hover:text-brand-gold transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 flex flex-col items-center gap-6 md:hidden"
          >
            {NAVIGATION.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-display tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury living room"
          className="w-full h-full object-cover brightness-[0.7]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
      </div>

      <div className="relative z-10 text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-gold font-medium uppercase tracking-[0.3em] text-sm mb-6 block">
            Dizajn & Izrada Namještaja
          </span>
          <h1 className="text-5xl md:text-8xl mb-8 leading-tight">
            Vaš prostor,
            <br />
            naša <span className="italic font-light">strast.</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-brand-gold text-white font-medium hover:bg-brand-gold/90 transition-all rounded-sm flex items-center justify-center gap-2"
            >
              Pogledajte Portfolio <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-brand-dark transition-all rounded-sm"
            >
              Kontaktirajte Nas
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ArrowDown />
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-brand-light">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1618221381481-97ad553e99df?auto=format&fit=crop&q=80&w=1000"
            alt="Interior design detail"
            className="rounded-sm shadow-2xl relative z-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-brand-gold -z-0" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-8">
            Više od samog{" "}
            <span className="text-brand-gold italic">namještaja.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Smješteni u srcu Sarajeva, Interior by Iba nudi sveobuhvatna
            rješenja za vaš dom. Specijalizirani smo za izradu namještaja po
            mjeri, fokusirajući se na maksimalno iskorištavanje prostora uz
            besprijekoran dizajn.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Naš tim stručnjaka vodi vas kroz svaki korak – od prve skice do
            finalne ugradnje. Svaki komad koji napravimo je unikat, osmišljen da
            unese harmoniju i funkcionalnost u vaš život.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <span className="block text-3xl font-display text-brand-gold mb-1">
                Sarajevo
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-gray-400">
                Lokacija
              </span>
            </div>
            <div>
              <span className="block text-3xl font-display text-brand-gold mb-1">
                100%
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-gray-400">
                Po mjeri
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-4">Naše Usluge</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden bg-brand-light rounded-sm cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-colors">
                  <service.icon size={24} />
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-500 mb-6">{service.description}</p>
                <div className="flex items-center text-brand-gold font-medium gap-2">
                  Saznajte više <ChevronRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl mb-4">Odabrani Projekti</h2>
            <p className="text-gray-500 max-w-md">
              Kolekcija naših najnovijih radova koji prikazuju našu posvećenost
              detaljima i kvalitetu.
            </p>
          </div>
          <a
            href="#"
            className="text-brand-gold font-bold uppercase tracking-widest text-xs flex items-center gap-2 border-b-2 border-brand-gold pb-1"
          >
            Instagram Profil <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] group overflow-hidden bg-brand-dark rounded-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs uppercase tracking-[0.2em] mb-2 text-brand-gold font-bold">
                  {item.category}
                </span>
                <h3 className="text-3xl text-white mb-2">{item.title}</h3>
                <div className="w-0 group-hover:w-full h-0.5 bg-brand-gold transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl mb-8">
            Započnimo{" "}
            <span className="italic text-brand-gold font-light">projekat.</span>
          </h2>
          <p className="text-lg text-gray-500 mb-12">
            Spremni ste da transformišete svoj prostor? Javite nam se za
            besplatne konsultacije ili nam pošaljite upit.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-light flex items-center justify-center rounded-full text-brand-gold">
                <Phone size={24} />
              </div>
              <div>
                <span className="block text-sm uppercase tracking-widest text-gray-400 font-bold mb-1">
                  Telefon
                </span>
                <a
                  href="tel:+38762320173"
                  className="text-xl hover:text-brand-gold transition-colors"
                >
                  +387 62 320 173
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-light flex items-center justify-center rounded-full text-brand-gold">
                <Mail size={24} />
              </div>
              <div>
                <span className="block text-sm uppercase tracking-widest text-gray-400 font-bold mb-1">
                  Email
                </span>
                <a
                  href="mailto:interiorbyiba@gmail.com"
                  className="text-xl hover:text-brand-gold transition-colors"
                >
                  interiorbyiba@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-light flex items-center justify-center rounded-full text-brand-gold">
                <MapPin size={24} />
              </div>
              <div>
                <span className="block text-sm uppercase tracking-widest text-gray-400 font-bold mb-1">
                  Lokacija
                </span>
                <span className="text-xl">Sarajevo, Bosna i Hercegovina</span>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100 flex gap-6">
              <a
                href="https://instagram.com/interiorbyiba"
                className="p-3 bg-brand-dark text-white rounded-full hover:bg-brand-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-light p-10 rounded-sm shadow-sm"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-gray-400">
                  Ime i Prezime
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white px-4 py-3 border border-transparent focus:border-brand-gold outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-gray-400">
                  Email Adresa
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white px-4 py-3 border border-transparent focus:border-brand-gold outline-none transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-gray-400">
                Usluga
              </label>
              <select className="w-full bg-white px-4 py-3 border border-transparent focus:border-brand-gold outline-none transition-colors">
                <option>Namještaj po mjeri</option>
                <option>Dizajn enterijera</option>
                <option>Drugo</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-gray-400">
                Vaša Poruka
              </label>
              <textarea
                rows={5}
                placeholder="Opišite vaš projekat..."
                className="w-full bg-white px-4 py-3 border border-transparent focus:border-brand-gold outline-none transition-colors resize-none"
              ></textarea>
            </div>
            <button className="w-full py-4 bg-brand-dark text-white font-bold uppercase tracking-[0.2em] hover:bg-brand-gold transition-all">
              Pošalji Upit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 bg-brand-dark text-white text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-white mb-6 font-display italic">
          Interior by iba.
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          © {new Date().getFullYear()} Interior by Iba. Sva prava zadržana.
        </p>
        <div className="flex justify-center gap-8 text-xs uppercase tracking-widest font-medium opacity-50">
          <a href="#" className="hover:opacity-100 transition-opacity">
            Privacy Policy
          </a>
          <a href="#" className="hover:opacity-100 transition-opacity">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="antialiased text-brand-dark bg-brand-light">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
