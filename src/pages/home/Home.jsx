import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Img_slider from "../layout/Img_slider";
import Services from "../layout/services";


const Home = () => {
  return(
      <>
          <Navbar/>
          <Sidebar/>
          <Img_slider/>
          <Services/>
      </>
  )
}

export default Home;