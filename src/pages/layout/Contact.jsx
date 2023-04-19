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
                              <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d184664.29270804388!2d73.2984789!3d33.6235632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfe275bbf1166b%3A0x81b683113403166f!2sKahuta%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e1!3m2!1sen!2s!4v1681914122773!5m2!1sen!2s"
                                  width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"></iframe>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Contact;