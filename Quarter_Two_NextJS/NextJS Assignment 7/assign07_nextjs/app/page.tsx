import Image from 'next/image'
import IrfanImage from '../app/img/person.png'

export default function Home() {
  return (
    <>
      {/* Navbar Start */}
      <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
        <a href="index.html" className="navbar-brand ml-lg-3">
          <h1 className="m-0 display-5">
            <span className="text-primary">Irfan</span>Chatha
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
          <div className="navbar-nav m-auto py-0">
            <a href="#home" className="nav-item nav-link active">
              Home
            </a>
            <a href="#about" className="nav-item nav-link">
              About
            </a>
            <a href="#qualification" className="nav-item nav-link">
              Background
            </a>
            <a href="#skill" className="nav-item nav-link">
              Skill
            </a>
            <a href="#service" className="nav-item nav-link">
              Services
            </a>
            <a href="#portfolio" className="nav-item nav-link">
              Work
            </a>
            <a href="#testimonial" className="nav-item nav-link">
              Reviews
            </a>
            <a href="#blog" className="nav-item nav-link">
              Blog
            </a>
            <a href="#contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <a href="" className="btn btn-outline-primary d-none d-lg-block">
            Hire Me
          </a>
        </div>
      </nav>
      {/* Navbar End */}
      {/* Video Modal Start */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowscriptaccess="always"
                  allow="autoplay"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal End */}
      {/* Header Start */}
      <div
        className="container-fluid bg-dark d-flex align-items-center mb-5 py-5"
        id="home"
        style={{ minHeight: "100vh" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0"
              data-aos="fade-right"
              data-aos-duration={3000}
            >
              <Image
                className="img-fluid w-100 rounded-circle shadow-sm person_image"
                src={IrfanImage}
                alt=""
              />
            </div>
            <div
              className="col-lg-7 text-center text-lg-left"
              data-aos="fade-left"
              data-aos-duration={3000}
            >
              <h3 className="text-white font-weight-normal mb-3">I'm</h3>
              <h1
                className="display-3 text-uppercase text-primary mb-2"
                style={{ WebkitTextStroke: "2px #ffffff" }}
              >
                Irfan M. Chatha
              </h1>
              <h1 className="typed-text-output d-inline font-weight-lighter text-white" />
              <div className="typed-text d-none">
                {" "}
                Website Designer, Web and Mobile App Developer, NextJS Expert
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <a href="" className="btn btn-outline-light mr-5">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
      {/* About Start */}
      <div className="container-fluid py-5" id="about">
        <div className="container">
          <div
            className="position-relative d-flex align-items-center justify-content-center"
            data-aos-duration={3000}
            data-aos="zoom-in-down"
          >
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              About
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              About Me
            </h1>
          </div>
          <div className="row align-items-center">
            <div
              className="col-lg-5 pb-4 pb-lg-0"
              data-aos="zoom-out-right"
              data-aos-duration={3000}
            >
              <img
                className="img-fluid rounded w-100"
                src="img/personx.jpg"
                alt=""
              />
            </div>
            <div
              className="col-lg-7"
              data-aos="zoom-out-left"
              data-aos-duration={3000}
            >
              <h3 className="mb-4">Mobile App Developer</h3>
              <p>
                I'm Muhammad Souhaib from Karachi, Pakistan. I am doing bachelor's
                of software engineering from SMIU since 2020. I specialize in
                creating websites and applications using Front-end Technologies
                HTML/CSS/JS , React JS , React Native and different more
                frameworks/libraries. I have been working as a React Native
                Developer for 2 years and have developed several mobile
                applications.
              </p>
              <div className="row mb-3">
                <div className="col-sm-6 py-2">
                  <h6>
                    Name: <span className="text-secondary">Muhammad Souhaib</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Degree: <span className="text-secondary">BSSE</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Experience: <span className="text-secondary">2 Years</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Phone: <span className="text-secondary">+300 000 000</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Email:{" "}
                    <span className="text-secondary">souhaib@gmail.com</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Address:{" "}
                    <span className="text-secondary">Karachi , Pakistan</span>
                  </h6>
                </div>
              </div>
              <a href="" className="btn btn-outline-primary mr-4">
                Hire Me
              </a>
              <a href="" className="btn btn-outline-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Qualification Start */}
      <div className="container-fluid py-5" id="qualification">
        <div className="container">
          <div
            className="position-relative d-flex align-items-center justify-content-center"
            data-aos-duration={3000}
            data-aos="zoom-in-down"
          >
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              Quality
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              Education &amp; Expericence
            </h1>
          </div>
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-duration={3000}
          >
            <div className="col-lg-6">
              <h3 className="mb-4">My Education</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                <div className="position-relative mb-4">
                  <i
                    className="far fa-dot-circle text-primary position-absolute"
                    style={{ top: 2, left: "-32px" }}
                  />
                  <h5 className="font-weight-bold mb-1">Bachelors</h5>
                  <p className="mb-2">
                    <strong>University Name</strong> | <small>2000 - 2050</small>
                  </p>
                  <p>description ...</p>
                </div>
                <div className="position-relative mb-4">
                  <i
                    className="far fa-dot-circle text-primary position-absolute"
                    style={{ top: 2, left: "-32px" }}
                  />
                  <h5 className="font-weight-bold mb-1">Intermediate</h5>
                  <p className="mb-2">
                    <strong>College Name</strong> | <small>2000 - 2050</small>
                  </p>
                  <p>description ...</p>
                </div>
                <div className="position-relative mb-4">
                  <i
                    className="far fa-dot-circle text-primary position-absolute"
                    style={{ top: 2, left: "-32px" }}
                  />
                  <h5 className="font-weight-bold mb-1">Matriculation</h5>
                  <p className="mb-2">
                    <strong>School Name</strong> | <small>2000 - 2050</small>
                  </p>
                  <p>description ...</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-4">My Experience</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                <div className="position-relative mb-4">
                  <i
                    className="far fa-dot-circle text-primary position-absolute"
                    style={{ top: 2, left: "-32px" }}
                  />
                  <h5 className="font-weight-bold mb-1">App Developer</h5>
                  <p className="mb-2">
                    <strong>Company Name</strong> | <small>2000 - 2050</small>
                  </p>
                  <p>
                    skills / projects description which you've learned / worked
                    on.
                  </p>
                </div>
                <div className="position-relative mb-4">
                  <i
                    className="far fa-dot-circle text-primary position-absolute"
                    style={{ top: 2, left: "-32px" }}
                  />
                  <h5 className="font-weight-bold mb-1">Web Developer</h5>
                  <p className="mb-2">
                    <strong>Company Name</strong> | <small>2000 - 2050</small>
                  </p>
                  <p>
                    skills / projects description which you've learned / worked
                    on.
                  </p>
                </div>
                <div className="position-relative mb-4">
                  <i
                    className="far fa-dot-circle text-primary position-absolute"
                    style={{ top: 2, left: "-32px" }}
                  />
                  <h5 className="font-weight-bold mb-1">Web Designer</h5>
                  <p className="mb-2">
                    <strong>Company Name</strong> | <small>2000 - 2050</small>
                  </p>
                  <p>
                    skills / projects description which you've learned / worked
                    on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Qualification End */}
      {/* Skill Start */}
      <div className="container-fluid py-5" id="skill">
        <div className="container">
          <div
            className="position-relative d-flex align-items-center justify-content-center"
            data-aos-duration={3000}
            data-aos="zoom-in-down"
          >
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              Skills
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              My Skills
            </h1>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">HTML</h6>
                  <h6 className="font-weight-bold">95%</h6>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">CSS</h6>
                  <h6 className="font-weight-bold">85%</h6>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary "
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">PHP</h6>
                  <h6 className="font-weight-bold">90%</h6>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Javascript</h6>
                  <h6 className="font-weight-bold">90%</h6>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Angular JS</h6>
                  <h6 className="font-weight-bold">95%</h6>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">React Native</h6>
                  <h6 className="font-weight-bold">95%</h6>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Skill End */}
      {/* Services Start */}
      <div className="container-fluid pt-5" id="service">
        <div className="container">
          <div
            className="position-relative d-flex align-items-center justify-content-center"
            data-aos-duration={3000}
            data-aos="zoom-in-down"
          >
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              Service
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              My Services
            </h1>
          </div>
          <div className="row pb-3">
            <div className="col-lg-4 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <i
                  data-aos="flip-left"
                  data-aos-duration={3000}
                  className="fa fa-2x fa-laptop service-icon bg-primary text-white mr-3"
                />
                <h4 className="font-weight-bold m-0">Web Design</h4>
              </div>
              <p>description about your service</p>
              <a
                className="border-bottom border-primary text-decoration-none"
                href=""
              >
                Read More
              </a>
            </div>
            <div className="col-lg-4 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <i
                  data-aos="flip-left"
                  data-aos-duration={3000}
                  className="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3"
                />
                <h4 className="font-weight-bold m-0">Web Development</h4>
              </div>
              <p>description about your service</p>
              <a
                className="border-bottom border-primary text-decoration-none"
                href=""
              >
                Read More
              </a>
            </div>
            <div className="col-lg-4 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <i
                  data-aos="flip-left"
                  data-aos-duration={3000}
                  className="fab fa-2x fa-android service-icon bg-primary text-white mr-3"
                />
                <h4 className="font-weight-bold m-0">Apps Design</h4>
              </div>
              <p>description about your service</p>
              <a
                className="border-bottom border-primary text-decoration-none"
                href=""
              >
                Read More
              </a>
            </div>
            <div className="col-lg-4 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <i
                  data-aos="flip-left"
                  data-aos-duration={3000}
                  className="fab fa-2x fa-apple service-icon bg-primary text-white mr-3"
                />
                <h4 className="font-weight-bold m-0">Apps Development</h4>
              </div>
              <p>description about your service</p>
              <a
                className="border-bottom border-primary text-decoration-none"
                href=""
              >
                Read More
              </a>
            </div>
            <div className="col-lg-4 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <i
                  data-aos="flip-left"
                  data-aos-duration={3000}
                  className="fa fa-2x fa-search service-icon bg-primary text-white mr-3"
                />
                <h4 className="font-weight-bold m-0">SEO</h4>
              </div>
              <p>description about your service</p>
              <a
                className="border-bottom border-primary text-decoration-none"
                href=""
              >
                Read More
              </a>
            </div>
            <div className="col-lg-4 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <i
                  data-aos="flip-left"
                  data-aos-duration={3000}
                  className="fa fa-2x fa-edit service-icon bg-primary text-white mr-3"
                />
                <h4 className="font-weight-bold m-0">Content Creating</h4>
              </div>
              <p>description about your service</p>
              <a
                className="border-bottom border-primary text-decoration-none"
                href=""
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}
      {/* Portfolio Start */}
      <div className="container-fluid pt-5 pb-3" id="portfolio">
        <div className="container">
          <div
            className="position-relative d-flex align-items-center justify-content-center"
            data-aos-duration={3000}
            data-aos="zoom-in-down"
          >
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              Portfolio
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              My Portfolio
            </h1>
          </div>
          <div className="row">
            <div className="col-12 text-center mb-2">
              <ul className="list-inline mb-4" id="portfolio-flters">
                <li
                  className="btn btn-sm btn-outline-primary m-1 active"
                  data-filter="*"
                >
                  All
                </li>
                <li
                  className="btn btn-sm btn-outline-primary m-1"
                  data-filter=".first"
                >
                  Design
                </li>
                <li
                  className="btn btn-sm btn-outline-primary m-1"
                  data-filter=".second"
                >
                  Development
                </li>
                <li
                  className="btn btn-sm btn-outline-primary m-1"
                  data-filter=".third"
                >
                  Marketing
                </li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
              <div className="position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid rounded w-100"
                  src="img/portfolio-1.jpg"
                  alt=""
                />
                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-1.jpg" data-lightbox="portfolio">
                    <i
                      className="fa fa-plus text-white"
                      style={{ fontSize: 60 }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
              <div className="position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid rounded w-100"
                  src="img/portfolio-2.jpg"
                  alt=""
                />
                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-2.jpg" data-lightbox="portfolio">
                    <i
                      className="fa fa-plus text-white"
                      style={{ fontSize: 60 }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
              <div className="position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid rounded w-100"
                  src="img/portfolio-3.jpg"
                  alt=""
                />
                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-3.jpg" data-lightbox="portfolio">
                    <i
                      className="fa fa-plus text-white"
                      style={{ fontSize: 60 }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
              <div className="position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid rounded w-100"
                  src="img/portfolio-4.jpg"
                  alt=""
                />
                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-4.jpg" data-lightbox="portfolio">
                    <i
                      className="fa fa-plus text-white"
                      style={{ fontSize: 60 }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
              <div className="position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid rounded w-100"
                  src="img/portfolio-5.jpg"
                  alt=""
                />
                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-5.jpg" data-lightbox="portfolio">
                    <i
                      className="fa fa-plus text-white"
                      style={{ fontSize: 60 }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
              <div className="position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid rounded w-100"
                  src="img/portfolio-6.jpg"
                  alt=""
                />
                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-6.jpg" data-lightbox="portfolio">
                    <i
                      className="fa fa-plus text-white"
                      style={{ fontSize: 60 }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio End */}
      {/* Testimonial Start */}
      <div className="container-fluid py-5" id="testimonial">
        <div className="container">
          <div
            className="position-relative d-flex align-items-center justify-content-center"
            data-aos-duration={3000}
            data-aos="zoom-in-down"
          >
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              Reviews
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              Reviews
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="owl-carousel testimonial-carousel">
                <div className="text-center">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                  <h4 className="font-weight-light mb-4">
                    Working with dev_display has been an amazing experience for
                    me. I'll suggest this guy for any of the professional work
                    related to IT services. This guy is definitely a perfect
                    choice for building your brand.
                  </h4>
                  <img
                    className="img-fluid rounded-circle mx-auto mb-3"
                    src="img/testimonial-1.jpg"
                    style={{ width: 80, height: 80 }}
                  />
                  <h5 className="font-weight-bold m-0">Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="text-center">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                  <h4 className="font-weight-light mb-4">
                    Working with dev_display has been an amazing experience for
                    me. I'll suggest this guy for any of the professional work
                    related to IT services. This guy is definitely a perfect
                    choice for building your brand.
                  </h4>
                  <img
                    className="img-fluid rounded-circle mx-auto mb-3"
                    src="img/testimonial-2.jpg"
                    style={{ width: 80, height: 80 }}
                  />
                  <h5 className="font-weight-bold m-0">Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="text-center">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                  <h4 className="font-weight-light mb-4">
                    Working with dev_display has been an amazing experience for
                    me. I'll suggest this guy for any of the professional work
                    related to IT services. This guy is definitely a perfect
                    choice for building your brand.
                  </h4>
                  <img
                    className="img-fluid rounded-circle mx-auto mb-3"
                    src="img/testimonial-3.jpg"
                    style={{ width: 80, height: 80 }}
                  />
                  <h5 className="font-weight-bold m-0">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* Blog Start */}
      <div className="container-fluid pt-5" id="blog">
        <div className="container">
          <div
            className="position-relative d-flex align-items-center justify-content-center"
            data-aos-duration={3000}
            data-aos="zoom-in-down"
          >
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              Blog
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              Latest Blog
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-5">
              <div className="position-relative mb-4">
                <img
                  className="img-fluid rounded w-100"
                  src="img/blog-1.jpg"
                  alt=""
                />
                <div className="blog-date">
                  <h4 className="font-weight-bold mb-n1">01</h4>
                  <small className="text-white text-uppercase">Jan</small>
                </div>
              </div>
              <h5 className="font-weight-medium mb-4">
                Time management in studies
              </h5>
              <a className="btn btn-sm btn-outline-primary py-2" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="position-relative mb-4">
                <img
                  className="img-fluid rounded w-100"
                  src="img/blog-2.jpg"
                  alt=""
                />
                <div className="blog-date">
                  <h4 className="font-weight-bold mb-n1">01</h4>
                  <small className="text-white text-uppercase">Jan</small>
                </div>
              </div>
              <h5 className="font-weight-medium mb-4">Importance of team work</h5>
              <a className="btn btn-sm btn-outline-primary py-2" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="position-relative mb-4">
                <img
                  className="img-fluid rounded w-100"
                  src="img/blog-3.jpg"
                  alt=""
                />
                <div className="blog-date">
                  <h4 className="font-weight-bold mb-n1">01</h4>
                  <small className="text-white text-uppercase">Jan</small>
                </div>
              </div>
              <h5 className="font-weight-medium mb-4">The growing era of tech</h5>
              <a className="btn btn-sm btn-outline-primary py-2" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}
      {/* Contact Start */}
      <div className="container-fluid py-5" id="contact">
        <div className="container">
          <div
            className="position-relative d-flex align-items-center justify-content-center"
            data-aos-duration={3000}
            data-aos="zoom-in-down"
          >
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              Contact
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              Contact Me
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form text-center">
                <div id="success" />
                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                  <div className="form-row">
                    <div className="control-group col-sm-6">
                      <input
                        type="text"
                        className="form-control p-4"
                        id="name"
                        placeholder="Your Name"
                        required="required"
                        data-validation-required-message="Please enter your name"
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group col-sm-6">
                      <input
                        type="email"
                        className="form-control p-4"
                        id="email"
                        placeholder="Your Email"
                        required="required"
                        data-validation-required-message="Please enter your email"
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="subject"
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control py-3 px-4"
                      rows={5}
                      id="message"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter your message"
                      defaultValue={""}
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div>
                    <button
                      className="btn btn-outline-primary"
                      type="submit"
                      id="sendMessageButton"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
      {/* Footer Start */}
      <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="container text-center py-5">
          <div className="d-flex justify-content-center mb-4">
            <a className="btn btn-light btn-social mr-2" href="#">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-light btn-social mr-2" href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-light btn-social mr-2" href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="btn btn-light btn-social" href="#">
              <i className="fab fa-instagram" />
            </a>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <a className="text-white" href="#">
              Privacy
            </a>
            <span className="px-3">|</span>
            <a className="text-white" href="#">
              Terms
            </a>
            <span className="px-3">|</span>
            <a className="text-white" href="#">
              FAQs
            </a>
            <span className="px-3">|</span>
            <a className="text-white" href="#">
              Help
            </a>
          </div>
          <p className="m-0">
            © <a className="text-white font-weight-bold" href="#" />. All Rights
            Reserved. Designed by
            <a
              className="text-white font-weight-bold"
              href="https://github.com/Souhaib-789"
            >
              {" "}
              Muhammad Souhaib
            </a>
          </p>
        </div>
      </div>
      {/* Footer End */}
      {/* Scroll to Bottom */}
      <i className="fa fa-2x fa-angle-down text-white scroll-to-bottom" />
      {/* Back to Top */}
      <a href="#" className="btn btn-outline-dark px-0 back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </>
  )
}
