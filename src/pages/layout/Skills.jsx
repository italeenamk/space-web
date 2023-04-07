import '../style/skills.css';


const Skills = () => {
  return(
      <>
          <section className="skills-main-content">
              <div className="main-heading-content mt-5">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-12 text-center">
                              <div className="main-heading">
                                  <h3>Skills</h3>
                                  <p>The skills to pay the bills.</p>
                                  <div className="waves-content">
                                      <i className="fa-solid fa-wave-square"></i><i className="fa-solid fa-wave-square"></i><i className="fa-solid fa-wave-square"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="skills-percentage-main-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-3 col-sm-12">
                              <div className="skills-percentage-content">
                                  <div className="circle-border-content">hjh</div>
                                  <h3>98%</h3>
                                  <p>WordPress</p>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12"></div>
                          <div className="col-md-3 col-sm-12"></div>
                          <div className="col-md-3 col-sm-12"></div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Skills;