import React, { useState } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuData = [
    {
      title: "New Arrivals",
      items: [
        "All New Shoes",
        "Best Sellers",
        "Limited Edition",
        "Trending Now",
      ],
    },
    {
      title: "Men",
      items: [
        "Running Shoes",
        "Sneakers & Casual",
        "Training & Gym",
        "Formal Pack",
      ],
    },
    {
      title: "Women",
      items: [
        "Running Shoes",
        "Athleisure",
        "Walking Shoes",
        "Platform Sneakers",
      ],
    },
    {
      title: "Sports",
      items: [
        "Football Boots",
        "Cricket Shoes",
        "Badminton Shoes",
        "Accessories",
      ],
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const handleNavBtnClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGVnZmtyM3l4amg3dmo3MXJlMG9yNDZkZTlyaWU2NXB1NmxsbHd6aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vCiTdWEva8EbS/giphy.gif"
          alt="ShiftSoles Logo"
          className="logo-img"
        />
      </div>

      <button
        className={`burger-menu ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>

      <ul className={`nav-buttons ${isMobileMenuOpen ? "active" : ""}`}>
        {menuData.map((menu, index) => (
          <li
            key={index}
            className="nav-item"
            onMouseEnter={() =>
              window.innerWidth > 768 && setActiveDropdown(index)
            }
            onMouseLeave={() =>
              window.innerWidth > 768 && setActiveDropdown(null)
            }
          >
            <button
              className="nav-btn"
              onClick={() => handleNavBtnClick(index)}
            >
              {menu.title}
              <span
                className={`arrow ${activeDropdown === index ? "rotated" : ""}`}
              >
                ▾
              </span>
            </button>

            {activeDropdown === index && (
              <ul className="dropdown-menu">
                {menu.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="dropdown-item">
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
