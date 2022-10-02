import React, { useEffect } from "react";

function Contact() {
  return (
    <>
              <div id="content" className="site-content">
        <div className="page-header dtable text-center">
          <div className="dcell">
            <div className="container">
              <h1 className="page-title">Contacts</h1>
              <ul id="breadcrumbs" className="breadcrumbs none-style">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">contacts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-page">
        <div className="container">
          <div className="space-100"></div>
          <div className="row">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="ssub-yes">
                <div className="ot-heading">
                  <span className="ot-heading__sub">contacts</span>
                  <h2 className="ot-heading__title">How to Find Us</h2>
                  <div className="space-20"></div>
                </div>
              </div>
              <p>
                If you have any questions, just fill in the contact form, and we
                will answer you shortly.
              </p>
              <div className="space-5"></div>
              <div className="contact-info">
                <a href="tel:+1%20800%20963%204564">
                  <span className="pl-0">
                    {/* <svg className="pb-1" viewBox="0 0 480.56 480.56">
                                        <g>
                                            <g>
                                                <path d="M365.354,317.9c-15.7-15.5-35.3-15.5-50.9,0c-11.9,11.8-23.8,23.6-35.5,35.6c-3.2,3.3-5.9,4-9.8,1.8    c-7.7-4.2-15.9-7.6-23.3-12.2c-34.5-21.7-63.4-49.6-89-81c-12.7-15.6-24-32.3-31.9-51.1c-1.6-3.8-1.3-6.3,1.8-9.4    c11.9-11.5,23.5-23.3,35.2-35.1c16.3-16.4,16.3-35.6-0.1-52.1c-9.3-9.4-18.6-18.6-27.9-28c-9.6-9.6-19.1-19.3-28.8-28.8    c-15.7-15.3-35.3-15.3-50.9,0.1c-12,11.8-23.5,23.9-35.7,35.5c-11.3,10.7-17,23.8-18.2,39.1c-1.9,24.9,4.2,48.4,12.8,71.3    c17.6,47.4,44.4,89.5,76.9,128.1c43.9,52.2,96.3,93.5,157.6,123.3c27.6,13.4,56.2,23.7,87.3,25.4c21.4,1.2,40-4.2,54.9-20.9    c10.2-11.4,21.7-21.8,32.5-32.7c16-16.2,16.1-35.8,0.2-51.8C403.554,355.9,384.454,336.9,365.354,317.9z"></path>
                                                <path d="M346.254,238.2l36.9-6.3c-5.8-33.9-21.8-64.6-46.1-89c-25.7-25.7-58.2-41.9-94-46.9l-5.2,37.1    c27.7,3.9,52.9,16.4,72.8,36.3C329.454,188.2,341.754,212,346.254,238.2z"></path>
                                                <path d="M403.954,77.8c-42.6-42.6-96.5-69.5-156-77.8l-5.2,37.1c51.4,7.2,98,30.5,134.8,67.2c34.9,34.9,57.8,79,66.1,127.5    l36.9-6.3C470.854,169.3,444.354,118.3,403.954,77.8z"></path>
                                            </g>
                                        </g>
                                    </svg> */}
                  </span>
                  <span className="info-text">+1 800 963 4564</span>
                </a>
              </div>
              <div className="space-20"></div>
              <p>
                670 Lafayette Ave, Brooklyn,
                <br />
                NY 11216
              </p>
              <p>
                Monday -Fruday: 8am – 6pm
                <br />
                Saturday: 8am -2pm
                <br />
                Sunday: Closed
              </p>
              <a href="mailto:email@example.com" target="_blank" rel="noopener">
                email@example.com
              </a>
              <div className="space-30"></div>
              <div className="author-widget_social contact-social">
                <a className="social-facebook" href="facebook.com">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="social-instagram" href="instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="social-linkedin" href="linkedin.com">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-6">
              <div className="ssub-yes">
                <div className="ot-heading">
                  <span className="ot-heading__sub">SAY HI</span>
                  <h2 className="ot-heading__title">Drop Us a Line</h2>
                  <div className="space-20"></div>
                  <form
                    id="ajax-form"
                    name="ajax-form"
                    action="contact.php"
                    method="post"
                    className="wpcf7"
                  >
                    <div className="main-form">
                      <p>
                        <label for="name">
                          {" "}
                          <span className="error" id="err-name">
                            please enter name
                          </span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value=""
                          size="40"
                          className=""
                          aria-invalid="false"
                          placeholder="Your Name *"
                          required
                        />
                      </p>
                      <p>
                        <label for="email">
                          <span className="error" id="err-email">
                            please enter e-mail
                          </span>
                          <span className="error" id="err-emailvld">
                            e-mail is not a valid format
                          </span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value=""
                          size="40"
                          className=""
                          aria-invalid="false"
                          placeholder="Your Email *"
                          required
                        />
                      </p>
                      <p>
                        <label for="phone">
                          {" "}
                          <span className="error" id="err-phone">
                            please enter phone
                          </span>
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          value=""
                          size="40"
                          className=""
                          aria-invalid="false"
                          placeholder="Your Phone *"
                          required
                        />
                      </p>
                      <p>
                        <label for="message"></label>
                        <textarea
                          name="message"
                          id="message"
                          cols="40"
                          rows="4"
                          className=""
                          aria-invalid="false"
                          placeholder="Your Message..."
                          required
                        ></textarea>
                      </p>
                      <p>
                        <span className="wpcf7-checkbox">
                          <label>
                            <input
                              type="checkbox"
                              name="your-term[]"
                              value=""
                            />
                            <span className="wpcf7-list-item-label">
                              By signing and clicking Submit, you affirm you
                              have read and agree to the Privacy Policy and
                              Terms of Use and want to receive news.
                            </span>
                          </label>
                        </span>
                      </p>
                      <p>
                        <button type="submit" id="send" className="octf-btn">
                          Send Message
                        </button>
                      </p>
                      <div className="clear"></div>
                      <div className="error" id="err-form">
                        There was a problem validating the form please check!
                      </div>
                      <div className="error" id="err-timedout">
                        The connection to the server timed out!
                      </div>
                      <div className="error" id="err-state"></div>
                    </div>
                  </form>
                  <div className="clear"></div>
                  <div id="ajaxsuccess">Successfully sent!!</div>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-100"></div>
        </div>
      </section>
      <div className="contact-map">
        <div className="map">
          {/* <iframe
            src="https://maps.google.com/maps?q=411%20University%20St%2C%20Seattle%2C%20USA&t=m&z=10&output=embed&iwloc=near"
            height="600"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe> */}
        </div>
      </div>
    </>
  )
}

export default Contact;
