import React from "react"
import {Link} from "react-router-dom"

function Footer() {
  return (
       <footer id="site-footer" className="site-footer">
          <div className="container">
              <div className="space-90"></div>
              <div className="row">
                  <div className="col-lg-6 mb-5 mb-lg-0">
                      <h3 className="text-light">Ready to Get Started? <br/> Sign Up Now and Try Free</h3>
                  </div>
                  <div className="col-lg-6">
                      <form action="newsletter.php" id="ajax-form" name="ajax-form" method="post" className="mc4wp-form">
                          <div className="mc4wp-form-fields">
                              <div className="main-form">
                                  <input id="email" type="email" name="email" placeholder="Enter Your Email" required=""/>
                                  <input type="submit" id="send" value="Subscribe Now" />
                                  <div className="clear"></div>   
                                  <div className="error" id="err-form">There was a problem validating the form please check!</div>
                                  <div className="error" id="err-timedout">The connection to the server timed out!</div>
                                  <div className="error" id="err-state"></div>
                                  <p>
                                      <label>
                                          <input name="term" type="checkbox" value="1" checked="" /> 
                                          <span>I agree to the Terms, Privacy Policy. You also agree that you’re over 18 years of age.</span>
                                      </label>
                                  </p>
                              </div>
                          </div>
                      </form>
                      <div className="clear"></div>
                      <div id="ajaxsuccess">Successfully sent!!</div>
                      <div className="clear"></div>
                  </div>
              </div>
              <div className="space-90"></div>
              <hr className="f1"/>
              <div className="space-80"></div>
              <div className="row">
                  <div className="col-md-3 col-sm-6 mb-5 mb-md-0">
                      <div className="footer-widget">
                          <h5 className="footer-title">Contacts</h5>
                          <div className="footer-contact-info">
                              <span className="number-phone">+ 123-456-7890</span>
                              <span className="number-phone">+ 123-456-7891</span>
                              <div className="space-20"></div>
                              <div className="space-5"></div>
                              <span>Mon - Sun: 10am - 10pm</span>
                              <div className="space-20"></div>
                              <div className="space-2"></div>
                              <span>670 Lafayette Ave, Brooklyn, NY 11216</span>
                              <div className="space-10"></div>
                              <div className="space-5"></div>
                              <div className="space-2"></div>
                              <Link className="text-color-primary text-decoration" to="mailto:progrisaas@example.com">progrisaas@example.com</Link>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-5 mb-md-0">
                      <div className="footer-widget">
                          <h5 className="footer-title">Company</h5>
                          <ul>
                              <li><Link to="index.html">Home</Link></li>
                              <li><Link to="#">Company</Link></li>
                              <li><Link to="services-1.html">Services</Link></li>
                              <li><Link to="#">Cases</Link></li>
                              <li><Link to="blog.html">News</Link></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-5 mb-sm-0">
                      <div className="footer-widget">
                          <h5 className="footer-title">Resources</h5>
                          <ul>
                              <li><Link to="#">Demos</Link></li>
                              <li><Link to="#">Webinars</Link></li>
                              <li><Link to="#">Docs</Link></li>
                              <li><Link to="#">Community</Link></li>
                              <li><Link to="#">Support</Link></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                      <div className="footer-widget">
                          <h5 className="footer-title">Follow Us</h5>
                          <ul>
                              <li><Link to="#">Facebook</Link></li>
                              <li><Link to="#">Twitter</Link></li>
                              <li><Link to="#">Instagram</Link></li>
                              <li><Link to="#">Linkedin</Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="space-60"></div>
              <div className="space-5"></div>
              <div className="row">
                  <div className="col-lg-6 col-md-8 mb-3 mb-md-0 align-self-center">
                      <p className="copyright">Copyright © 2022 Progrisaas by Thememodern. All Rights Reserved.</p>
                  </div>
                  <div className="col-lg-6 col-md-4 text-md-right">
                      <ul className="ft-menu">
                          <li><Link to="#">Privacy Policy</Link></li>
                          <li><Link to="#">Terms of Use</Link></li>
                      </ul>
                  </div>
              </div>
              <div className="space-40"></div>
          </div>
      </footer>
  )
}

export default Footer