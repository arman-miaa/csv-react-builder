import Contact from "../components/Contact";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
      <div className="">
          <Navbar />
          <FaqSection />
          <Contact />
          <Footer/>
    </div>
  )
}
