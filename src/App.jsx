import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeaturedStories from "./Components/FeaturedStories";
import Pricing from "./Components/Pricing";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <Hero />
        </section>
        <section id="stories">
          <FeaturedStories />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="services">
          <Services />
        </section>
      </main>
      <footer id="contact">
        <Footer />
      </footer>
    </>
  );
}

export default App;
