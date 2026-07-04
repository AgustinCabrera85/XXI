import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductShowcase from "./components/ProductShowcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <ProductShowcase />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
