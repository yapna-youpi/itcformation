import { Brand } from "../../components/brand/Brand";
import About from "./about/About";
import AvantGarde from "./avant-garde/AvantGarde";
import Hero from "./hero/Hero";
import Company from "./company/Company"
import Newsletter from "./newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Hero/>
      <About />
      <AvantGarde/>
      <Brand/>
      <Newsletter />
      {/* <Company /> */}
    </>
  );
};

export default Home;
