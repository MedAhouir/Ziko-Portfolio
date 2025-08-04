import About from "@/components/About";
import Collections from "@/components/Collections";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Rapper from "@/components/Rapper";

export default function Home() {
  return (
    <Rapper className="bg-black" >
      <Navbar />
      <Hero />
      <About />
      <Collections />
      <Footer />
    </Rapper>
  );
}
