import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assets/3.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Hero
        cName="hero-mid"
        HeroImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
      <Navbar />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
