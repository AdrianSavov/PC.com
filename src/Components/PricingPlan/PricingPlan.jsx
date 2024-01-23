export default function PricingPlan () {

    return (
        <div className="container-fluid py-5 wow" data-wow-delay="0.1s" style={{marginBottom: "75px"}}>
        <div className="container">
            <div className="text-center mx-auto mb-5" style={{maxWidth: "600px"}}>
                <h5 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Pricing Plan</h5>
                <h1 className="display-5 mb-0">Our Offers For Gaming Machines</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="position-relative border border-primary rounded">
                        <div className="bg-primary text-center pt-5 pb-4">
                            <h3 className="text-white">Budget Gaming PC</h3>
                            <h1 className="display-4 text-white">
                                <small className="align-top"
                                    style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>99<small
                                    className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/
                                    Mo</small>
                            </h1>
                        </div>
                        <div className="text-center py-5">
                            <p className="border-bottom border-light mb-2 pb-2">Intel Core i5 13400F</p>
                            <p className="border-bottom border-light mb-2 pb-2">16GB RAM DDR4 3200mhz</p>
                            <p className="border-bottom border-light mb-2 pb-2">GeForce RTX 3060</p>
                            <p className="border-bottom border-light mb-2 pb-2">700W PSU</p>
                            <p className="mb-2 pb-2">RGB 16 million colors</p>
                        </div>
                        <a href="" className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Order Now</a>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="position-relative border border-secondary rounded">
                        <div className="bg-secondary text-center pt-5 pb-4">
                            <h3 className="text-white">Gaming Laptop</h3>
                            <h1 className="display-4 text-white">
                                <small className="align-top"
                                     style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>149<small
                                    className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/
                                    Mo</small>
                            </h1>
                        </div>
                        <div className="text-center py-5">
                            <p className="border-bottom border-light mb-2 pb-2">Intel core i7 13700HX</p>
                            <p className="border-bottom border-light mb-2 pb-2">32GB RAM DRR5 5200mhz</p>
                            <p className="border-bottom border-light mb-2 pb-2">GeForce RTX 4070 Ti</p>
                            <p className="border-bottom border-light mb-2 pb-2">17.3 inch</p>
                            <p className="mb-2 pb-2">Windows 11 Pro</p>
                        </div>
                        <a href="" className="btn btn-secondary py-2 px-4 position-absolute top-100 start-50 translate-middle">Order Now</a>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="position-relative border border-primary rounded">
                        <div className="bg-primary text-center pt-5 pb-4">
                            <h3 className="text-white">High End Gaming PC</h3>
                            <h1 className="display-4 text-white">
                                <small className="align-top"
                                      style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>229<small
                                      className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/
                                      Mo</small>
                            </h1>
                        </div>
                        <div className="text-center py-5">
                            <p className="border-bottom border-light mb-2 pb-2">Intel Core i9 14900K</p>
                            <p className="border-bottom border-light mb-2 pb-2">64GB RAM DDR5 7200mhz</p>
                            <p className="border-bottom border-light mb-2 pb-2">GeForce RTX 4090</p>
                            <p className="border-bottom border-light mb-2 pb-2">1300W PSU</p>
                            <p className="mb-2 pb-2">Custom CPU and GPU Water Cooler</p>
                        </div>
                        <a href="" className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}