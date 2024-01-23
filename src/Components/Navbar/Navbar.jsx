import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");

  const handleScroll = () => {
    const aboutSection = document.getElementById("about-section");
    const serviceSection = document.getElementById("services-section");
    const contactSection = document.getElementById("contact-section");

    const scrollPosition = window.scrollY + 90;

    if (
      aboutSection &&
      scrollPosition >= aboutSection.offsetTop &&
      scrollPosition < serviceSection.offsetTop
    ) {
      setActiveLink("about");
    } else if (serviceSection && scrollPosition >= serviceSection.offsetTop) {
      setActiveLink("service");
    } else if (contactSection && scrollPosition >= contactSection.offsetTop) {
      setActiveLink("contact");
    } else {
      setActiveLink("home");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
      <ScrollLink
        style={{ cursor: "pointer" }}
        activeClass="active"
        to="home-section"
        spy={true}
        smooth={true}
        offset={-90}
        duration={800}
        className={`nav-link ${activeLink === "home" ? "active" : ""}`}
      >
        <h1 className="display-5 m-0 text-primary">
          PC<span className="text-secondary">.com</span>
        </h1>
      </ScrollLink>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ms-auto py-0">
          <li className="nav-item" style={{ cursor: "pointer" }}>
            <ScrollLink
              activeClass="active"
              to="home-section"
              spy={true}
              smooth={true}
              offset={-90}
              duration={800}
              className={`nav-link ${activeLink === "home" ? "active" : ""}`}
            >
              Home
            </ScrollLink>
          </li>
          <li className="nav-item" style={{ cursor: "pointer" }}>
            <ScrollLink
              activeClass="active"
              to="about-section"
              spy={true}
              smooth={true}
              offset={-90}
              duration={800}
              className={`nav-link ${activeLink === "about" ? "active" : ""}`}
            >
              About
            </ScrollLink>
          </li>
          <li className="nav-item" style={{ cursor: "pointer" }}>
            <ScrollLink
              activeClass="active"
              to="services-section"
              spy={true}
              smooth={true}
              offset={-90}
              duration={800}
              className={`nav-link ${
                activeLink === "services" ? "active" : ""
              }`}
            >
              Services
            </ScrollLink>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Parts
            </Link>
            <div className="dropdown-menu m-0">
              <Link to="/processors" className="dropdown-item">
                Processors
              </Link>
              <Link to="/motherboards" className="dropdown-item">
                Motherboards
              </Link>
              <Link to="/graphic-cards" className="dropdown-item">
                Graphic Cards
              </Link>
              <Link to="/keyboards-mouses" className="dropdown-item">
                Keyboards & Mouses
              </Link>
              <Link to="/memory" className="dropdown-item">
                RAM Memory
              </Link>
            </div>
          </li>
          <li className="nav-item">
          <ScrollLink
              style={{ cursor: "pointer" }}
              activeClass="active"
              to="contact-section"
              spy={true}
              smooth={true}
              offset={-90}
              duration={800}
              className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
            >
              Contact
            </ScrollLink>
          </li>
          <li className="nav-item">
            <a
              href="tel:+123456789"
              className="nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"
            >
              <i className="bi bi-telephone-outbound me-2"></i>+123 456 789
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
