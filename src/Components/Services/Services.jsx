export default function Services () {

    return (
        <div id='services-section' className="container-fluid py-5 wow" data-wow-delay="0.1s" >
        <div className="container">
            <div className="text-center mx-auto mb-5" style={{maxWidth: "600px"}}>
                <h5 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Services</h5>
                <h1 className="display-5 mb-0">Solutions For Any Problems</h1>
            </div>
            <div className="row g-5" >
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s" >
                    <div className="service-item bg-light border-bottom border-5 border-primary rounded" >
                        <div className="position-relative p-5" >
                            <img src='img/laptop.png' style={{display: "flex", width: "100px", margin: "0 auto"}}></img>
                            <h3 className="mb-3" style={{textAlign: "center", marginTop: "15px"}}>Maintenance</h3>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a href="">Read More<i className="bi bi-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light border-bottom border-5 border-primary rounded">
                        <div className="position-relative p-5">
                        <img src='img/computer.png' style={{display: "flex", width: "100px", margin: "0 auto"}}></img>
                            <h3 className="mb-3" style={{textAlign: "center", marginTop: "15px"}}>Assembly Setups</h3>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a href="">Read More<i className="bi bi-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="service-item bg-light border-bottom border-5 border-primary rounded">
                        <div className="position-relative p-5">
                        <img src='img/desk.png' style={{display: "flex", width: "100px", margin: "0 auto"}}></img>
                            <h3 className="mb-3" style={{textAlign: "center", marginTop: "15px"}}>Maintenance</h3>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a href="">Read More<i className="bi bi-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light border-bottom border-5 border-primary rounded">
                        <div className="position-relative p-5">
                        <img src='img/support.png' style={{display: "flex", width: "100px", margin: "0 auto"}}></img>
                            <h3 className="mb-3" style={{textAlign: "center" , marginTop: "15px"}}>Repair & Service</h3>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a href="">Read More<i className="bi bi-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light border-bottom border-5 border-primary rounded">
                        <div className="position-relative p-5">
                        <img src='img/keyboard-and-mouse.png' style={{display: "flex", width: "100px", margin: "0 auto"}}></img>
                            <h3 className="mb-3" style={{textAlign: "center" , marginTop: "15px"}}>Clean Your Devices</h3>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a href="">Read More<i className="bi bi-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="service-item bg-light border-bottom border-5 border-primary rounded">
                        <div className="position-relative p-5">
                        <img src='img/windows.png' style={{display: "flex", width: "100px", margin: "0 auto"}}></img>
                            <h3 className="mb-3" style={{textAlign: "center", marginTop: "15px"}}>Pre/Install OS</h3>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a href="">Read More<i className="bi bi-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}