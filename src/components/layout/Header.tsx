import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "@/context/CartContext";
import { Icon } from "@/components/ui/Icon";
import logo from "@/assets/tr-monogram.jpg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const { cartCount, setCartOpen, setSelected, wishlist } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sticky header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const handleSearch = () => {
    if (!search.trim()) return;
    navigate("/shop", { state: { search: search.trim() } });
    setSearch("");
    setSearchOpen(false);
  };

  return (
    <>
      {/* Announcement bar */}
      <div className="announcement">
        <p>Free delivery on orders over ₦250,000 · Authentic Turkish fashion</p>
      </div>

      {/* Header */}
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        {/* Mobile menu toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          style={{ display: "none" }}
        >
          <Icon name="menu" size={24} />
        </button>

        {/* Desktop nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={location.pathname === link.to ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Brand */}
        <Link to="/" className="brand">
          <img src={logo} alt="Perfect Touch Royale" />
        </Link>

        {/* Actions */}
        <div className="header-actions">
          <button onClick={() => setSearchOpen(!searchOpen)} aria-label="Search">
            <Icon name="search" size={20} />
          </button>

          <Link to="/wishlist" aria-label="Wishlist" style={{ position: "relative" }}>
            <Icon name="heart" size={20} />
            {wishlist.length > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -6,
                  right: -8,
                  background: "#c9384a",
                  color: "#fff",
                  fontSize: "0.65rem",
                  width: 17,
                  height: 17,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                }}
              >
                {wishlist.length}
              </span>
            )}
          </Link>

          <button
            onClick={() => setCartOpen(true)}
            aria-label="Shopping bag"
            style={{ position: "relative" }}
          >
            <Icon name="bag" size={20} />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -6,
                  right: -8,
                  background: "#111",
                  color: "#fff",
                  fontSize: "0.65rem",
                  width: 17,
                  height: 17,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            className="mobile-menu"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Icon name="menu" size={22} />
          </button>
        </div>
      </header>

      {/* Search panel */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="search-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="search-inner" style={{ display: "flex", gap: 10, alignItems: "center", maxWidth: 600, margin: "0 auto" }}>
              <input
                type="text"
                placeholder="Search our collection…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                autoFocus
                style={{
                  flex: 1,
                  padding: "10px 16px",
                  border: "1px solid rgba(0,0,0,.15)",
                  borderRadius: 6,
                  fontSize: "0.9rem",
                  outline: "none",
                }}
              />
              <button
                onClick={handleSearch}
                className="btn-primary"
                style={{ padding: "10px 20px", fontSize: "0.85rem" }}
              >
                View results
              </button>
              <button onClick={() => setSearchOpen(false)} aria-label="Close search">
                <Icon name="close" size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,.4)",
                zIndex: 99,
              }}
            />
            <motion.div
              className="mobile-drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
            >
              <button
                className="drawer-close"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <Icon name="close" size={22} />
              </button>

              <nav style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 48 }}>
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={location.pathname === link.to ? "active" : ""}
                    onClick={() => setMobileOpen(false)}
                    style={{ fontSize: "1.2rem", letterSpacing: ".04em" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
