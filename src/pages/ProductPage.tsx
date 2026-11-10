import { useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { products, type Product } from "@/data/products";
import { money } from "@/utils/format";
import { useApp } from "@/context/CartContext";
import { Icon } from "@/components/ui/Icon";
import ProductCard from "@/components/product/ProductCard";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart, setSelected, toggleWishlist, isWishlisted } = useApp();

  const product = useMemo(() => {
    return products.find((p) => p.slug === slug || String(p.id) === slug);
  }, [slug]);

  const [color, setColor] = useState(() => product?.colors[0]?.name ?? "");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="section" style={{ textAlign: "center", padding: "120px 20px" }}>
        <h2>Product not found</h2>
        <p style={{ margin: "16px 0 24px", color: "var(--muted)" }}>
          The item you are looking for may have sold out or is no longer available.
        </p>
        <Link to="/shop" className="primary dark">
          Back to collection <Icon name="arrow" size={16} />
        </Link>
      </div>
    );
  }

  const wishlisted = isWishlisted(product.id);
  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || Math.random() > 0.3))
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!size) {
      alert("Please select a size first");
      return;
    }
    addToCart(product, color || product.colors[0].name, size, quantity);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Perfect Touch Royale, I am interested in purchasing the ${product.name} (Price: ${money(
      product.price
    )}) in ${color || product.colors[0].name}, Size: ${size || "Unspecified"}. Is it available?`
  );

  return (
    <div className="product-page section" style={{ maxWidth: 1280, margin: "0 auto", paddingBottom: 100 }}>
      {/* Breadcrumb */}
      <nav
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "var(--muted)",
          marginBottom: "36px",
        }}
      >
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          Home
        </Link>
        <span>/</span>
        <Link to="/shop" style={{ color: "inherit", textDecoration: "none" }}>
          Shop
        </Link>
        <span>/</span>
        <Link
          to="/shop"
          state={{ category: product.category }}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {product.category}
        </Link>
        <span>/</span>
        <span style={{ color: "var(--ink)", fontWeight: 600 }}>{product.name}</span>
      </nav>

      {/* Main product view */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "60px",
          alignItems: "start",
        }}
      >
        {/* Left: Product Image */}
        <div style={{ position: "relative", background: "#ece8df", borderRadius: "2px", overflow: "hidden" }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", height: "auto", display: "block", aspectRatio: "3/4", objectFit: "cover" }}
          />
          {product.tag && <span className="product-tag">{product.tag}</span>}
          <button
            onClick={() => toggleWishlist(product.id)}
            aria-label="Wishlist"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "rgba(255,255,255,0.9)",
              border: "none",
              borderRadius: "50%",
              width: 40,
              height: 40,
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              color: wishlisted ? "#c9384a" : "var(--ink)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <Icon name={wishlisted ? "heartFilled" : "heart"} size={20} />
          </button>
        </div>

        {/* Right: Details & Buying Actions */}
        <div>
          <span className="eyebrow gold">{product.category}</span>
          <h1
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(36px, 4.5vw, 52px)",
              fontWeight: 500,
              lineHeight: 1.08,
              margin: "12px 0 16px",
            }}
          >
            {product.name}
          </h1>
          <strong style={{ fontSize: "22px", fontWeight: 600, display: "block", marginBottom: "20px" }}>
            {money(product.price)}
          </strong>

          <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--muted)", marginBottom: "28px" }}>
            {product.description}
          </p>

          {/* Color Selection */}
          <div className="option" style={{ marginBottom: "24px" }}>
            <label style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <span>Colour</span>
              <b style={{ color: "var(--gold)" }}>{color || product.colors[0].name}</b>
            </label>
            <div className="color-options" style={{ display: "flex", gap: "12px" }}>
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c.name)}
                  className={(color || product.colors[0].name) === c.name ? "active" : ""}
                  title={c.name}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: (color || product.colors[0].name) === c.name ? "2px solid var(--ink)" : "1px solid #ddd",
                    padding: 3,
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  <i
                    style={{
                      background: c.hex,
                      display: "block",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="option" style={{ marginBottom: "28px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <label style={{ margin: 0 }}>Size</label>
              <Link
                to="/size-guide"
                style={{
                  fontSize: "11px",
                  color: "var(--gold)",
                  textDecoration: "underline",
                  letterSpacing: "0.05em",
                }}
              >
                Size guide
              </Link>
            </div>
            <div className="size-options" style={{ display: "flex", gap: "10px" }}>
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={size === s ? "active" : ""}
                  style={{
                    width: 52,
                    height: 44,
                    border: size === s ? "1px solid var(--ink)" : "1px solid var(--line)",
                    background: size === s ? "var(--ink)" : "transparent",
                    color: size === s ? "#fff" : "var(--ink)",
                    fontSize: "12px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Bag */}
          <div style={{ display: "flex", gap: "14px", marginBottom: "16px" }}>
            <div className="qty" style={{ border: "1px solid var(--line)", display: "flex", alignItems: "center" }}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ padding: "12px 14px", border: "none", background: "none", cursor: "pointer" }}
              >
                <Icon name="minus" size={14} />
              </button>
              <span style={{ minWidth: "24px", textAlign: "center", fontSize: "12px" }}>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{ padding: "12px 14px", border: "none", background: "none", cursor: "pointer" }}
              >
                <Icon name="plus" size={14} />
              </button>
            </div>

            <button
              className="primary dark"
              style={{ flex: 1, justifyContent: "center" }}
              onClick={handleAddToCart}
            >
              Add to bag · {money(product.price * quantity)}
            </button>
          </div>

          {/* WhatsApp Direct Buy Link */}
          <a
            href={`https://wa.me/2348000000000?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "14px 20px",
              background: "#25D366",
              color: "#fff",
              textDecoration: "none",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              borderRadius: "2px",
              marginBottom: "32px",
            }}
          >
            <Icon name="whatsapp" size={18} />
            Order directly on WhatsApp
          </a>

          {/* Product Bullet Points */}
          {product.details && product.details.length > 0 && (
            <div
              style={{
                borderTop: "1px solid var(--line)",
                borderBottom: "1px solid var(--line)",
                padding: "24px 0",
                marginBottom: "28px",
              }}
            >
              <h4
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  marginBottom: "14px",
                }}
              >
                Garment specifications
              </h4>
              <ul style={{ margin: 0, paddingLeft: "18px", color: "var(--muted)", fontSize: "13px", lineHeight: 1.8 }}>
                {product.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Shipping & Authenticity guarantees */}
          <div style={{ display: "grid", gap: "12px", color: "var(--muted)", fontSize: "12px" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Icon name="truck" size={18} />
              <span>Nationwide delivery in Nigeria (1–3 days Lagos, 3–5 days interstate)</span>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Icon name="shield" size={18} />
              <span>Complimentary shipping on orders over ₦250,000</span>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Icon name="refresh" size={18} />
              <span>Hassle-free 14-day exchange policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <section style={{ marginTop: "100px" }}>
        <div className="section-heading">
          <div>
            <span className="eyebrow gold">RECOMMENDED</span>
            <h2>You may also like</h2>
          </div>
          <Link to="/shop" className="text-link">
            View full catalog <Icon name="arrow" size={16} />
          </Link>
        </div>

        <div className="product-grid">
          {relatedProducts.map((p, idx) => (
            <ProductCard key={p.id} product={p} onOpen={() => setSelected(p)} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
