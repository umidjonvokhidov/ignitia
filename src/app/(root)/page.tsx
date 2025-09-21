import Hero from "@/sections/Hero";
import PatternDivider from "@/components/PatternDivider";
import About from "@/sections/About";
import Features from "@/sections/Features";
import Integrations from "@/sections/Integrations";
import Pricing from "@/sections/Pricing";
import Testimonial from "@/sections/Testimonial";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";

const HomePage = () => {
  return (
    <>
      <Hero />
      <PatternDivider />
      <About />
      <PatternDivider />
      <Features />
      <PatternDivider />
      <Integrations />
      <PatternDivider />
      <Pricing />
      <PatternDivider />
      <Testimonial />
      <PatternDivider />
      <FAQ />
      <PatternDivider />
      <CTA />
      <PatternDivider />
    </>
  )
}

export default HomePage;
