import { useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useApp } from "@/context/CartContext";
import { money, nigerianStates, getShippingCost, getDeliveryTimeline, internationalCountries } from "@/utils/format";
import { Icon } from "@/components/ui/Icon";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, subtotal, clearCart, setCartOpen } = useApp();

  const [country, setCountry] = useState("Nigeria");
  const [selectedState, setSelectedState] = useState("Lagos");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "transfer" | "pod">("card");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Contact & Delivery form inputs
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const shippingCost = useMemo(() => {
    if (country === "Nigeria") {
      return getShippingCost(selectedState, subtotal);
    }
    return 35000;
  }, [country, selectedState, subtotal]);

  const deliveryTimeline = useMemo(() => {
    if (country === "Nigeria") {
      return getDeliveryTimeline(selectedState);
    }
    return "7–14 business days (DHL Express)";
  }, [country, selectedState]);

  const grandTotal = subtotal + shippingCost;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsSubmitting(true);
    // Simulate order placement
    setTimeout(() => {
      clearCart();
      navigate("/order-success", {
        state: {
          customerName: `${firstName} ${lastName}`.trim() || "Valued Customer",
          email,
          total: grandTotal,
          deliveryState: selectedState,
          deliveryAddress: address,
          paymentMethod,
        },
      });
    }, 800);
  };

  if (cart.length === 0) {
    return (
      <div className="section" style={{ textAlign: "center", padding: "120px 20px" }}>
        <h2>Your bag is currently empty</h2>
        <p style={{ margin: "16px 0 24px", color: "var(--muted)" }}>
          You need at least one piece in your bag to proceed through checkout.
        </p>
        <Link to="/shop" className="primary dark">
          Explore collection <Icon name="arrow" size={16} />
        </Link>
      </div>
    );
  }

  return (
    <section className="checkout-page section">
      <button
        type="button"
        className="back-link"
        onClick={() => {
          navigate("/shop");
          setCartOpen(true);
        }}
        style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 20 }}
      >
        <Icon name="arrow" size={14} /> Return to shopping bag
      </button>

      <div className="checkout-title">
        <span className="eyebrow gold">SECURE ENCRYPTED CHECKOUT</span>
        <h1>Complete your order</h1>
      </div>

      <form className="checkout-grid" onSubmit={handlePlaceOrder}>
        {/* Left Column: Form Details */}
        <div className="checkout-form">
          {/* Section 1: Contact Information */}
          <h2>
            <span>1</span> Contact Details
          </h2>
          <div className="field-grid">
            <label className="full">
              Email address (for order confirmation &amp; receipt)
              <input
                required
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="full">
              Phone Number / WhatsApp (for courier dispatch)
              <input
                required
                type="tel"
                placeholder="+234 800 000 0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
          </div>

          {/* Section 2: Delivery Details */}
          <h2>
            <span>2</span> Shipping &amp; Delivery Destination
          </h2>
          <div className="field-grid">
            <label>
              First Name
              <input
                required
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label>
              Last Name
              <input
                required
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>

            <label className="full">
              Street Address &amp; Nearest Landmark
              <input
                required
                placeholder="e.g. 14 Admiralty Way, Lekki Phase 1"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>

            <label>
              Country
              <select value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="Nigeria">Nigeria</option>
                {internationalCountries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>

            {country === "Nigeria" ? (
              <label>
                State (Nigeria)
                <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
                  {nigerianStates.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </label>
            ) : (
              <label>
                Province / State / Region
                <input required placeholder="State or Province" />
              </label>
            )}

            <label className="full">
              City / Town
              <input
                required
                placeholder="e.g. Ikeja, Lekki, Wuse 2, Port Harcourt"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
          </div>

          {/* Delivery estimate indicator */}
          <div
            style={{
              background: "var(--cream)",
              padding: "16px 20px",
              borderRadius: 4,
              margin: "20px 0 35px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: "12px",
            }}
          >
            <Icon name="truck" size={20} />
            <div>
              <strong>Estimated Delivery to {selectedState}: </strong>
              <span>{deliveryTimeline}</span>
              {shippingCost === 0 && (
                <div style={{ color: "var(--gold)", fontWeight: 600, marginTop: 4 }}>
                  ★ You qualify for Complimentary Free Delivery!
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Payment Method */}
          <h2>
            <span>3</span> Payment Option
          </h2>

          <div style={{ display: "grid", gap: "12px", marginBottom: "24px" }}>
            {/* Paystack / Online Card Payment */}
            <div
              onClick={() => setPaymentMethod("card")}
              style={{
                border: paymentMethod === "card" ? "2px solid var(--gold)" : "1px solid var(--line)",
                padding: "18px 20px",
                borderRadius: "4px",
                cursor: "pointer",
                background: paymentMethod === "card" ? "#fbf8f2" : "#fff",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                style={{ width: "auto", margin: 0 }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: "13px" }}>
                  Paystack / Flutterwave Secure Online Payment
                </div>
                <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: 2 }}>
                  Pay with Mastercard, Visa, Verve, Apple Pay, or Internet Banking.
                </div>
              </div>
              <Icon name="lock" size={18} />
            </div>

            {/* Direct Bank Transfer */}
            <div
              onClick={() => setPaymentMethod("transfer")}
              style={{
                border: paymentMethod === "transfer" ? "2px solid var(--gold)" : "1px solid var(--line)",
                padding: "18px 20px",
                borderRadius: "4px",
                cursor: "pointer",
                background: paymentMethod === "transfer" ? "#fbf8f2" : "#fff",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "transfer"}
                onChange={() => setPaymentMethod("transfer")}
                style={{ width: "auto", margin: 0 }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: "13px" }}>Direct Bank Transfer (Instant Confirmation)</div>
                <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: 2 }}>
                  Transfer directly to our Nigerian business account (GTBank / Zenith Bank).
                </div>
              </div>
            </div>

            {/* Pay on Delivery for Lagos */}
            {selectedState === "Lagos" && (
              <div
                onClick={() => setPaymentMethod("pod")}
                style={{
                  border: paymentMethod === "pod" ? "2px solid var(--gold)" : "1px solid var(--line)",
                  padding: "18px 20px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  background: paymentMethod === "pod" ? "#fbf8f2" : "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "pod"}
                  onChange={() => setPaymentMethod("pod")}
                  style={{ width: "auto", margin: 0 }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: "13px" }}>Pay on Delivery (Lagos State Only)</div>
                  <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: 2 }}>
                    Inspect your dress upon arrival and pay via POS card or instant transfer.
                  </div>
                </div>
              </div>
            )}
          </div>

          {paymentMethod === "transfer" && (
            <div
              style={{
                background: "#f7f4ed",
                padding: "18px 22px",
                borderLeft: "3px solid var(--gold)",
                fontSize: "12px",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              <strong>Official Business Account:</strong>
              <div>Bank: Guaranty Trust Bank (GTBank)</div>
              <div>Account Name: Perfect Touch Royale Enterprise</div>
              <div>Account Number: 0123456789</div>
              <small style={{ color: "var(--muted)" }}>
                * After placing your order, kindly WhatsApp your transfer receipt to +234 800 000 0000 for instant dispatch.
              </small>
            </div>
          )}
        </div>

        {/* Right Column: Order Summary */}
        <aside className="order-summary">
          <h2>Your order ({cart.reduce((sum, item) => sum + item.quantity, 0)})</h2>

          <div style={{ maxHeight: "320px", overflowY: "auto", marginBottom: "16px" }}>
            {cart.map((item, i) => (
              <div className="summary-item" key={`${item.product.id}-${item.color}-${item.size}-${i}`}>
                <img src={item.product.image} alt={item.product.name} />
                <div>
                  <h3>{item.product.name}</h3>
                  <p>
                    {item.color} · Size {item.size} · Qty {item.quantity}
                  </p>
                </div>
                <strong>{money(item.product.price * item.quantity)}</strong>
              </div>
            ))}
          </div>

          <div className="totals">
            <p>
              <span>Subtotal</span>
              <strong>{money(subtotal)}</strong>
            </p>
            <p>
              <span>Delivery ({selectedState})</span>
              <strong>{shippingCost === 0 ? "Complimentary" : money(shippingCost)}</strong>
            </p>
            <p className="total">
              <span>Total Amount</span>
              <strong style={{ fontSize: "18px", color: "var(--gold)" }}>{money(grandTotal)}</strong>
            </p>
          </div>

          <button
            type="submit"
            className="primary dark wide"
            disabled={isSubmitting}
            style={{ justifyContent: "center" }}
          >
            {isSubmitting ? "Processing..." : `Place order · ${money(grandTotal)}`}
          </button>

          <small style={{ marginTop: 14 }}>
            <Icon name="lock" size={14} /> 256-bit bank-grade encryption. Guaranteed authentic goods.
          </small>
        </aside>
      </form>
    </section>
  );
}
