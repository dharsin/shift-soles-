import React from "react";
import Navbar from "../components/Navbar";
import TrendingSection from "../components/Trending/TrendingSection";
import CategorySection from "../components/CategorySection";
import Footer from "../components/Footer";
import TestimonialSection from "../components/TestimonialSection";
import TrustSection from "../components/TrustSection";

const HomePage = () => {
  const parts = [
    { name: "Upper", desc: "Sustainable woven knit for breathability." },
    { name: "Midsole", desc: "Cloud-tech foam for maximum energy return." },
    { name: "Outsole", desc: "Reinforced rubber for ultimate grip." },
  ];

  return (
    <div className="home-page">
      <Navbar />

      <section className="marquee-wrapper">
        <div className="row marquee-row">
          <div className="marquee-track">
            <div className="marquee-content">
              <span>
                GET <span className="accent">30% OFF</span> ON YOUR FIRST
                CUSTOMIZATION •{" "}
              </span>
              <span>SHIFT SOLES STUDIO • </span>
              <span>LIMITED TIME ONLY • </span>
              <span>DESIGN YOUR OWN SNEAKER • </span>
            </div>

            <div className="marquee-content" aria-hidden="true">
              <span>
                GET <span className="accent">30% OFF</span> ON YOUR FIRST
                CUSTOMIZATION •{" "}
              </span>
              <span>SHIFT SOLES STUDIO • </span>
              <span>LIMITED TIME ONLY • </span>
              <span>DESIGN YOUR OWN SNEAKER • </span>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-container">
        <div className="banner-row">
          <div className="banner-content">
            <span className="badge">SHIFT SOLES STUDIO </span>
            <h1>
              Your Style.
              <br />
              <span className="banner-text">Your Soles.</span>
            </h1>
            <p>
              Break away from the ordinary. Pick your colors, select premium
              materials, and design a sneaker that is completely unique to you.
            </p>
            <button className="cta-button">Start Customizing</button>
          </div>

          <div className="banner-visual">
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3NpdjRlZHg5ZmZ6d3I5emYxYmtiMXYzN2J5YnhvYmJlb2ppOTQ1cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ejcoQeKAnFab6/giphy.gif"
              alt="Rotating Customizable Shoe"
            />
          </div>
        </div>
      </section>

      <section className="about-section-container about-container">
        <div className="row about-row">
          <div className="about-visual">
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExazhtcWl6MjlxYjFweXE3ZmNtNmQ3eHVqZTg1YXhsZHNlMjlpZjFmbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ekXiPxta8JXdWK5OC1/giphy.gif"
              alt="Futuristic Shoe Crafting"
            />
          </div>

          <div className="about-content">
            <span className="badge font-marker">The Vision</span>
            <h2 className="font-pacifico">Crafting Tomorrow’s Footwear</h2>
            <p>
              ShiftSoles is more than a sneaker store. We are a collective of
              designers and engineers bridging the gap between classic comfort
              and future-tech aesthetics. Every stitch, every layer, and every
              sole is built for those who dare to move differently.
            </p>
            <button className="cta-button">Join The Collective</button>
          </div>
        </div>
      </section>

      <section className="offer-section">
        <div className="offer-glow"></div>

        <div className="container">
          <div className="offer-row">
            <div className="offer-visual">
              <div className="discount-circle">
                <span>30%</span>
                <small>OFF</small>
              </div>

              <img
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDRoaXUxbzNnZ3EwY3c2NXE1N2d3Zmo2dmdtNjZzNHR0OGd3MTVhZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5WlXGaNnB0N6o/giphy.gif"
                alt="Custom Shoe"
              />
            </div>
            <div className="offer-content">
              <span className="offer-tag">NEW CUSTOMER OFFER</span>

              <h2>
                Get
                <span> 30% OFF </span>
                Your First
                <br />
                Custom Shoe Design
              </h2>

              <p>
                Design your dream sneakers with premium materials, custom
                colors, unique artwork, and handcrafted precision. Claim your
                exclusive first-order discount today.
              </p>

              <div className="offer-buttons">
                <button className="offer-btn">Start Customizing</button>

                <button className="offer-outline-btn">Explore Designs</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrendingSection />

      <CategorySection />

      <TrustSection />

      <TestimonialSection />

      <Footer />
    </div>
  );
};

export default HomePage;
