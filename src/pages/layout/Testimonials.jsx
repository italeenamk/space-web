import '../style/testimonial.css';


const Testimonials = () => {
  return(
      <>
          <section className="testimonials-main-content">
              <div className="main-heading-content mt-5">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-12 text-center">
                              <div className="main-heading">
                                  <h3>Testimonials</h3>
                                  <p>What clients say...</p>
                                  <div className="waves-content">
                                      <i className="fa-solid fa-wave-square"></i><i className="fa-solid fa-wave-square"></i><i className="fa-solid fa-wave-square"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="testimonial-card-main-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-4 col-sm-12 text-center">
                              <div className="testimonial-card">
                                  <div className="card">
                                      <div className="testimonial-information-content">
                                          <img src="https://preview.colorlib.com/theme/space/images/person_3.jpg.webp" alt=""/>
                                          <h3>James Smith</h3>
                                          <span>CEO & Co-Founder</span>
                                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                                              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4 col-sm-12 text-center">
                              <div className="testimonial-card">
                                  <div className="card">
                                      <div className="testimonial-information-content">
                                          <img src="https://preview.colorlib.com/theme/space/images/person_4.jpg.webp" alt=""/>
                                          <h3>James Smith</h3>
                                          <span>CEO & Co-Founder</span>
                                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                                              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4 col-sm-12 text-center">
                              <div className="testimonial-card">
                                  <div className="card">
                                      <div className="testimonial-information-content">
                                          <img src="https://preview.colorlib.com/theme/space/images/person_1.jpg.webp" alt=""/>
                                          <h3>James Smith</h3>
                                          <span>CEO & Co-Founder</span>
                                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                                              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
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

export default Testimonials;