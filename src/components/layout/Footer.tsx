import { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "@/context/CartContext";
import { Icon } from "@/components/ui/Icon";
import logo from "@/assets/tr-monogram.jpg";

export default function Footer() {
  const { showNotice } = useApp();
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    showNotice("Thank you for subscribing! ✨");
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40 }}>
        {/* Brand */}
        <div className="footer-brand">
          <img src={logo} alt="Perfect Touch Royale" style={{ width: 60, marginBottom: 16 }} />
          <p style={{ fontSize: "0.85rem", lineHeight: 1.7, opacity: 0.7 }}>
            Curated Turkish fashion for the modern woman. Modest, elegant, timeless.
          </p>
          <div className="social" style={{ marginTop: 20, display: "flex", gap: 14 }}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Icon name="instagram" size={22} />
            </a>
          </div>
        </div>

        {/* Shop links */}
        <div>
          <h4 style={{ fontSize: "0.75rem", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>
            Shop
          </h4>
          <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Link to="/shop">New arrivals</Link>
            <Link to="/shop" state={{ category: "Dresses" }}>Dresses</Link>
            <Link to="/shop" state={{ category: "Kaftans" }}>Kaftans</Link>
            <Link to="/shop" state={{ category: "Abayas" }}>Abayas</Link>
          </nav>
        </div>

        {/* Client care */}
        <div>
          <h4 style={{ fontSize: "0.75rem", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>
            Client care
          </h4>
          <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Link to="/contact">Contact us</Link>
            <Link to="/delivery">Delivery &amp; returns</Link>
            <Link to="/size-guide">Size guide</Link>
            <Link to="/care-guide">Care guide</Link>
          </nav>
        </div>

        {/* Newsletter */}
        <div className="newsletter">
          <h4 style={{ fontSize: "0.75rem", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>
            Stay in touch
          </h4>
          <p style={{ fontSize: "0.85rem", opacity: 0.7, marginBottom: 14, lineHeight: 1.6 }}>
            Be the first to hear about new drops, exclusive offers, and Turkish style inspiration.
          </p>
          <form onSubmit={handleNewsletter} style={{ display: "flex", gap: 8 }}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                padding: "10px 14px",
                border: "1px solid rgba(255,255,255,.2)",
                borderRadius: 4,
                background: "transparent",
                color: "inherit",
                fontSize: "0.85rem",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px 18px",
                background: "#fff",
                color: "#111",
                border: "none",
                borderRadius: 4,
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: ".04em",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>&copy; 2026 Perfect Touch Royale. All rights reserved.</p>
      </div>
    </footer>
  );
}
