import React from 'react'

const Home = () => {
    return (
        <div>
            {/* <!-- //header --> */}
            {/* <!-- banner --> */}
            <div className="banner_w3lspvt" id="home">
                <div className="csslider infinity" id="slider1">
                    <input type="radio" name="slides" checked="checked" id="slides_1" />
                    <input type="radio" name="slides" id="slides_2" />
                    <input type="radio" name="slides" id="slides_3" />
                    <input type="radio" name="slides" id="slides_4" />

                    <ul className="banner_slide_bg">
                        <li>
                            <div className="slider-info bg1">
                                <div className="bs-slider-overlay">
                                    <div className="banner-text">
                                        <div className="container">
                                            <h2 className="movetxt agile-title text-capitalize">We Create and Renovate Hair Style Trends</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
                                            <a href="contact.html" className="btn"> Get appointment </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slider-info bg2">
                                <div className="bs-slider-overlay1">
                                    <div className="banner-text">
                                        <div className="container">
                                            <h4 className="movetxt agile-title text-capitalize">We Help to grow your hair as well beard </h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
                                            <a href="contact.html" className="btn">Get appointment </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slider-info bg3">
                                <div className="bs-slider-overlay1">
                                    <div className="banner-text">
                                        <div className="container">
                                            <h2 className="movetxt agile-title text-capitalize">We Design and Create Hair Style Latest</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
                                            <a href="contact.html" className="btn"> Get appointment</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slider-info bg4">
                                <div className="bs-slider-overlay1">
                                    <div className="banner-text">
                                        <div className="container">
                                            <h4 className="movetxt agile-title text-capitalize">We design latest trending haircuts </h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
                                            <a href="contact.html" className="btn"> Get appointment </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="navigation">
                        <div>
                            <label for="slides_1"></label>
                            <label for="slides_2"></label>
                            <label for="slides_3"></label>
                            <label for="slides_4"></label>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- //banner -->
            <!-- banner bottom grids --> */}
            <section className="content-info py-5" id="about">
                <div className="container py-md-5">
                    <h3 className="heading text-center mb-3 mb-sm-5">About us</h3>

                    <div className="info-w3pvt-mid text-center px-lg-5">

                        <div className="title-desc text-center px-lg-5">
                            <img src="assets/images/about1.png" alt="news image" className="img-fluid" />
                            <p className="px-lg-5">Praesent ullamcorper dui turpis.At vero eos et accusam et justo duo dolores et ea rebum.Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.
                        Praesent ullamcorper dui turpis.At vero eos et accusam et justo duo dolores et ea rebum.Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
                            <a className="btn mt-lg-4 mt-3 read scroll" href="#services" role="button">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- //banner bottom grids --> */}

            {/* <!-- /services --> */}
            <section className="services py-5" id="services">
                <div className="container py-md-5">
                    <h3 className="heading text-center mb-3 mb-sm-5">Services</h3>
                    <div className="row ab-info">
                        <div className="col-md-6 ab-content ab-content1">
                            <div className="ab-content-inner">
                                <a href="single.html"><img src="assets/images/services2.jpg" alt="news image" className="img-fluid" /></a>
                                <div className="ab-info-con">
                                    <h4> Trim your Hair</h4>
                                    <a href="single.html" className="read-more two btn m-0 px-3"><span className="fa fa-arrow-circle-o-right"> </span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ab-content ab-content1">
                            <div className="ab-content-inner">
                                <a href="single.html"><img src="assets/images/services1.jpg" alt="news image" className="img-fluid" /></a>
                                <div className="ab-info-con">
                                    <h4>Trim your Beard</h4>
                                    <a href="single.html" className="read-more two btn m-0 px-3"><span className="fa fa-arrow-circle-o-right"> </span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ab-info second mt-lg-4">
                        <div className="col-md-3 ab-content">
                            <div className="ab-content-inner">
                                <a href="single.html"><img src="assets/images/ser3.jpg" alt="news image" className="img-fluid" /></a>
                                <div className="ab-info-con">
                                    <h4>colouring</h4>
                                    <a href="single.html" className="read-more two btn m-0 px-3"><span className="fa fa-arrow-circle-o-right"> </span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 ab-content">
                            <div className="ab-content-inner">
                                <a href="single.html"><img src="assets/images/ser4.jpg" alt="news image" className="img-fluid" /></a>
                                <div className="ab-info-con">
                                    <h4>Bathing</h4>
                                    <a href="single.html" className="read-more two btn m-0 px-3"><span className="fa fa-arrow-circle-o-right"> </span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 ab-content">
                            <div className="ab-content-inner">
                                <a href="single.html"><img src="assets/images/ser5.jpg" alt="news image" className="img-fluid" /></a>
                                <div className="ab-info-con">
                                    <h4>drying</h4>
                                    <a href="single.html" className="read-more two btn m-0 px-3"><span className="fa fa-arrow-circle-o-right"> </span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 ab-content">
                            <div className="ab-content-inner">
                                <a href="single.html"><img src="assets/images/ser6.jpg" alt="news image" className="img-fluid" /></a>
                                <div className="ab-info-con">
                                    <h4>Creams</h4>
                                    <a href="single.html" className="read-more two btn m-0 px-3"><span className="fa fa-arrow-circle-o-right"> </span></a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /services --> */}

            {/* <!-- pricing --> */}
            <section className="pricing py-5">
                <div className="container py-md-5">
                    <h3 className="heading text-capitalize text-center mb-3 mb-sm-5"> Our Pricing</h3>
                    <div className="row pricing-grids">
                        <div className="col-lg-6  mb-lg-0 mb-5">
                            <div className="padding">
                                <h3>PRICES FOR MUSTACHE TRIMMING</h3>
                                {/* <!-- Item starts --> */}
                                <div className="menu-item">
                                    <div className="row border-dot no-gutters">
                                        <div className="col-8 menu-item-name">
                                            <h6>Trim your Mustaches style 1</h6>
                                        </div>
                                        <div className="col-4 menu-item-price text-right">
                                            <h6>$7</h6>
                                        </div>
                                    </div>

                                </div>
                                {/* <!-- Item ends -->
					<!-- Item starts --> */}
                                <div className="menu-item my-4">
                                    <div className="row border-dot no-gutters">
                                        <div className="col-8 menu-item-name">
                                            <h6>Trim your Mustaches style 2</h6>
                                        </div>
                                        <div className="col-4 menu-item-price text-right">
                                            <h6>$10</h6>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Item ends -->
					<!-- Item starts --> */}
                                <div className="menu-item">
                                    <div className="row border-dot no-gutters">
                                        <div className="col-8 menu-item-name">
                                            <h6>Trim your Mustaches style 3</h6>
                                        </div>
                                        <div className="col-4 menu-item-price text-right">
                                            <h6>$15</h6>
                                        </div>
                                    </div>

                                </div>
                                {/* <!-- Item ends -->
					<!-- Item starts --> */}
                                <div className="menu-item mt-4">
                                    <div className="row border-dot no-gutters">
                                        <div className="col-8 menu-item-name">
                                            <h6>Trim your Mustaches style 4</h6>
                                        </div>
                                        <div className="col-4 menu-item-price text-right">
                                            <h6>$15</h6>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Item ends -->
					<!-- Item starts --> */}
                                <div className="menu-item mt-4">
                                    <div className="row border-dot no-gutters">
                                        <div className="col-8 menu-item-name">
                                            <h6>Trim your Mustaches style 5</h6>
                                        </div>
                                        <div className="col-4 menu-item-price text-right">
                                            <h6>$20</h6>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Item ends -->
					<!-- Item starts --> */}
                                <div className="menu-item mt-4">
                                    <div className="row border-dot no-gutters">
                                        <div className="col-8 menu-item-name">
                                            <h6>Trim your Mustaches style 6</h6>
                                        </div>
                                        <div className="col-4 menu-item-price text-right">
                                            <h6>$25</h6>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Item ends --> */}
                            </div>
                        </div>
                        <div className="col-lg-6  mb-lg-0 mb-5">
                            <div className="padding">
                                <h3>HAIR AND BEARD CUT PRICES</h3>
                                {/* <!-- Item starts --> */}
                                <div className="menu-item">
                                    <div className="row border-dot no-gutters">
                                        <div className="col-8 menu-item-name">
                                            <h6>Dye your hair and beard 1</h6>
                                        </div>
                                        <div className="col-4 menu-item-price text-right">
                                            <h6>$27</h6>
                                        </div>
                                    </div>

                                </div>
                                {/* <!-- Item ends -->
					<!-- Item starts --> */}
                                <div className="menu-item my-4">
                                    <div className="row border-dot no-gutters">
                                        <div className="col-8 menu-item-name">
                                            <h6>Dye your hair and beard 2</h6>
                                        </div>
                                        <div className="col-4 menu-item-price text-right">
                                            <h6>$21</h6>
                                        </div>
                                    </div>

                                </div>
                                {/* <!-- Item ends -->
					<!-- Item starts --> */}
                                <div className="menu-item">
                                    <div className="row border-dot no-gutters">
                                        <div className="col-8 menu-item-name">
                                            <h6>Dye your hair and beard 3</h6>
                                        </div>
                                        <div className="col-4 menu-item-price text-right">
                                            <h6>$25</h6>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Item ends -->
					<!-- Item starts --> */}
                                <div className="menu-item mt-4">
                                    <div className="row border-dot no-gutters">
                                        <div className="col-8 menu-item-name">
                                            <h6>Dye your hair and beard 4</h6>
                                        </div>
                                        <div className="col-4 menu-item-price text-right">
                                            <h6>$28</h6>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Item ends -->
					<!-- Item starts --> */}
                                <div className="menu-item mt-4">
                                    <div className="row border-dot no-gutters">
                                        <div className="col-8 menu-item-name">
                                            <h6>Dye your hair and beard 5</h6>
                                        </div>
                                        <div className="col-4 menu-item-price text-right">
                                            <h6>$30</h6>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Item ends -->
					<!-- Item starts --> */}
                                <div className="menu-item mt-4">
                                    <div className="row border-dot no-gutters">
                                        <div className="col-8 menu-item-name">
                                            <h6>Dye your hair and beard 6</h6>
                                        </div>
                                        <div className="col-4 menu-item-price text-right">
                                            <h6>$35</h6>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Item ends --> */}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- //pricing -->
  <!--/order-now--> */}
            <section className="order-sec py-5">
                <div className="container py-md-5">
                    <div className="test-info text-center">
                        <h3 className="tittle order">
                            <span>CALL US TO BOOK An APPOINTMENT</span>Our team will call back immediately and Book the Appointment</h3>
                        <h4 className="tittle my-2">123456789  </h4>

                        <div className="read-more mx-auto m-0 text-center">
                            <a href="contact.html" className="read-more scroll btn">Click here</a> </div>
                    </div>
                </div>
            </section>
            {/* <!--//order-now-->

 <!--/testimonials--> */}
            <section className="testimonials py-5" id="testimonials">
                <div className="container py-md-5">
                    <h3 className="heading text-center mb-3 mb-sm-5">Client Reviews</h3>
                    <div className="row mt-3">

                        <div className="col-md-4 test-grid text-left px-lg-3">
                            <div className="test-info">

                                <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                                <h3 className="mt-md-4 mt-3"> Abraham Smith</h3>

                                <div className="test-img text-center mb-3">
                                    <img src="assets/images/test1.jpg" className="img-fluid" alt="user-image" />
                                </div>
                                <div className="mobl-footer test-soc text-center">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">
                                                <span className="fa fa-facebook-f"></span>
                                            </a>
                                        </li>
                                        <li className="mx-1">
                                            <a href="#">
                                                <span className="fa fa-twitter"></span>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 test-grid text-left px-lg-3 py-sm-5 py-md-0 py-3">
                            <div className="test-info">
                                <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                                <h3 className="mt-md-4 mt-3"> Mariana Noe</h3>
                                <div className="test-img text-center mb-3">
                                    <img src="assets/images/test2.jpg" className="img-fluid" alt="user-image" />
                                </div>
                                <div className="mobl-footer test-soc text-center">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">
                                                <span className="fa fa-facebook-f"></span>
                                            </a>
                                        </li>
                                        <li className="mx-1">
                                            <a href="#">
                                                <span className="fa fa-twitter"></span>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 test-grid text-left px-lg-3">
                            <div className="test-info">

                                <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                                <h3 className="mt-md-4 mt-3">Nebula Nairobi</h3>

                                <div className="test-img text-center mb-3">
                                    <img src="assets/images/test3.jpg" className="img-fluid" alt="user-image"/>
                        </div>
                                    <div className="mobl-footer test-soc text-center">
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#">
                                                    <span className="fa fa-facebook-f"></span>
                                                </a>
                                            </li>
                                            <li className="mx-1">
                                                <a href="#">
                                                    <span className="fa fa-twitter"></span>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
    </section>
{/* 
                <!--//testimonials-->
<!-- subscribe --> */}
<section className="subscribe" id="subscribe">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 d-flex subscribe-left p-lg-5 py-sm-5 py-4">
                                <div className="news-icon mr-3">
                                    <span className="fa fa-paper-plane" aria-hidden="true"></span>
                                </div>
                                <div className="text">
                                    <h3>Subscribe To Our Newsletter</h3>
                                </div>
                            </div>
                            <div className="col-md-7 subscribe-right p-lg-5 py-sm-5 py-4">
                                <form action="#" method="post">
                                    <input type="email" name="email" placeholder="Enter your email here" required=""/>
                                        <button className="btn1"><span className="fa fa-paper-plane" aria-hidden="true"></span></button>
				</form>
                                    <p>we never share your email with anyone else</p>
			</div>
                            </div>
                        </div>
</section>
{/* //                     <!-- //subscribe -->
// <!-- footer --> */}
  

                            </div>
    )
}

export default Home;
