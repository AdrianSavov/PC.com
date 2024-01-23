export default function About() {
  return (
      <div id="about-section"
        className="container-fluid py-5"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.3s"
                  src="img/about.avif"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mb-4">
                <h5 className="text-primary text-uppercase">About Us</h5>
                <h1 className="display-5 mb-0">
                  We Offers High-End Gaming Experience
                </h1>
              </div>
              <h4 className="text-body fst-italic mb-4">
                You can choose the best parts from our collection. We're working
                with top brands only.
              </h4>
              <p className="mb-4">
                Don't hesitate to contact us if you need help to assembly your
                new setup!
              </p>
              <div className="row g-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                  <div
                    className="bg-primary d-flex flex-column justify-content-center text-center border-bottom border-5 border-secondary rounded p-3"
                    style={{ height: "200px" }}
                  >
                    <i className="fa fa-star fa-4x text-white mb-4"></i>
                    <h4 className="text-white mb-0">9 Years Experience</h4>
                  </div>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.9s">
                  <div
                    className="bg-secondary d-flex flex-column justify-content-center text-center border-bottom border-5 border-primary rounded p-3"
                    style={{ height: "200px" }}
                  >
                    <i className="fa fa-award fa-4x text-white mb-4"></i>
                    <h4 className="text-white mb-0">Award Winning</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
