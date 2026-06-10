import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

import FeatureSelection from "./components/FeatureSelection/FeatureSelection";
import Offer from "./components/Offer/Offer";
import Testimonials from "./components/Testimonials/Testimonials";
import Newsletter from "./components/Newsletter/Newsletter";

import meeting1 from "./assets/images/meeting1.jpg";
import meeting2 from "./assets/images/meeting2.jpg";

import "./styles/globals.css";
import "./styles/responsive.css";

function App() {
  return (
    <main>
      {/* =========================
          NAVBAR
      ========================= */}
      <Navbar />

      {/* =========================
          HERO SECTION
      ========================= */}
      <Hero />

      {/* =========================
          FEATURE SECTION 1
      ========================= */}
      <FeatureSelection
        title="Tomorrow should be better than today"
        description="We are a team of strategists, designers, communicators and researchers. Together, we believe progress only happens when you refuse to play things safe."
        image={meeting1}
      />

      {/* =========================
          FEATURE SECTION 2
      ========================= */}
      <FeatureSelection
        title="See how we can help you progress"
        description="We add a layer of fearless insights and action that allows changemakers to accelerate their progress in areas such as brand, design, digital and social research."
        image={meeting2}
        reverse={true}
      />

      {/* =========================
          OFFER SECTION
      ========================= */}
      <Offer />

      {/* =========================
          TESTIMONIALS
      ========================= */}
      <Testimonials />

      {/* =========================
          NEWSLETTER
      ========================= */}
      <Newsletter />

      {/* =========================
          FOOTER
      ========================= */}
      
    </main>
  );
}

export default App;