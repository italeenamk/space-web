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
                          <div className="col-md-6 col-sm-12"></div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Contact;