import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">

      <div className="footer-container">

        <div className="footer-grid">

        

          <div className="footer-brand">
            <h2>Shift Soles</h2>

            <p>
              Design footwear that reflects your personality.
              Premium custom sneakers crafted for creators,
              dreamers, and trendsetters.
            </p>

            
          </div>

        

          <div className="footer-links">
            <h3>Quick Links</h3>

            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Customize</a></li>
              <li><a href="/">Collections</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>

          

          <div className="footer-links">
            <h3>Collections</h3>

            <ul>
              <li><a href="/">Custom Sneakers</a></li>
              <li><a href="/">Premium Materials</a></li>
              <li><a href="/">Limited Edition</a></li>
              <li><a href="/">Streetwear Series</a></li>
              <li><a href="/">Artist Collabs</a></li>
            </ul>
          </div>

         

          <div className="footer-newsletter">
            <h3>Stay Updated</h3>

            <p>
              Subscribe for exclusive drops,
              special discounts, and early access.
            </p>

            <div className="newsletter-box">
              <input
                type="email"
                placeholder="Enter your email"
              />

              <button>
                Join
              </button>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Shift Soles Studio. All Rights Reserved.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;