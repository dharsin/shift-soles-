import React from "react";
import {
  FaShippingFast,
  FaAward,
  FaSyncAlt
} from "react-icons/fa";

const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="container">

        <div className="trust-row">

          <div className="trust-content">

            <div className="trust-grid">

              <div className="trust-card">
                <FaShippingFast className="trust-icon" />

                <h3>Fast Delivery</h3>

                <p>
                  Custom-crafted shoes delivered
                  safely to your doorstep.
                </p>
              </div>

              <div className="trust-card">
                <FaAward className="trust-icon" />

                <h3>Premium Quality</h3>

                <p>
                  Handcrafted with premium
                  materials and precision.
                </p>
              </div>

              <div className="trust-card">
                <FaSyncAlt className="trust-icon" />

                <h3>Easy Replacement</h3>

                <p>
                  Hassle-free replacements
                  and customer support.
                </p>
              </div>

            </div>

            <div className="trust-authentic">
              <div className="authentic-logo">
                ✓
              </div>

              <div>
                <h4>Official Custom Studio</h4>

                <p>
                  Guaranteed authenticity on every
                  custom sneaker we create.
                </p>
              </div>
            </div>
          </div>

          <div className="trust-image">
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDN5MTkzNDUxZmo2eTNrZGV0bjFyM29hZTkwMHUwbzNybGlydXIyayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q7Y75zDdu3XOn5qCbH/giphy.gif"
              alt="Custom Sneaker"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrustSection;