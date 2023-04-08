import '../style/footer.css';


const Footer = () => {
  return(
      <>
          <section className="footer-main-content">
              <div className="footer-list-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-3 col-sm-12">
                              <div className="list-colum-content">
                                  <h3>Home</h3>
                                  <nav>
                                      <ul>
                                          <li><a href="">Colorlib</a></li>
                                          <li><a href="">About us</a></li>
                                          <li><a href="">Projects</a></li>
                                          <li><a href="">Services</a></li>
                                          <li><a href="">Terms</a></li>
                                          <li><a href="">Privacy</a></li>
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12">
                              <div className="list-colum-content">
                                  <h3>Projects</h3>
                                  <nav>
                                      <ul>
                                          <li><a href="">HTML5</a></li>
                                          <li><a href="">CSS3</a></li>
                                          <li><a href="">Colorlib</a></li>
                                          <li><a href="">Free Templates</a></li>
                                          <li><a href="">WordPress Themes</a></li>
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12">
                              <div className="list-colum-content">
                                  <h3>Services</h3>
                                  <nav>
                                      <ul>
                                          <li><a href="">Colorlib</a></li>
                                          <li><a href="">jQuery</a></li>
                                          <li><a href="">Bootstrap</a></li>
                                          <li><a href="">Freebies</a></li>
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12">
                              <div className="list-colum-content">
                                  <h3>Contact</h3>
                                  <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                                  <nav>
                                      <ul>
                                          <li><a href="">+1(123)-456-7890</a></li>
                                          <li><a href="">+1(123)-456-7890</a></li>
                                          <li><a href="">info@mydomain.com</a></li>
                                      </ul>
                                  </nav>
                              </div>
                              <div className="list-colum-content mt-5">
                                  <h3>Connect</h3>
                                  <div className="icon-list-content">
                                      <i className="fa-brands fa-instagram"></i>
                                      <i className="fa-brands fa-twitter"></i>
                                      <i className="fa-brands fa-facebook"></i>
                                      <i className="fa-brands fa-linkedin-in"></i>
                                      <i className="fa-brands fa-pinterest"></i>
                                      <i className="fa-brands fa-dribbble"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="footer-copy-link-main-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-12 text-center">
                              <div className="copy-link">
                                  <p>Copyright ©2023 All rights reserved | This template is made with <i
                                      className="fa-solid fa-heart"></i> by <span>Colorlib</span></p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Footer;