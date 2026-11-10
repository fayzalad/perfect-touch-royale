import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { useApp } from "@/context/CartContext";

export default function ContactPage() {
  const { showNotice } = useApp();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showNotice("Thank you — your enquiry has been received.");
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <section className="contact-page section">
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow gold">GET IN TOUCH</span>
        <h1>Customer support &amp; concierge</h1>
        <p>
          Need assistance selecting the ideal size, styling a gala gown, or tracking your order?
          Our dedicated client care team is ready to assist you.
        </p>

        <dl>
          <dt>DIRECT WHATSAPP CONCIERGE</dt>
          <dd>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#25D366", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <Icon name="whatsapp" size={18} />
              +234 800 000 0000 (Instant Chat)
            </a>
          </dd>

          <dt>EMAIL</dt>
          <dd>hello@perfecttouchroyale.com</dd>

          <dt>CLIENT CARE HOURS</dt>
          <dd>Monday–Saturday, 9:00 AM – 7:00 PM WAT</dd>

          <dt>LAGOS SHOWROOM (BY APPOINTMENT)</dt>
          <dd>Victoria Island / Lekki, Lagos, Nigeria</dd>

          <dt>INSTAGRAM</dt>
          <dd>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              @perfecttouchroyale
            </a>
          </dd>
        </dl>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <label>
          Full Name
          <input required placeholder="e.g. Amina Adeleke" />
        </label>

        <label>
          Email Address
          <input required type="email" placeholder="amina@example.com" />
        </label>

        <label>
          Phone Number / WhatsApp
          <input type="tel" placeholder="+234 800 123 4567" />
        </label>

        <label>
          Subject
          <select required defaultValue="">
            <option value="" disabled>
              Select an enquiry topic
            </option>
            <option>Size &amp; Fit Consultation</option>
            <option>Order Status &amp; Tracking</option>
            <option>Custom / Bridal / Occasion Orders</option>
            <option>Wholesale &amp; Retail Partnerships</option>
            <option>Returns &amp; Exchanges</option>
          </select>
        </label>

        <label>
          Your Message
          <textarea required rows={5} placeholder="Tell us how we can help you..." />
        </label>

        <button type="submit" className="primary dark" style={{ width: "100%", justifyContent: "center" }}>
          Send message <Icon name="arrow" size={16} />
        </button>

        {submitted && (
          <p style={{ marginTop: 16, fontSize: "12px", color: "var(--gold)", textAlign: "center" }}>
            Thank you! A client advisor will respond within 24 business hours.
          </p>
        )}
      </motion.form>
    </section>
  );
}
