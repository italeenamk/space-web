import '../style/contact.css';



const Contact = () => {
  return(
      <>
          <section className="contact-main-content">
              <div className="main-heading-content mt-5">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-12 text-center">
                              <div className="main-heading">
                                  <h3>Contact</h3>
                                  <p>Available for work. Get in touch</p>
                                  <div className="waves-content">
                                      <i className="fa-solid fa-wave-square"></i><i className="fa-solid fa-wave-square"></i><i className="fa-solid fa-wave-square"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="contact-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-6 col-sm-12">
                              <div className="contact-form-content">
                                  <div className="colum-input-content">
                                      <div className="row">
                                          <div className="col-md-6 col-sm-12">
                                              <div className="email-input-content">
                                                  <input type="text" name="text" placeholder="Firstname"/>
                                              </div>
                                          </div>
                                          <div className="col-md-6 col-sm-12">
                                              <div className="email-input-content">
                                                  <input type="text" name="text" placeholder="Lastname"/>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="email-input-content">
                                      <input type="email" name="email" placeholder="Email address"/>
                                  </div>
                                  <div className="message-content">
                                      <textarea name="text" id="" cols="10" rows="10" placeholder="Write your message..."></textarea>
                                  </div>
                                  <button>Send Message</button>
                              </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                              <div className="contact-map-content">
                                  <div className="row">
                                      <div className="col-md-8 col-sm-12">
                                          <div className="contact-me-location-content">
                                              <div className="card">
                                                  <div className="row">
                                                      <div className="col-md-8 col-sm-12">
                                                          <div className="contact-page-card-left-content">
                                                              <h4>Margarita Anthoine</h4>
                                                              <p>11 W 81st St, New York, NY 10024, United States</p>
                                                              <span>View larger map</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-4 col-sm-12 text-center">
                                                          <div className="contact-page-right-content">
                                                              <i className="fa-solid fa-signs-post fa-1x"></i>
                                                              <div className="contact-page-card-left-content">
                                                                  <span>Direction</span>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-4 col-sm-12"></div>
                                  </div>
                                  <div className="contact-me-bottom-content">
                                      <div className="row">
                                          <div className="col-md-6">
                                              <div className="contact-me-bottom-map-content">
                                                  <img src="http://localhost:3001/static/media/Screen-Shot-2016-06-23-at-3.31.37-PM.d08848629f50dc4d001f.jpg" alt=""/>
                                              </div>
                                          </div>
                                          <div className="col-md-6 text-right">
                                              <div className="contact-me-bottom-right-content">
                                                  <div className="card">
                                                      <i className="fa-solid fa-plus fa-1x"></i>
                                                      <hr/>
                                                      <i className="fa-solid fa-minus fa-1x"></i>
                                                  </div>
                                              </div>
                                          </div>
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

export default Contact;