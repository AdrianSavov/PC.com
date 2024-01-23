export default function Carousel() {

  return (
    <div id='home-section' className="container-fluid p-0 mb-5">
    <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="w-100" src="img/carousel-4.jpg" alt="Image"/>
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{maxWidth: "900px"}}>
                        <h1 className="display-1 text-white mb-md-4 animated zoomIn">Everything for the gamers!</h1>
                        <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Get Offers</a>
                        <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img className="w-100" src="img/carousel-5.jpg" alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{maxWidth: "900px"}}>
                        <h1 className="display-1 text-white mb-md-4 animated zoomIn">Gaming Chairs!</h1>
                        <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Get Offers</a>
                        <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img className="w-100" src="img/carousel-6.webp" alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{maxWidth: "900px"}}>
                        <h1 className="display-1 text-white mb-md-4 animated zoomIn">Get Your Gaming Setup Now!</h1>
                        <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Get Offers</a>
                        <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</div>
  );
}
