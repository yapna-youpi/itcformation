import { Brand } from "../../components/brand/Brand";
import About from "./about/About";
import AvantGarde from "./avant-garde/AvantGarde";
import Hero from "./hero/Hero";
import Company from "./company/Company"
import Newsletter from "./newsletter/Newsletter";
import Patner from "./partner/Patner";
import Faq from "./faq/faq";
import Formation from "../../components/formations/Formation";

const Home = () => {
  return (
    <>
      <Hero/>
      <About />
      <AvantGarde/>
      <Formation/>
      <Faq />
      {/* <Brand/> */}
      <Patner />
      <Newsletter />
      {/* <Company /> */}
    </>
  );
};

export default Home;
