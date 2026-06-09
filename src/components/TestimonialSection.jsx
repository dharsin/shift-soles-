import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Kumar",
    role: "Sneaker Enthusiast",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The customization quality exceeded my expectations. Every detail matched exactly what I designed online.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Fashion Creator",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "My custom sneakers are truly one of a kind. The materials feel premium and the fit is perfect.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Streetwear Collector",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Shift Soles transformed my idea into reality. The craftsmanship and attention to detail are outstanding.",
  },
  {
    id: 4,
    name: "Aisha Khan",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The color combinations and personalization options are incredible. Highly recommended.",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Athlete",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Comfort, style, and uniqueness all in one package. My favorite pair of shoes ever.",
  },
  {
    id: 6,
    name: "Meera Nair",
    role: "Content Creator",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Everyone asks where I got my custom sneakers. The design process was smooth and fun.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="container">

        <div className="testimonial-header">
          <span className="testimonial-badge">
            CUSTOMER REVIEWS
          </span>

          <h2>
            Loved By Custom
            <span> Sneaker Fans</span>
          </h2>

          <p>
            Thousands of sneaker lovers trust Shift Soles Studio
            to bring their dream footwear to life.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>

              <div className="quote-mark">❝</div>

              <p className="testimonial-text">
                {item.review}
              </p>

              <div className="testimonial-user">
                <img src={item.image} alt={item.name} />

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;