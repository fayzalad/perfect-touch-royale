import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { Product } from "@/data/products";
import { money } from "@/utils/format";
import { useApp } from "@/context/CartContext";
import { Icon } from "@/components/ui/Icon";

interface Props {
  product: Product;
  onOpen: () => void;
  index?: number;
}

export default function ProductCard({ product, onOpen, index = 0 }: Props) {
  const navigate = useNavigate();
  const { toggleWishlist, isWishlisted } = useApp();
  const wishlisted = isWishlisted(product.id);

  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => navigate(`/product/${product.slug}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="product-image-wrap">
        <img
          className="product-image"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />

        {product.tag && <span className="product-tag">{product.tag}</span>}

        {/* Wishlist button */}
        <button
          className="wishlist-btn"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "rgba(255,255,255,.85)",
            border: "none",
            borderRadius: "50%",
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: wishlisted ? "#c9384a" : "#555",
            transition: "color .2s",
            zIndex: 2,
          }}
        >
          <Icon name={wishlisted ? "heartFilled" : "heart"} size={18} />
        </button>

        <button
          className="quick-view"
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
        >
          Quick view
        </button>
      </div>

      <div className="product-info">
        <p className="product-category-eyebrow" style={{ fontSize: "0.7rem", letterSpacing: ".08em", textTransform: "uppercase", opacity: 0.55, marginBottom: 2 }}>
          {product.category}
        </p>
        <h3>{product.name}</h3>
        <div className="product-bottom">
          <span className="price">{money(product.price)}</span>
          <div className="swatches">
            {product.colors.map((c) => (
              <span
                key={c.hex}
                title={c.name}
                style={{
                  background: c.hex,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  display: "inline-block",
                  border: "1px solid rgba(0,0,0,.12)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
