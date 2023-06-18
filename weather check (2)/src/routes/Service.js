import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ServiceImg from "../assets/2.jpg";

function Service() {
  return (
    <>
      <Hero
        cName="hero-mid"
        HeroImg={ServiceImg}
        title="Service"
        btnClass="hide"
      />
      <Navbar />
      <Footer />
    </>
  );
}
export default Service;
