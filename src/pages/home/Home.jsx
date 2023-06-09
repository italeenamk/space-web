import '../style/mobilescreen.css';
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Img_slider from "../layout/Img_slider";
import Services from "../layout/services";
import About from "../layout/About";
import Skills from "../layout/Skills";
import Testimonials from "../layout/Testimonials";
import Blog from "../layout/Blog";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";


const Home = () => {
  return(
      <>
          <Navbar/>
          <Sidebar/>
          <Img_slider/>
          <Services/>
          <About/>
          <Skills/>
          <Testimonials/>
          <Blog/>
          <Contact/>
          <Footer/>
      </>
  )
}

export default Home;