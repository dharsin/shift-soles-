import React, { useState, useEffect } from "react";

const categoryData = {
  sneakers: [
    {
      id: 1,
      name: "Urban Runner",
      image:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXcydnk0OXZlZnhiYzZnaGRjOWVxNWVxd3F0dmltOWw5c2dyejlqYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8coNFsf1l44cWdprSO/giphy.gif",
    },
    {
      id: 2,
      name: "Street Flex",
      image:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXA5cDd6ZXZ0ZnhidXRsZDEzOHF5YTB4ZnhpNDc4NzRoN2V2YjN5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1fVpC6zSsryqrqUdg7/giphy.gif",
    },
    {
      id: 3,
      name: "Daily Motion",
      image:
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzBsa2VmdnhiZnNtNTQ2bTd2cTdtb2NzOWFmeTN1NDRkYnhkOTg1MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XGbRKcgz8WYhuRW977/giphy.gif",
    },
    {
      id: 4,
      name: "City Boost",
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWVyZ2I5MmR0aDA5MmRrbDV4bWs2a2s4OXU3ODRkMnBqdG1kcmpwbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YB9fAJ35BFd3BLPTv0/giphy.gif",
    },
  ],

  materials: [
    {
      id: 5,
      name: "Italian Leather",
      image:
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExajQ3cW5yMm84cWI4bWFlMnhlZGFxOTJjb2V5ZXljZXVxcnh4MjlvbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2ipOoFGvxkuSHWo3J8/giphy.gif",
    },
    {
      id: 6,
      name: "Suede Finish",
      image:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnFkY3VzeG0zeWZsODU0Y3JjdXBtNmJ0N2ZmcXpzZ2IyZHlvaTN4dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QgkDHCb6UXsD8V7wKm/giphy.gif",
    },
    {
      id: 7,
      name: "Canvas Style",
      image:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjBzNjV2OXNjYW8xaTVwcHp6eXA1cWp3aGxsb29kbnZ3NjFvOTIweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1Rj2QCQ81QepeyFnkb/giphy.gif",
    },
    {
      id: 8,
      name: "Premium Knit",
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjhqaHU1MGVhYzI5eDJmdmtveXQxMmRkdmVxeGV1dnUzM2lnanh4NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/URkLZvIVcOo4OckpIb/giphy.gif",
    },
  ],

  editions: [
    {
      id: 9,
      name: "Galaxy Edition",
      image:
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDFscXlqY2tqOHZwNXFzOTlmZXBodG5hN2thbHR3MWc2eGtpbnF2cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/69jF9dWrxSXMeIcvoG/giphy.gif",
    },
    {
      id: 10,
      name: "Shadow Drop",
      image:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3VjZGJuZzV2ZGdyZDhlcGpnczc4djJtNmhkbzdvMnh1a3kxemhldCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2tOu52iTY6lO7Hnz5u/giphy.gif",
    },
    {
      id: 11,
      name: "Gold Series",
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2psd3prNDBhczRiYmY1aDI3NzFiYnhmMjRiMnNuamJ4NHdkZmpyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YB9fAJ35BFd3BLPTv0/giphy.gif",
    },
    {
      id: 12,
      name: "Artist Collab",
      image:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXZ0NmwzZTJycjJlbDdsMG9iaGhlNGZlN2o4eXpmY2J2bGN4eG42ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fQYxPwJ9JuXjclAogN/giphy.gif",
    },
  ],
};

const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState("sneakers");
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="category-section">
      <div
        className="parallax-bg"
        style={{
          transform: `translateY(${offsetY * 0.2}px)`,
        }}
      />

      <div className="container">
        <div className="category-header">
          <span className="category-badge">SHIFT SOLES STUDIO</span>

          <h2>
            Customize
            <span> Your Style</span>
          </h2>

          <p>
            Explore premium collections and build sneakers that represent your
            identity.
          </p>
        </div>

        <div className="category-tabs">
          <button
            className={activeCategory === "sneakers" ? "active" : ""}
            onClick={() => setActiveCategory("sneakers")}
          >
            Custom Sneakers
          </button>

          <button
            className={activeCategory === "materials" ? "active" : ""}
            onClick={() => setActiveCategory("materials")}
          >
            Premium Materials
          </button>

          <button
            className={activeCategory === "editions" ? "active" : ""}
            onClick={() => setActiveCategory("editions")}
          >
            Limited Editions
          </button>
        </div>

        <div className="category-grid">
          {categoryData[activeCategory].map((item) => (
            <div className="category-card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="card-content">
                <h4>{item.name}</h4>

                <button>Customize</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
