import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "@/context/CartContext";
import { Icon } from "@/components/ui/Icon";
import { money } from "@/utils/format";

export default function ProductModal() {
  const { selected, setSelected, addToCart } = useApp();

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Reset local state when product changes
  useEffect(() => {
    if (selected) {
      setColor(selected.colors[0]?.name ?? "");
      setSize("");
      setQuantity(1);
    }
  }, [selected]);

  const handleAdd = () => {
    if (!selected || !size) return;
    addToCart(selected, color, size, quantity);
  };

  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="product-modal"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <Icon name="close" size={22} />
            </button>

            <div className="modal-content">
              {/* Image */}
              <div className="modal-image">
                <img src={selected.image} alt={selected.name} />
              </div>

              {/* Details */}
              <div className="modal-details">
                <p
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    opacity: 0.5,
                    marginBottom: 4,
                  }}
                >
                  {selected.category}
                </p>

                <h2>{selected.name}</h2>
                <p className="modal-price">{money(selected.price)}</p>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.6, opacity: 0.7, marginBottom: 16 }}>
                  {selected.description}
                </p>

                {/* Colour picker */}
                <div className="option">
                  <label>
                    Colour — <strong>{color}</strong>
                  </label>
                  <div className="color-options">
                    {selected.colors.map((c) => (
                      <button
                        key={c.hex}
                        title={c.name}
                        className={color === c.name ? "active" : ""}
                        onClick={() => setColor(c.name)}
                        style={{
                          background: c.hex,
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          border: color === c.name ? "2px solid #111" : "1.5px solid rgba(0,0,0,.15)",
                          cursor: "pointer",
                          outline: color === c.name ? "2px solid #111" : "none",
                          outlineOffset: 2,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Size picker */}
                <div className="option">
                  <label>Size</label>
                  <div className="size-options">
                    {selected.sizes.map((s) => (
                      <button
                        key={s}
                        className={size === s ? "active" : ""}
                        onClick={() => setSize(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity + Add to bag */}
                <div className="add-row">
                  <div className="qty">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                    >
                      <Icon name="minus" size={16} />
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      aria-label="Increase quantity"
                    >
                      <Icon name="plus" size={16} />
                    </button>
                  </div>

                  <button
                    className="btn-primary"
                    onClick={handleAdd}
                    disabled={!size}
                    style={{ flex: 1, opacity: size ? 1 : 0.5 }}
                  >
                    {size ? "Add to bag" : "Select a size"}
                  </button>
                </div>

                {/* Shipping note */}
                <p
                  style={{
                    fontSize: "0.78rem",
                    opacity: 0.5,
                    marginTop: 12,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Icon name="truck" size={15} /> Free delivery over ₦250,000
                </p>

                {/* Product details bullet list */}
                {selected.details && selected.details.length > 0 && (
                  <ul
                    style={{
                      marginTop: 16,
                      paddingLeft: 18,
                      fontSize: "0.82rem",
                      lineHeight: 1.8,
                      opacity: 0.65,
                    }}
                  >
                    {selected.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
