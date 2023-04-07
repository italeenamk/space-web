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
                          <div className="col-md-3 text-center col-sm-12">
                              <div className="skills-percentage-content">
                                  <div className="circle-border-content">
                                      <div className="circle-wrap">
                                          <div className="circle">

                                              <div className="mask full">
                                                  <div className="fill"></div>
                                              </div>

                                              <div className="mask half">
                                                  <div className="fill"></div>
                                              </div>

                                              <div className="inside-circle">
                                                  98%
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                                  <p>WordPress</p>
                              </div>
                          </div>
                          <div className="col-md-3 text-center col-sm-12">
                              <div className="skills-percentage-content">
                                  <div className="circle-border-content">
                                      <div className="circle-wrap">
                                          <div className="circle">

                                              <div className="mask full" style={{transform:"rotate(159deg)"}}>
                                                  <div className="fill"></div>
                                              </div>

                                              <div className="mask half">
                                                  <div className="fill"></div>
                                              </div>

                                              <div className="inside-circle">
                                                  95%
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                                  <p>Web Design</p>
                              </div>
                          </div>
                          <div className="col-md-3 text-center col-sm-12">
                              <div className="skills-percentage-content">
                                  <div className="circle-border-content">
                                      <div className="circle-wrap">
                                          <div className="circle">

                                              <div className="mask full" style={{transform:"rotate(141deg)"}}>
                                                  <div className="fill"></div>
                                              </div>

                                              <div className="mask half">
                                                  <div className="fill"></div>
                                              </div>

                                              <div className="inside-circle">
                                                  89%
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                                  <p>Web/Mobile App</p>
                              </div>
                          </div>
                          <div className="col-md-3 text-center col-sm-12">
                              <div className="skills-percentage-content">
                                  <div className="circle-border-content">
                                      <div className="circle-wrap">
                                          <div className="circle">

                                              <div className="mask full" style={{transform:"rotate(146deg)"}}>
                                                  <div className="fill"></div>
                                              </div>

                                              <div className="mask half">
                                                  <div className="fill"></div>
                                              </div>

                                              <div className="inside-circle">
                                                  85%
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                                  <p>Photoshop</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Skills;