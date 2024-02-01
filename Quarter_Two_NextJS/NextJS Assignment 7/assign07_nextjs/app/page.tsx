import Image from 'next/image'

export default function Home() {
  return (
    <body data-spy="scroll" data-target=".navbar" data-offset="51">
      <!-- Navbar Start -->
      <nav class="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
        <a href="index.html" class="navbar-brand ml-lg-3">
          <h1 class="m-0 display-5"><span class="text-primary">Irfan</span>Chatha</h1>
        </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse px-lg-3" id="navbarCollapse">
          <div class="navbar-nav m-auto py-0">
            <a href="#home" class="nav-item nav-link active">Home</a>
            <a href="#about" class="nav-item nav-link">About</a>
            <a href="#qualification" class="nav-item nav-link">Background</a>
            <a href="#skill" class="nav-item nav-link">Skill</a>
            <a href="#service" class="nav-item nav-link">Services</a>
            <a href="#portfolio" class="nav-item nav-link">Work</a>
            <a href="#testimonial" class="nav-item nav-link">Reviews</a>
            <a href="#blog" class="nav-item nav-link">Blog</a>
            <a href="#contact" class="nav-item nav-link">Contact</a>
          </div>
          <a href="" class="btn btn-outline-primary d-none d-lg-block">Hire Me</a>
        </div>
      </nav>
      <!-- Navbar End -->


      <!-- Video Modal Start -->
      <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="" id="video" allowscriptaccess="always"
                  allow="autoplay"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Video Modal End -->

      <!-- Header Start -->
      <div class="container-fluid bg-dark d-flex align-items-center mb-5 py-5" id="home" style="min-height: 100vh;">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0" data-aos="fade-right" data-aos-duration="3000">
              <img class="img-fluid w-100 rounded-circle shadow-sm person_image" src="img/person.png" alt="">
            </div>
            <div class="col-lg-7 text-center text-lg-left" data-aos="fade-left" data-aos-duration="3000">
              <h3 class="text-white font-weight-normal mb-3">I'm</h3>
              <h1 class="display-3 text-uppercase text-primary mb-2" style="-webkit-text-stroke: 2px #ffffff;">
                Irfan M. Chatha</h1>
              <h1 class="typed-text-output d-inline font-weight-lighter text-white"></h1>
              <div class="typed-text d-none"> Website Designer, Web and Mobile App Developer, NextJS Expert</div>
              <div class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <a href="" class="btn btn-outline-light mr-5">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Header End -->


      <!-- About Start -->
      <div class="container-fluid py-5" id="about">
        <div class="container">
          <div class="position-relative d-flex align-items-center justify-content-center" data-aos-duration="3000"
            data-aos="zoom-in-down">
            <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">About</h1>
            <h1 class="position-absolute text-uppercase text-primary">About Me</h1>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-5 pb-4 pb-lg-0" data-aos="zoom-out-right" data-aos-duration="3000">
              <img class="img-fluid rounded w-100" src="img/personx.jpg" alt="">
            </div>
            <div class="col-lg-7" data-aos="zoom-out-left" data-aos-duration="3000">
              <h3 class="mb-4">Mobile App Developer</h3>
              <p>I'm Muhammad Souhaib
                from Karachi, Pakistan. I am doing bachelor's of software engineering from SMIU since 2020.
                I specialize in creating websites and applications using Front-end Technologies HTML/CSS/JS ,
                React JS , React Native and different more frameworks/libraries.
                I have been working as a React Native Developer for 2 years and have developed several
                mobile applications.</p>
              <div class="row mb-3">
                <div class="col-sm-6 py-2">
                  <h6>Name: <span class="text-secondary">Muhammad Souhaib</span></h6>
                </div>
                <div class="col-sm-6 py-2">
                  <h6>Degree: <span class="text-secondary">BSSE</span></h6>
                </div>
                <div class="col-sm-6 py-2">
                  <h6>Experience: <span class="text-secondary">2 Years</span></h6>
                </div>
                <div class="col-sm-6 py-2">
                  <h6>Phone: <span class="text-secondary">+300 000 000</span></h6>
                </div>
                <div class="col-sm-6 py-2">
                  <h6>Email: <span class="text-secondary">souhaib@gmail.com</span></h6>
                </div>
                <div class="col-sm-6 py-2">
                  <h6>Address: <span class="text-secondary">Karachi , Pakistan</span></h6>
                </div>
              </div>
              <a href="" class="btn btn-outline-primary mr-4">Hire Me</a>
              <a href="" class="btn btn-outline-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <!-- About End -->


      <!-- Qualification Start -->
      <div class="container-fluid py-5" id="qualification">
        <div class="container">
          <div class="position-relative d-flex align-items-center justify-content-center" data-aos-duration="3000"
            data-aos="zoom-in-down">
            <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Quality</h1>
            <h1 class="position-absolute text-uppercase text-primary">Education & Expericence</h1>
          </div>
          <div class="row align-items-center" data-aos="fade-up" data-aos-duration="3000">
            <div class="col-lg-6">
              <h3 class="mb-4">My Education</h3>
              <div class="border-left border-primary pt-2 pl-4 ml-2">
                <div class="position-relative mb-4">
                  <i class="far fa-dot-circle text-primary position-absolute"
                    style="top: 2px; left: -32px;"></i>
                  <h5 class="font-weight-bold mb-1">Bachelors</h5>
                  <p class="mb-2"><strong>University Name</strong> | <small>2000 - 2050</small></p>
                  <p>description ...</p>
                </div>
                <div class="position-relative mb-4">
                  <i class="far fa-dot-circle text-primary position-absolute"
                    style="top: 2px; left: -32px;"></i>
                  <h5 class="font-weight-bold mb-1">Intermediate</h5>
                  <p class="mb-2"><strong>College Name</strong> | <small>2000 - 2050</small></p>
                  <p>description ...</p>
                </div>
                <div class="position-relative mb-4">
                  <i class="far fa-dot-circle text-primary position-absolute"
                    style="top: 2px; left: -32px;"></i>
                  <h5 class="font-weight-bold mb-1">Matriculation</h5>
                  <p class="mb-2"><strong>School Name</strong> | <small>2000 - 2050</small></p>
                  <p>description ...</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <h3 class="mb-4">My Experience</h3>
              <div class="border-left border-primary pt-2 pl-4 ml-2">
                <div class="position-relative mb-4">
                  <i class="far fa-dot-circle text-primary position-absolute"
                    style="top: 2px; left: -32px;"></i>
                  <h5 class="font-weight-bold mb-1">App Developer</h5>
                  <p class="mb-2"><strong>Company Name</strong> | <small>2000 - 2050</small></p>
                  <p>skills / projects description which you've learned / worked on.</p>
                </div>
                <div class="position-relative mb-4">
                  <i class="far fa-dot-circle text-primary position-absolute"
                    style="top: 2px; left: -32px;"></i>
                  <h5 class="font-weight-bold mb-1">Web Developer</h5>
                  <p class="mb-2"><strong>Company Name</strong> | <small>2000 - 2050</small></p>
                  <p>skills / projects description which you've learned / worked on.</p>
                </div>
                <div class="position-relative mb-4">
                  <i class="far fa-dot-circle text-primary position-absolute"
                    style="top: 2px; left: -32px;"></i>
                  <h5 class="font-weight-bold mb-1">Web Designer</h5>
                  <p class="mb-2"><strong>Company Name</strong> | <small>2000 - 2050</small></p>
                  <p>skills / projects description which you've learned / worked on.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Qualification End -->


      <!-- Skill Start -->
      <div class="container-fluid py-5" id="skill">
        <div class="container">
          <div class="position-relative d-flex align-items-center justify-content-center" data-aos-duration="3000"
            data-aos="zoom-in-down">
            <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Skills</h1>
            <h1 class="position-absolute text-uppercase text-primary">My Skills</h1>
          </div>
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="skill mb-4">
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold">HTML</h6>
                  <h6 class="font-weight-bold">95%</h6>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
              <div class="skill mb-4">
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold">CSS</h6>
                  <h6 class="font-weight-bold">85%</h6>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-primary " role="progressbar" aria-valuenow="85"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="skill mb-4">
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold">PHP</h6>
                  <h6 class="font-weight-bold">90%</h6>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="skill mb-4">
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold">Javascript</h6>
                  <h6 class="font-weight-bold">90%</h6>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
              <div class="skill mb-4">
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold">Angular JS</h6>
                  <h6 class="font-weight-bold">95%</h6>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
              <div class="skill mb-4">
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold">React Native</h6>
                  <h6 class="font-weight-bold">95%</h6>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Skill End -->


      <!-- Services Start -->
      <div class="container-fluid pt-5" id="service">
        <div class="container">
          <div class="position-relative d-flex align-items-center justify-content-center" data-aos-duration="3000"
            data-aos="zoom-in-down">
            <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Service</h1>
            <h1 class="position-absolute text-uppercase text-primary">My Services</h1>
          </div>
          <div class="row pb-3">
            <div class="col-lg-4 col-md-6 text-center mb-5">
              <div class="d-flex align-items-center justify-content-center mb-4">
                <i data-aos="flip-left" data-aos-duration="3000"
                  class="fa fa-2x fa-laptop service-icon bg-primary text-white mr-3"></i>
                <h4 class="font-weight-bold m-0">Web Design</h4>
              </div>
              <p>description about your service</p>
              <a class="border-bottom border-primary text-decoration-none" href="">Read More</a>
            </div>
            <div class="col-lg-4 col-md-6 text-center mb-5">
              <div class="d-flex align-items-center justify-content-center mb-4">
                <i data-aos="flip-left" data-aos-duration="3000"
                  class="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3"></i>
                <h4 class="font-weight-bold m-0">Web Development</h4>
              </div>
              <p>description about your service</p>
              <a class="border-bottom border-primary text-decoration-none" href="">Read More</a>
            </div>
            <div class="col-lg-4 col-md-6 text-center mb-5">
              <div class="d-flex align-items-center justify-content-center mb-4">
                <i data-aos="flip-left" data-aos-duration="3000"
                  class="fab fa-2x fa-android service-icon bg-primary text-white mr-3"></i>
                <h4 class="font-weight-bold m-0">Apps Design</h4>
              </div>
              <p>description about your service</p>
              <a class="border-bottom border-primary text-decoration-none" href="">Read More</a>
            </div>
            <div class="col-lg-4 col-md-6 text-center mb-5">
              <div class="d-flex align-items-center justify-content-center mb-4">
                <i data-aos="flip-left" data-aos-duration="3000"
                  class="fab fa-2x fa-apple service-icon bg-primary text-white mr-3"></i>
                <h4 class="font-weight-bold m-0">Apps Development</h4>
              </div>
              <p>description about your service</p>
              <a class="border-bottom border-primary text-decoration-none" href="">Read More</a>
            </div>
            <div class="col-lg-4 col-md-6 text-center mb-5">
              <div class="d-flex align-items-center justify-content-center mb-4">
                <i data-aos="flip-left" data-aos-duration="3000"
                  class="fa fa-2x fa-search service-icon bg-primary text-white mr-3"></i>
                <h4 class="font-weight-bold m-0">SEO</h4>
              </div>
              <p>description about your service</p>
              <a class="border-bottom border-primary text-decoration-none" href="">Read More</a>
            </div>
            <div class="col-lg-4 col-md-6 text-center mb-5">
              <div class="d-flex align-items-center justify-content-center mb-4">
                <i data-aos="flip-left" data-aos-duration="3000"
                  class="fa fa-2x fa-edit service-icon bg-primary text-white mr-3"></i>
                <h4 class="font-weight-bold m-0">Content Creating</h4>
              </div>
              <p>description about your service</p>
              <a class="border-bottom border-primary text-decoration-none" href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <!-- Services End -->


      <!-- Portfolio Start -->
      <div class="container-fluid pt-5 pb-3" id="portfolio">
        <div class="container">
          <div class="position-relative d-flex align-items-center justify-content-center" data-aos-duration="3000"
            data-aos="zoom-in-down">
            <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Portfolio</h1>
            <h1 class="position-absolute text-uppercase text-primary">My Portfolio</h1>
          </div>
          <div class="row">
            <div class="col-12 text-center mb-2">
              <ul class="list-inline mb-4" id="portfolio-flters">
                <li class="btn btn-sm btn-outline-primary m-1 active" data-filter="*">All</li>
                <li class="btn btn-sm btn-outline-primary m-1" data-filter=".first">Design</li>
                <li class="btn btn-sm btn-outline-primary m-1" data-filter=".second">Development</li>
                <li class="btn btn-sm btn-outline-primary m-1" data-filter=".third">Marketing</li>
              </ul>
            </div>
          </div>
          <div class="row portfolio-container">
            <div class="col-lg-4 col-md-6 mb-4 portfolio-item first">
              <div class="position-relative overflow-hidden mb-2">
                <img class="img-fluid rounded w-100" src="img/portfolio-1.jpg" alt="">
                  <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                    <a href="img/portfolio-1.jpg" data-lightbox="portfolio">
                      <i class="fa fa-plus text-white" style="font-size: 60px;"></i>
                    </a>
                  </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 portfolio-item second">
              <div class="position-relative overflow-hidden mb-2">
                <img class="img-fluid rounded w-100" src="img/portfolio-2.jpg" alt="">
                  <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                    <a href="img/portfolio-2.jpg" data-lightbox="portfolio">
                      <i class="fa fa-plus text-white" style="font-size: 60px;"></i>
                    </a>
                  </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 portfolio-item third">
              <div class="position-relative overflow-hidden mb-2">
                <img class="img-fluid rounded w-100" src="img/portfolio-3.jpg" alt="">
                  <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                    <a href="img/portfolio-3.jpg" data-lightbox="portfolio">
                      <i class="fa fa-plus text-white" style="font-size: 60px;"></i>
                    </a>
                  </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 portfolio-item first">
              <div class="position-relative overflow-hidden mb-2">
                <img class="img-fluid rounded w-100" src="img/portfolio-4.jpg" alt="">
                  <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                    <a href="img/portfolio-4.jpg" data-lightbox="portfolio">
                      <i class="fa fa-plus text-white" style="font-size: 60px;"></i>
                    </a>
                  </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 portfolio-item second">
              <div class="position-relative overflow-hidden mb-2">
                <img class="img-fluid rounded w-100" src="img/portfolio-5.jpg" alt="">
                  <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                    <a href="img/portfolio-5.jpg" data-lightbox="portfolio">
                      <i class="fa fa-plus text-white" style="font-size: 60px;"></i>
                    </a>
                  </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 portfolio-item third">
              <div class="position-relative overflow-hidden mb-2">
                <img class="img-fluid rounded w-100" src="img/portfolio-6.jpg" alt="">
                  <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                    <a href="img/portfolio-6.jpg" data-lightbox="portfolio">
                      <i class="fa fa-plus text-white" style="font-size: 60px;"></i>
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Portfolio End -->


      <!-- Testimonial Start -->
      <div class="container-fluid py-5" id="testimonial">
        <div class="container">
          <div class="position-relative d-flex align-items-center justify-content-center" data-aos-duration="3000"
            data-aos="zoom-in-down">
            <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Reviews</h1>
            <h1 class="position-absolute text-uppercase text-primary">Reviews</h1>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="owl-carousel testimonial-carousel">
                <div class="text-center">
                  <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
                  <h4 class="font-weight-light mb-4">Working with dev_display has been an amazing experience
                    for me. I'll suggest this guy for any of the professional work related to IT services.
                    This guy is definitely a perfect choice for building your brand.</h4>
                  <img class="img-fluid rounded-circle mx-auto mb-3" src="img/testimonial-1.jpg"
                    style="width: 80px; height: 80px;">
                    <h5 class="font-weight-bold m-0">Client Name</h5>
                    <span>Profession</span>
                </div>
                <div class="text-center">
                  <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
                  <h4 class="font-weight-light mb-4">Working with dev_display has been an amazing experience
                    for me. I'll suggest this guy for any of the professional work related to IT services.
                    This guy is definitely a perfect choice for building your brand.</h4>
                  <img class="img-fluid rounded-circle mx-auto mb-3" src="img/testimonial-2.jpg"
                    style="width: 80px; height: 80px;">
                    <h5 class="font-weight-bold m-0">Client Name</h5>
                    <span>Profession</span>
                </div>
                <div class="text-center">
                  <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
                  <h4 class="font-weight-light mb-4">Working with dev_display has been an amazing experience
                    for me. I'll suggest this guy for any of the professional work related to IT services.
                    This guy is definitely a perfect choice for building your brand.</h4>
                  <img class="img-fluid rounded-circle mx-auto mb-3" src="img/testimonial-3.jpg"
                    style="width: 80px; height: 80px;">
                    <h5 class="font-weight-bold m-0">Client Name</h5>
                    <span>Profession</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Testimonial End -->


      <!-- Blog Start -->
      <div class="container-fluid pt-5" id="blog">
        <div class="container">
          <div class="position-relative d-flex align-items-center justify-content-center" data-aos-duration="3000"
            data-aos="zoom-in-down">
            <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Blog</h1>
            <h1 class="position-absolute text-uppercase text-primary">Latest Blog</h1>
          </div>
          <div class="row">
            <div class="col-lg-4 mb-5">
              <div class="position-relative mb-4">
                <img class="img-fluid rounded w-100" src="img/blog-1.jpg" alt="">
                  <div class="blog-date">
                    <h4 class="font-weight-bold mb-n1">01</h4>
                    <small class="text-white text-uppercase">Jan</small>
                  </div>
              </div>
              <h5 class="font-weight-medium mb-4">Time management in studies</h5>
              <a class="btn btn-sm btn-outline-primary py-2" href="">Read More</a>
            </div>
            <div class="col-lg-4 mb-5">
              <div class="position-relative mb-4">
                <img class="img-fluid rounded w-100" src="img/blog-2.jpg" alt="">
                  <div class="blog-date">
                    <h4 class="font-weight-bold mb-n1">01</h4>
                    <small class="text-white text-uppercase">Jan</small>
                  </div>
              </div>
              <h5 class="font-weight-medium mb-4">Importance of team work</h5>
              <a class="btn btn-sm btn-outline-primary py-2" href="">Read More</a>
            </div>
            <div class="col-lg-4 mb-5">
              <div class="position-relative mb-4">
                <img class="img-fluid rounded w-100" src="img/blog-3.jpg" alt="">
                  <div class="blog-date">
                    <h4 class="font-weight-bold mb-n1">01</h4>
                    <small class="text-white text-uppercase">Jan</small>
                  </div>
              </div>
              <h5 class="font-weight-medium mb-4">The growing era of tech</h5>
              <a class="btn btn-sm btn-outline-primary py-2" href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <!-- Blog End -->


      <!-- Contact Start -->
      <div class="container-fluid py-5" id="contact">
        <div class="container">
          <div class="position-relative d-flex align-items-center justify-content-center" data-aos-duration="3000"
            data-aos="zoom-in-down">
            <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Contact</h1>
            <h1 class="position-absolute text-uppercase text-primary">Contact Me</h1>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="contact-form text-center">
                <div id="success"></div>
                <form name="sentMessage" id="contactForm" novalidate="novalidate">
                  <div class="form-row">
                    <div class="control-group col-sm-6">
                      <input type="text" class="form-control p-4" id="name" placeholder="Your Name"
                        required="required" data-validation-required-message="Please enter your name" />
                      <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group col-sm-6">
                      <input type="email" class="form-control p-4" id="email" placeholder="Your Email"
                        required="required"
                        data-validation-required-message="Please enter your email" />
                      <p class="help-block text-danger"></p>
                    </div>
                  </div>
                  <div class="control-group">
                    <input type="text" class="form-control p-4" id="subject" placeholder="Subject"
                      required="required" data-validation-required-message="Please enter a subject" />
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="control-group">
                    <textarea class="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter your message"></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                  <div>
                    <button class="btn btn-outline-primary" type="submit" id="sendMessageButton">Send
                      Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Contact End -->


      <!-- Footer Start -->
      <div class="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div class="container text-center py-5">
          <div class="d-flex justify-content-center mb-4">
            <a class="btn btn-light btn-social mr-2" href="#"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-light btn-social mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-light btn-social mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
            <a class="btn btn-light btn-social" href="#"><i class="fab fa-instagram"></i></a>
          </div>
          <div class="d-flex justify-content-center mb-3">
            <a class="text-white" href="#">Privacy</a>
            <span class="px-3">|</span>
            <a class="text-white" href="#">Terms</a>
            <span class="px-3">|</span>
            <a class="text-white" href="#">FAQs</a>
            <span class="px-3">|</span>
            <a class="text-white" href="#">Help</a>
          </div>
          <p class="m-0">&copy; <a class="text-white font-weight-bold" href="#"></a>. All Rights Reserved. Designed by
            <a class="text-white font-weight-bold" href="https://github.com/Souhaib-789"> Muhammad Souhaib</a>
          </p>
        </div>
      </div>
      <!-- Footer End -->

      <!-- Scroll to Bottom -->
      <i class="fa fa-2x fa-angle-down text-white scroll-to-bottom"></i>

      <!-- Back to Top -->
      <a href="#" class="btn btn-outline-dark px-0 back-to-top"><i class="fa fa-angle-double-up"></i></a>


      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
      <script src="lib/typed/typed.min.js"></script>
      <script src="lib/easing/easing.min.js"></script>
      <script src="lib/waypoints/waypoints.min.js"></script>
      <script src="lib/owlcarousel/owl.carousel.min.js"></script>
      <script src="lib/isotope/isotope.pkgd.min.js"></script>
      <script src="lib/lightbox/js/lightbox.min.js"></script>

      <script src="mail/jqBootstrapValidation.min.js"></script>
      <script src="mail/contact.js"></script>

      <script src="js/main.js"></script>
      <script>
        AOS.init();
      </script>
    </body>
  )
}
