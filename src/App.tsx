// App.tsx
import "./App.css";
import AboutSection from "./component/aboutsection";
import CtaSection from "./component/ctasection";
import FeatureSection from "./component/feature";
import Footer from "./component/footer";
import HeroSection from "./component/hero";
import Navbar from "./component/navbar";
import Preloader from "./component/preloader";
import ScrollTop from "./component/scrolltop";

function App() {
  return (
    <div className="App">
      <Preloader />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <CtaSection />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
