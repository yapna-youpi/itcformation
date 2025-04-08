import { Brand } from "../../components/brand/Brand";
import About from "./about/About";
import AvantGarde from "./avant-garde/AvantGarde";
import Hero from "./hero/Hero";
import Company from "./company/Company"
import Newsletter from "./newsletter/Newsletter";
import Patner from "./partner/Patner";
import Faq from "./faq/faq";
import Formations from "../../components/formations/Formations";

const Home = () => {
  return (
    <>
      <Hero/>
      <About />
      <AvantGarde/>
      <Formations/>
      <Faq />
      {/* <Brand/> */}
      <Patner />
      <Newsletter />
      {/* <Company /> */}
    </>
  );
};

export default Home;
