import '../style/blog.css';



const Blog = () => {
  return(
      <>
          <section className="blog-main-content">
              <div className="main-heading-content mt-5">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-12 text-center">
                              <div className="main-heading">
                                  <h3>Blog Posts</h3>
                                  <p>News & Updates</p>
                                  <div className="waves-content">
                                      <i className="fa-solid fa-wave-square"></i><i className="fa-solid fa-wave-square"></i><i className="fa-solid fa-wave-square"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="blog-colum-main-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-3 col-sm-12">
                              <div className="blog-content">
                                  <div className="portfolio-design-content">
                                      <div className="portfolio-img-content">
                                          <img src="https://preview.colorlib.com/theme/space/images/gal_1.jpg.webp" alt="" className="img-fluid"/>
                                      </div>
                                  </div>
                                  <h3> Separated they live in</h3>
                                  <p>Aug 4, 2020 by <span>Admin</span> in <span>Web Design</span></p>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12">
                              <div className="blog-content">
                                  <div className="portfolio-design-content">
                                      <div className="portfolio-img-content">
                                          <img src="https://preview.colorlib.com/theme/space/images/gal_2.jpg.webp" alt="" className="img-fluid"/>
                                      </div>
                                  </div>
                                  <h3> Separated they live in</h3>
                                  <p>Aug 4, 2020 by <span>Admin</span> in <span>Web Design</span></p>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12">
                              <div className="blog-content">
                                  <div className="portfolio-design-content">
                                      <div className="portfolio-img-content">
                                          <img src="https://preview.colorlib.com/theme/space/images/gal_3.jpg.webp" alt="" className="img-fluid"/>
                                      </div>
                                  </div>
                                  <h3> Separated they live in</h3>
                                  <p>Aug 4, 2020 by <span>Admin</span> in <span>Web Design</span></p>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12">
                              <div className="blog-content">
                                  <div className="portfolio-design-content">
                                      <div className="portfolio-img-content">
                                          <img src="https://preview.colorlib.com/theme/space/images/gal_4.jpg.webp" alt="" className="img-fluid"/>
                                      </div>
                                  </div>
                                  <h3> Separated they live in</h3>
                                  <p>Aug 4, 2020 by <span>Admin</span> in <span>Web Design</span></p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Blog;