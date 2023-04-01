import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <section className="contact-area padding-top gray-bg" id="contact">
        <div className="contact-form-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <div className="contact-details-content wow fadeIn">
                  <h2>Contact Info</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the et majori have suffered alteration in
                    some form, by injected humour, Domised words which don`t
                    look even slightly believable. If you are going to use a pas
                    of Lorem Ipsum, you need to be sure there isn`t anything
                    embarrassing hidden in the middle of text.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="contact-address-details">
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="fa fa-map-marker"></i>
                      </div>
                      <div className="contact-details">
                        <h5>Address</h5>
                        <p>Freedom Way, Jersey City, NJ 07305, USA</p>
                      </div>
                    </div>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="fa fa-phone"></i>
                      </div>
                      <div className="contact-details">
                        <h5>Phone</h5>
                        <p>+880 1911 854 378</p>
                      </div>
                    </div>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="fa fa-map-marker"></i>
                      </div>
                      <div className="contact-details">
                        <h5>Email</h5>
                        <p>
                          <a
                            href="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="bcdedddfd7ccd5ccd9ce92dfd3d1fcdbd1ddd5d092dfd3d1"
                          >
                            [email&#160;protected]
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <div className="contact-form mb50 wow fadeIn">
                  <h2>Send Message</h2>
                  <form action="process.php" id="contact-form" method="post">
                    <div className="form-group" id="name-field">
                      <div className="form-input">
                        <input
                          type="text"
                          className="form-control"
                          id="form-name"
                          name="form-name"
                          placeholder="Name.."
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group" id="email-field">
                      <div className="form-input">
                        <input
                          type="email"
                          className="form-control"
                          id="form-email"
                          name="form-email"
                          placeholder="Email.."
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group" id="phone-field">
                      <div className="form-input">
                        <input
                          type="text"
                          className="form-control"
                          id="form-phone"
                          name="form-phone"
                          placeholder="Subject.."
                        />
                      </div>
                    </div>
                    <div className="form-group" id="message-field">
                      <div className="form-input">
                        <textarea
                          className="form-control"
                          rows={6}
                          id="form-message"
                          name="form-message"
                          placeholder="Your Message Here..."
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="map-area relative">
                  <div id="map" style={{width: "100%", height: "300px"}}>
                    {" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact