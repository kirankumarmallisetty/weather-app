import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
function Home() {
  return (
    <>
      <Hero
        cName="hero"
        HeroImg="https://images.pexels.com/photos/2113562/pexels-photo-2113562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Prediction is very difficult, especially if it's about the future."
        text="Let's Predict the Future Together!"
        buttonText="Try Now"
        url="/weather"
        btnClass="show"
      />
      <Navbar />
    </>
  );
}
export default Home;
