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
                                  <a href=""><i className="fa-solid fa-arrow-right"></i> See portfolio</a>
                                  <a href=""><i className="fa-solid fa-arrow-right"></i>  Download my CV</a>
                              </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                              <div className="about-me-information-content">
                                  <div className="bio-content">
                                      <h3>Bio</h3>
                                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                          Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                          It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                  </div>
                                  <div className="work-experience-main-content mt-5">
                                      <div className="bio-content">
                                          <h3>Work Experience</h3>
                                      </div>
                                      <div className="row">
                                          <div className="col-md-6 col-sm-12">
                                              <div className="experience-content"></div>
                                          </div>
                                          <div className="col-md-6 col-sm-12"></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default About;