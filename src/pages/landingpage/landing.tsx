// App.tsx

import AboutSection from "./component/aboutsection";
import CtaSection from "./component/ctasection";
import FeatureSection from "./component/feature";

import HeroSection from "./component/hero";



const Landing: React.FC = () => {
  return (
    <div className="Landing">
  <HeroSection />
      <AboutSection />
      <FeatureSection />
      <CtaSection />
    </div>
  );
}

export default Landing;
