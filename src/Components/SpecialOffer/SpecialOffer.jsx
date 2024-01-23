export default function SpecialOffer () {

    return(
        <div className="container-fluid bg-offer my-5 py-5 wow" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-7 text-center">
                    <div className="text-center mx-auto mb-4" style={{maxWidth: "600px"}}>
                        <h5 className="text-white text-uppercase" style={{letterSpacing: "5px"}}>Special Offer</h5>
                        <h1 className="display-5 text-white">First order? - Get your 20% OFF Now!</h1>
                    </div>
                    <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">Order Now</a>
                    <a href="" className="btn btn-secondary py-md-3 px-md-5">Read More</a>
                </div>
            </div>
        </div>
    </div>
    );
}