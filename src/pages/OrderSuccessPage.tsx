import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { money } from "@/utils/format";

export default function OrderSuccessPage() {
  const location = useLocation();
  const orderData = location.state || {
    customerName: "Valued Customer",
    email: "customer@example.com",
    total: 168000,
    deliveryState: "Lagos",
    paymentMethod: "card",
  };

  const orderNumber = `PTR-${Math.floor(10000 + Math.random() * 90000)}`;

  const whatsappReceiptMessage = encodeURIComponent(
    `Hello Perfect Touch Royale, I have placed order #${orderNumber} for ${money(
      orderData.total
    )}. Here is my confirmation detail.`
  );

  return (
    <section className="success-page section">
      <motion.div
        className="success-mark"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Icon name="check" size={34} />
      </motion.div>

      <span className="eyebrow gold">ORDER CONFIRMED · #{orderNumber}</span>
      <h1 style={{ marginTop: 12, marginBottom: 16 }}>Thank you, {orderData.customerName}</h1>

      <p style={{ maxWidth: 540, margin: "0 auto 28px", lineHeight: 1.8 }}>
        Your order has been recorded successfully. A detailed receipt and delivery timeline have been sent to{" "}
        <strong>{orderData.email}</strong>.
      </p>

      {/* Order info card */}
      <div
        style={{
          background: "#fff",
          maxWidth: 480,
          margin: "0 auto 36px",
          padding: "24px 30px",
          borderRadius: 4,
          boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
          textAlign: "left",
          fontSize: "13px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ color: "var(--muted)" }}>Order Reference:</span>
          <strong>{orderNumber}</strong>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ color: "var(--muted)" }}>Total Paid:</span>
          <strong style={{ color: "var(--gold)" }}>{money(orderData.total)}</strong>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ color: "var(--muted)" }}>Destination State:</span>
          <strong>{orderData.deliveryState}</strong>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: "var(--muted)" }}>Status:</span>
          <span style={{ color: "#25D366", fontWeight: 600 }}>Processing for Dispatch</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
        <a
          href={`https://wa.me/2348000000000?text=${whatsappReceiptMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "14px 24px",
            background: "#25D366",
            color: "#fff",
            borderRadius: 2,
            textDecoration: "none",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <Icon name="whatsapp" size={18} />
          Send Order to WhatsApp Concierge
        </a>

        <Link to="/shop" className="primary dark">
          Continue shopping <Icon name="arrow" size={16} />
        </Link>
      </div>
    </section>
  );
}
