import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Img_slider from "../layout/Img_slider";
import Services from "../layout/services";
import About from "../layout/About";
import Skills from "../layout/Skills";
import Testimonials from "../layout/Testimonials";


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
      </>
  )
}

export default Home;