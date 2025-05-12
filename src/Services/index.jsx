import React from 'react';
import './index.css';

const services = [
  {
    name: "Classic Haircut",
    desc: "Tailored haircut with clean finish & styling.",
    price: "₹250",
    theme: { title: "#00c6ff", desc: "#e0f7fa", price: "#ffd700" }
  },
  {
    name: "Beard Trim & Shape",
    desc: "Sculpted trim with clean edges and oils.",
    price: "₹150",
    theme: { title: "#ff8c00", desc: "#fff3e0", price: "#ffcc00" }
  },
  {
    name: "Royal Shave",
    desc: "Hot towel shave with premium blades & aftercare.",
    price: "₹200",
    theme: { title: "#ff4081", desc: "#fce4ec", price: "#ffc0cb" }
  },
  {
    name: "Hair Wash & Style",
    desc: "Deep cleansing shampoo + blow-dry styling.",
    price: "₹180",
    theme: { title: "#43e97b", desc: "#e0f2f1", price: "#a5d6a7" }
  },
  {
    name: "Head Massage",
    desc: "15-min relaxing massage with essential oils.",
    price: "₹120",
    theme: { title: "#7c4dff", desc: "#ede7f6", price: "#d1c4e9" }
  },
  {
    name: "Facial Cleanup",
    desc: "Cleansing, scrubbing, and toning for fresh skin.",
    price: "₹300",
    theme: { title: "#e91e63", desc: "#f8bbd0", price: "#f06292" }
  }
];

const Services = () => (
  <section className="services-section">
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((s, index) => (
          <div className="service-card" key={index}>
            <h3 className="service-name" style={{ color: s.theme.title }}>{s.name}</h3>
            <p className="service-desc" style={{ backgroundColor: s.theme.desc }}>{s.desc}</p>
            <div className="service-price" style={{ color: s.theme.price }}>{s.price}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;