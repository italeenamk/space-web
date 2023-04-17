import '../style/sidebar.css';
import '../style/mobilescreen.css';


const Sidebar = () => {
  return(
      <>
          <section className="sidebar-content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="sidebar-heading-content">
                              <h3>Hey! I'm <span>Space <i className="fa-solid fa-circle"></i></span></h3>
                              <p>A minimal, clean, and AJAX driven free portfolio template created by the fine folks at Colorlib.</p>
                              <button>More free templates here</button>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Sidebar;