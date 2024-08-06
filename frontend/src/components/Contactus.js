import React from "react";
import '../styles/style.css';


function Contactus() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Contact Page</title>
          {/* <link rel="stylesheet" href="css\style.css" /> */}
          <section className="contact-section">
            <div className="contact-container">
              <div className="contact-content">
                <div className="image-column">
                  <img src="/frontend/src/styles/ha.jpg" alt="Hinh cua Nguyen Hoang Anh" />
                </div>
                <div className="form-column">
                  <div className="form-wrapper">
                    <header className="contact-header">
                      <h2 className="contact-title">Contact me</h2>
                      <p className="contact-subtitle">Send message to Nguyen Hoang Anh</p>
                    </header>
                    <form className="contact-form">
                      <div className="form-input">
                        <label htmlFor="firstName" className="input-label">First name</label>
                        <input type="text" id="firstName" className="input-field" placeholder="Anh" />
                      </div>
                      <div className="form-input">
                        <label htmlFor="lastName" className="input-label">Last name</label>
                        <input type="text" id="lastName" className="input-field" placeholder="Nguyen Hoang" />
                      </div>
                      <div className="form-input">
                        <label htmlFor="email" className="input-label">Email address</label>
                        <input type="email" id="email" className="input-field" placeholder="email@gmail.com" />
                      </div>
                      <div className="form-input message-input">
                        <label htmlFor="message" className="input-label">Your message</label>
                        <textarea id="message" className="input-field message-field" placeholder="Enter your question or message" defaultValue={""} />
                      </div>
                      <button type="submit" className="submit-button">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    };
  

  export default Contactus;
 