import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/8.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Hero cName="hero-mid" HeroImg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />

      <Navbar />
    </>
  );
}
export default About;
