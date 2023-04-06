import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Img_slider from "../layout/Img_slider";
import Services from "../layout/services";
import About from "../layout/About";


const Home = () => {
  return(
      <>
          <Navbar/>
          <Sidebar/>
          <Img_slider/>
          <Services/>
          <About/>
      </>
  )
}

export default Home;