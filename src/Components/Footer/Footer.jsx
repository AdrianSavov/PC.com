export default function Footer() {
  return (
    <>
        <div
          className="container-fluid bg-dark text-light mt-5 py-5 wow"
          data-wow-delay="0.1s"
        >
          <div className="container pt-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Quick Links</h3>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-light mb-2" href="#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>Home
                  </a>
                  <a className="text-light mb-2" href="#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>About
                    Us
                  </a>
                  <a className="text-light mb-2" href="#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>Our
                    Services
                  </a>
                  <a className="text-light mb-2" href="#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>
                    Latest Blog
                  </a>
                  <a className="text-light" href="#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Popular Links</h3>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-light mb-2" href="#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>Home
                  </a>
                  <a className="text-light mb-2" href="#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>About
                    Us
                  </a>
                  <a className="text-light mb-2" href="#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>Our
                    Services
                  </a>
                  <a className="text-light mb-2" href="#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>
                    Latest Blog
                  </a>
                  <a className="text-light" href="#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Get In Touch</h3>
                <p className="mb-2">
                  <i className="bi bi-geo-alt text-primary me-2"></i>123 Street,
                  New York, USA
                </p>
                <p className="mb-2">
                  <i className="bi bi-envelope-open text-primary me-2"></i>
                  info@example.com
                </p>
                <p className="mb-0">
                  <i className="bi bi-telephone text-primary me-2"></i>+012 345
                  67890
                </p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Follow Us</h3>
                <div className="d-flex">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                    href="#"
                  >
                    <i className="fab fa-twitter fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                    href="#"
                  >
                    <i className="fab fa-facebook-f fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href="#"
                  >
                    <i className="fab fa-instagram fw-normal"></i>
                  </a>
                </div>
              </div>
              <div className="col-12">
                <form className="mx-auto" style={{ maxWidth: "600px" }}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control border-white p-3"
                      placeholder="Your Email"
                    />
                    <button className="btn btn-primary px-4">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-primary text-light py-4">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-md-0">
                  &copy;{" "}
                  <a className="text-white border-bottom" href="#">
                    PC.com
                  </a>
                  . All Rights Reserved.
                </p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <p className="mb-0">
                  Designed by{" "}
                  <a
                    className="text-white border-bottom"
                    href="https://htmlcodex.com"
                  >
                    HTML Codex
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
