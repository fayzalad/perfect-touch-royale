import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useApp } from "@/context/CartContext";
import { Icon } from "@/components/ui/Icon";
import { money } from "@/utils/format";
import { freeDeliveryThreshold } from "@/utils/format";

export default function CartDrawer() {
  const { cart, cartCount, subtotal, cartOpen, setCartOpen, updateCart, removeFromCart } = useApp();
  const navigate = useNavigate();

  const progress = Math.min(subtotal / freeDeliveryThreshold, 1);
  const remaining = freeDeliveryThreshold - subtotal;

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
          />

          {/* Drawer */}
          <motion.aside
            className="cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
          >
            {/* Header */}
            <div className="cart-header">
              <h3>Your bag ({cartCount})</h3>
              <button onClick={() => setCartOpen(false)} aria-label="Close cart">
                <Icon name="close" size={22} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <Icon name="bag" size={48} />
                <p>Your bag is empty</p>
              </div>
            ) : (
              <>
                {/* Items */}
                <div className="cart-items">
                  {cart.map((item, i) => (
                    <div className="cart-item" key={`${item.product.id}-${item.color}-${item.size}`}>
                      <img src={item.product.image} alt={item.product.name} />
                      <div className="cart-item-info">
                        <h4>{item.product.name}</h4>
                        <p style={{ fontSize: "0.78rem", opacity: 0.55 }}>
                          {item.color} · {item.size}
                        </p>
                        <p style={{ fontWeight: 600, marginTop: 4 }}>
                          {money(item.product.price * item.quantity)}
                        </p>

                        <div className="mini-qty">
                          <button onClick={() => updateCart(i, -1)} aria-label="Decrease">
                            <Icon name="minus" size={14} />
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateCart(i, 1)} aria-label="Increase">
                            <Icon name="plus" size={14} />
                          </button>
                        </div>
                      </div>

                      <button
                        className="remove"
                        onClick={() => removeFromCart(i)}
                        aria-label="Remove item"
                      >
                        <Icon name="trash" size={16} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="cart-footer">
                  {/* Free delivery progress */}
                  <div className="delivery-progress">
                    <div className="delivery-bar">
                      <motion.div
                        className="delivery-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <p style={{ fontSize: "0.78rem", marginTop: 6 }}>
                      {progress >= 1 ? (
                        <span>
                          <Icon name="check" size={14} /> You qualify for free delivery!
                        </span>
                      ) : (
                        <span>
                          Add {money(remaining)} more for free delivery
                        </span>
                      )}
                    </p>
                  </div>

                  {/* Subtotal */}
                  <div className="cart-subtotal">
                    <span>Subtotal</span>
                    <span>{money(subtotal)}</span>
                  </div>

                  {/* Checkout button */}
                  <button
                    className="btn-primary"
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                    onClick={() => {
                      setCartOpen(false);
                      navigate("/checkout");
                    }}
                  >
                    <Icon name="lock" size={16} />
                    Checkout securely
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
