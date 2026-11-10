import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";

const WHATSAPP_URL =
  "https://wa.me/2348000000000?text=Hi, I'm interested in your Turkish clothing collection";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 40,
        width: 56,
        height: 56,
        borderRadius: "50%",
        backgroundColor: "#25D366",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 14px rgba(37,211,102,.45)",
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      <Icon name="whatsapp" size={28} />
    </motion.a>
  );
}
