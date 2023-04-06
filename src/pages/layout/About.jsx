import '../style/about.css';


const About = () => {
  return(
      <>
          <section className="about-main-content">
              <div className="about-heading-content mt-5">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-6 col-sm-12 text-left">
                              <div className="main-heading">
                                  <h3>About</h3>
                                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                  <div className="waves-content">
                                      <i className="fa-solid fa-wave-square"></i><i className="fa-solid fa-wave-square"></i><i className="fa-solid fa-wave-square"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="about-me-main-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-6 col-sm-12">
                              <div className="about-me-img-background-content">
                                  <div className="reveal-content">
                                      <img src="https://preview.colorlib.com/theme/space/images/about_pic.jpg.webp" alt="" className="img-fluid"/>
                                  </div>
                              </div>
                              <div className="experience-main-content">
                                  <span>12 Years of experience</span>
                                  <a href=""> See portfolio</a>
                                  <a href="">  Download my CV</a>
                              </div>
                          </div>
                          <div className="col-md-6 col-sm-12"></div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default About;