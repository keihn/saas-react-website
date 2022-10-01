import React, { useEffect } from "react"

function Team() {
  return (
    <>
              <div id="content" className="site-content">
            <div className="page-header dtable text-center">
                <div className="dcell">
                    <div className="container">
                        <h1 className="page-title">Our Team</h1>
                        <ul id="breadcrumbs" className="breadcrumbs none-style">
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Our Team</li>
                        </ul> 
                    </div>
                </div>
            </div>
        </div>

        <section className="team-top">
            <div className="container">
                <div className="space-90"></div>
                <div className="row">
                    <div className="col-lg-6 mb-5 mb-xl-0">
                        <div className="ssub-yes">
                            <div className="ot-heading">
                                <span className="ot-heading__sub">results</span>
                                <h2 className="ot-heading__title">The Results of Our Work are Tailored to the Interests of Each Client</h2>
                            </div>
                        </div>
                        <div className="space-70"></div>
                        <div className="ot-progress-line team-progress-1" data-percent="7" data-processed="true">
                            <div className="ot-progress-line__inner">
                                <div className="progress-bar text-left">
                                    <span className="ppercent">7%</span>
                                </div>
                            </div>
                            <p className="progress-des">Irure dolor in reprehenderit</p>
                        </div>
                        <div className="space-20"></div>
                        <div className="space-5"></div>
                        <div className="ot-progress-line team-progress-2" data-percent="88" data-processed="true">
                            <div className="ot-progress-line__inner">
                                <div className="progress-bar text-left">
                                    <span className="ppercent">88%</span>
                                </div>
                            </div>
                            <p className="progress-des">Duis aute irure dolor in reprehenderit</p>
                        </div>
                        <div className="space-20"></div>
                        <div className="space-5"></div>
                        <div className="ot-progress-line team-progress-3" data-percent="29" data-processed="true">
                            <div className="ot-progress-line__inner">
                                <div className="progress-bar text-left">
                                    <span className="ppercent">29%</span>
                                </div>
                            </div>
                            <p className="progress-des">Duis aute irure dolor</p>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <p className="lead">These cases are perfectly simple and easy to distinguish.</p>
                        <p>In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.</p>
                    </div>
                </div>
                <div className="space-150 d-none d-lg-block"></div>
                <div className="space-150 d-none d-lg-block"></div>
                <div className="space-40"></div>
                <div className="space-5"></div>
            </div>
        </section>

        <section className="team-list">
            <div className="container">
            <div className="space-50"></div>
            <div className="space-5"></div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="ssub-yes">
                            <div className="ot-heading">
                                <span className="ot-heading__sub">team</span>
                                <h2 className="ot-heading__title">Our Staff</h2>
                            </div>
                        </div>
                        <div className="space-30"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <div className="ot-team text-center text-sm-left">
                            <div className="ot-team__thumb">
                                <img src="https://via.placeholder.com/240x240.png" alt="" className="team-img-medium"/>
                            </div>
                            <div className="ot-team__info">
                                <h5 className="tname">Alex Sollerio</h5>
                                <span>Co-Founder of Company</span>
                                <p>He is a frequent speaker on the topics of global innovation.</p>
                                <div className="team-social">
                                    <a className="facebook elementor-repeater-item-f517d9a" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="instagram elementor-repeater-item-e9c9c13" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-instagram"></i>
                                    </a>
                                    <a className="linkedin elementor-repeater-item-e6edc1f" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <div className="ot-team text-center text-sm-left">
                            <div className="ot-team__thumb">
                                <img src="https://via.placeholder.com/240x240.png" alt="" className="team-img-medium"/>
                            </div>
                            <div className="ot-team__info">
                                <h5 className="tname">Amanda Red</h5>
                                <span>CEO of Company</span>
                                <p>She is a services industry veteran with a diversifie</p>
                                <div className="team-social">
                                    <a className="facebook elementor-repeater-item-f517d9a" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="instagram elementor-repeater-item-e9c9c13" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-instagram"></i>
                                    </a>
                                    <a className="linkedin elementor-repeater-item-e6edc1f" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <div className="ot-team text-center text-sm-left">
                            <div className="ot-team__thumb">
                                <img src="https://via.placeholder.com/240x240.png" alt="" className="team-img-medium"/>
                            </div>
                            <div className="ot-team__info">
                                <h5 className="tname">Tomas Rodjers</h5>
                                <span>General Manager</span>
                                <p>He is also an avid cook and history buff</p>
                                <div className="team-social">
                                    <a className="facebook elementor-repeater-item-f517d9a" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="instagram elementor-repeater-item-e9c9c13" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-instagram"></i>
                                    </a>
                                    <a className="linkedin elementor-repeater-item-e6edc1f" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <div className="ot-team text-center text-sm-left">
                            <div className="ot-team__thumb">
                                <img src="https://via.placeholder.com/240x240.png" alt="" className="team-img-medium"/>
                            </div>
                            <div className="ot-team__info">
                                <h5 className="tname">Sandrah Rich</h5>
                                <span>Senior Digital Strategist</span>
                                <p>She is responsible for all delivery, operations and talent</p>
                                <div className="team-social">
                                    <a className="facebook elementor-repeater-item-f517d9a" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="instagram elementor-repeater-item-e9c9c13" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-instagram"></i>
                                    </a>
                                    <a className="linkedin elementor-repeater-item-e6edc1f" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <div className="ot-team text-center text-sm-left">
                            <div className="ot-team__thumb">
                                <img src="https://via.placeholder.com/240x240.png" alt="" className="team-img-medium"/>
                            </div>
                            <div className="ot-team__info">
                                <h5 className="tname">Victor Miller</h5>
                                <span>Co-Founder of Company</span>
                                <p>He is a frequent speaker on the topics of global innovation.</p>
                                <div className="team-social">
                                    <a className="facebook elementor-repeater-item-f517d9a" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="instagram elementor-repeater-item-e9c9c13" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-instagram"></i>
                                    </a>
                                    <a className="linkedin elementor-repeater-item-e6edc1f" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <div className="ot-team text-center text-sm-left">
                            <div className="ot-team__thumb">
                                <img src="https://via.placeholder.com/240x240.png" alt="" className="team-img-medium"/>
                            </div>
                            <div className="ot-team__info">
                                <h5 className="tname">Anna Brown</h5>
                                <span>CEO of Company</span>
                                <p>She is a services industry veteran with a diversifie</p>
                                <div className="team-social">
                                    <a className="facebook elementor-repeater-item-f517d9a" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="instagram elementor-repeater-item-e9c9c13" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-instagram"></i>
                                    </a>
                                    <a className="linkedin elementor-repeater-item-e6edc1f" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <div className="ot-team text-center text-sm-left">
                            <div className="ot-team__thumb">
                                <img src="https://via.placeholder.com/240x240.png" alt="" className="team-img-medium"/>
                            </div>
                            <div className="ot-team__info">
                                <h5 className="tname">Andrew Smith</h5>
                                <span>General Manager</span>
                                <p>He is also an avid cook and history buff</p>
                                <div className="team-social">
                                    <a className="facebook elementor-repeater-item-f517d9a" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="instagram elementor-repeater-item-e9c9c13" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-instagram"></i>
                                    </a>
                                    <a className="linkedin elementor-repeater-item-e6edc1f" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <div className="ot-team text-center text-sm-left">
                            <div className="ot-team__thumb">
                                <img src="https://via.placeholder.com/240x240.png" alt="" className="team-img-medium"/>
                            </div>
                            <div className="ot-team__info">
                                <h5 className="tname">Luci Well</h5>
                                <span>Senior Digital Strategist</span>
                                <p>She is responsible for all delivery, operations and talent</p>
                                <div className="team-social">
                                    <a className="facebook elementor-repeater-item-f517d9a" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="instagram elementor-repeater-item-e9c9c13" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-instagram"></i>
                                    </a>
                                    <a className="linkedin elementor-repeater-item-e6edc1f" rel="nofollow" href="#">
                                        <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="ot-button">
                            <a href="contact.html" className="octf-btn octf-btn-second">Join Our Team</a>
                        </div>
                    </div>
                </div>
                <div className="space-150"></div>
                <div className="space-150"></div>
                <div className="space-60"></div>
            </div>
        </section>

        <section className="team-slider">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="ot-image-slider owl-carousel owl-theme">
                            <div className="item">
                                <figure>
                                    <img src="https://via.placeholder.com/770x578.png" alt=""/>
                                </figure>
                            </div>
                            <div className="item">
                                <figure>
                                    <img src="https://via.placeholder.com/770x578.png" alt=""/>
                                </figure>
                            </div>
                            <div className="item">
                                <figure>
                                    <img src="https://via.placeholder.com/770x578.png" alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="team-faq">
            <div className="container">
                <div className="space-90"></div>
                <div className="row">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <div className="ssub-yes">
                            <div className="ot-heading">
                                <span className="ot-heading__sub">Most popular</span>
                                <h2 className="ot-heading__title">Frequently Asked Questions from Our Community</h2>
                            </div>
                        </div>
                        <div className="space-10"></div>
                        <div className="space-5"></div>
                        <p>We cut through today’s complexity and use whatever technology it takes to get you where want to be.</p>
                        <div className="space-20"></div>
                        <div className="ot-button">
                            <a href="#/" className="octf-btn octf-btn-second">Have Questions?</a>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <div className="ot-accordions-wrapper style-1">
                            <div className="ot-acc-item">
                                <h5 className="ot-acc-item__title flex-middle" data-default="yes">
                                    What is 3D desing and how it work?
                                    <span className="down">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                                            <g><g>
                                                <polygon points="276,236 276,0 236,0 236,236 0,236 0,276 236,276 236,512 276,512 276,276 512,276 512,236"></polygon>
                                            </g></g>
                                        </svg> */}
                                    </span>
                                    <span className="up">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                                            <g><g><rect y="236" width="512" height="40"></rect></g></g>
                                        </svg> */}
                                    </span>
                                </h5>
                                <div className="ot-acc-item__content">
                                    The basic philosophy of our studio is to create individual, aesthetically stunning solutions for our customers by lightning-fast development of projects employing unique styles.
                                </div>
                            </div>
                            <div className="ot-acc-item">
                                <h5 className="ot-acc-item__title flex-middle">
                                    What is the responsibility of an accounting company?
                                    <span className="down">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                                            <g><g>
                                                <polygon points="276,236 276,0 236,0 236,236 0,236 0,276 236,276 236,512 276,512 276,276 512,276 512,236"></polygon>
                                            </g></g>
                                        </svg> */}
                                    </span>
                                    <span className="up">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                                            <g><g><rect y="236" width="512" height="40"></rect></g></g>
                                        </svg> */}
                                    </span>
                                </h5>
                                <div className="ot-acc-item__content">
                                    The basic philosophy of our studio is to create individual, aesthetically stunning solutions for our customers by lightning-fast development of projects employing unique styles.
                                </div>
                            </div>
                            <div className="ot-acc-item">
                                <h5 className="ot-acc-item__title flex-middle">
                                    Where to place 1C Base customer?
                                    <span className="down">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                                            <g><g>
                                                <polygon points="276,236 276,0 236,0 236,236 0,236 0,276 236,276 236,512 276,512 276,276 512,276 512,236"></polygon>
                                            </g></g>
                                        </svg> */}
                                    </span>
                                    <span className="up">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                                            <g><g><rect y="236" width="512" height="40"></rect></g></g>
                                        </svg> */}
                                    </span>
                                </h5>
                                <div className="ot-acc-item__content">
                                    The basic philosophy of our studio is to create individual, aesthetically stunning solutions for our customers by lightning-fast development of projects employing unique styles.
                                </div>
                            </div>
                            <div className="ot-acc-item">
                                <h5 className="ot-acc-item__title flex-middle">
                                    How do I pay account provider?
                                    <span className="down">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                                            <g><g>
                                                <polygon points="276,236 276,0 236,0 236,236 0,236 0,276 236,276 236,512 276,512 276,276 512,276 512,236"></polygon>
                                            </g></g>
                                        </svg> */}
                                    </span>
                                    <span className="up">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                                            <g><g><rect y="236" width="512" height="40"></rect></g></g>
                                        </svg> */}
                                    </span>
                                </h5>
                                <div className="ot-acc-item__content">
                                    The basic philosophy of our studio is to create individual, aesthetically stunning solutions for our customers by lightning-fast development of projects employing unique styles.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-100"></div>
            </div>
        </section>
    </>
  )
}

export default Team