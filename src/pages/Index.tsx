import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Causes from "@/components/Causes";
import Impact from "@/components/Impact";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>PryCare - Community Helping Community | Hand to Hand</title>
        <meta
          name="description"
          content="Join PryCare in our mission to support families in need through community food programs and volunteer efforts. Community helping community, hand to hand."
        />
        <meta
          name="keywords"
          content="nonprofit, charity, donation, food distribution, community support, volunteer, local impact, PryCare"
        />
      </Helmet>

      <main className="overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Causes />
        {/* Impact section disabled - uncomment to re-enable */}
        {/* <Impact /> */}
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
};

export default Index;
