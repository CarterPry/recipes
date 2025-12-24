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
        <title>Hapi - Nonprofit Organization | Changing Lives Together</title>
        <meta
          name="description"
          content="Join Hapi in our mission to provide clean water, education, and healthcare to communities in need. Donate today and help transform lives worldwide."
        />
        <meta
          name="keywords"
          content="nonprofit, charity, donation, clean water, education, healthcare, volunteer, global impact"
        />
      </Helmet>

      <main className="overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Causes />
        <Impact />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
};

export default Index;
