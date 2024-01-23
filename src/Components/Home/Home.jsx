import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousel/Carousel";
import About from "../About/About";
import Services from "../Services/Services";
import PricingPlan from "../PricingPlan/PricingPlan";
import SpecialOffer from "../SpecialOffer/SpecialOffer";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <About />
      <Services />
      <PricingPlan />
      <SpecialOffer />
      <Footer />
    </>
  );
}
