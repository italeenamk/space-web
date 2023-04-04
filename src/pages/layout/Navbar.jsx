import '../style/navbar.css';

const Navbar = () => {
  return(
      <>
          <section className="navbar-content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-12">
                          <nav className="navbar navbar-expand-md ">
                              <a className="navbar-brand" href="#">Space<i className="fa-solid fa-circle"></i></a>
                              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                  <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                  <div className="mr-auto"></div>
                                  <ul className="navbar-nav">
                                      <li className="nav-item">
                                          <a className="nav-link" href="#">Home</a>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="#">Portfolio</a>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="#">Services</a>
                                      </li>
                                      <li className="nav-item">
                                          <div className="dropdown">
                                              <a type="" className=" dropdown-toggle"
                                                      data-toggle="dropdown">
                                                  About
                                              </a>
                                              <div className="dropdown-menu">
                                                  <a className="dropdown-item" href="#">Elements</a>
                                                  <a className="dropdown-item" href="#">Menu Two</a>
                                                  <a className="dropdown-item" href="#">Sub Menu One</a>
                                                  <a className="dropdown-item" href="#">Menu Three</a>
                                              </div>
                                          </div>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="#">Contact us</a>
                                      </li>
                                  </ul>
                              </div>
                          </nav>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Navbar;