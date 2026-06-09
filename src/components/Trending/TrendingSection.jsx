import React from "react";

const TrendingSection = () => {
  const products = [
    {
      id: 1,
      title: "Velocity Air",
      desc: "Engineered for explosive speed",
      gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnZsd3M5eWRzMHp4eGh4bWZhd25meDU1Z2poOHpzeXliYjM3Z3BxNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1AfbDIcBvc05cqyzkX/giphy.gif",
    },
    {
      id: 2,
      title: "Urban Pulse",
      desc: "Street-ready comfort for daily wear",
      gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHhneHNvZTA5OW1hMWl6bTI1aDg0MTZ2N3F1ZGdtcDU4eGdjOGJ1eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8coNFsf1l44cWdprSO/giphy.gif",
    },
    {
      id: 3,
      title: "Zenith Trail",
      desc: "Rugged durability for every terrain",
      gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnE4eGZrYXBrYWVvbXlidm56dHR6cnNkNmVoejg0aTFydmJlZG04aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/X9FyShkRdcRoLvTSLU/giphy.gif",
    },
    {
      id: 4,
      title: "Apex Glider",
      desc: "Featherlight design for peak performance",
      gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2tuN2p6em9qMXVjenAwdzFidmF2dGRuaHFzOTFvc3N2YjhjbW5pNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7vzoSK0iWuLtQq4DJ5/giphy.gif",
    },
  ];
  return (
    <section className="section-container">
      <div className="row trending-row">
        <h2 className="trending-section-title">Trending in 2026</h2>

        <div className="trending-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.gif}
                alt={product.title}
                className="product-gif"
              />
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
              <button className="purchase-btn">Purchase Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
