import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "@/context/CartContext";
import { Icon } from "@/components/ui/Icon";

export default function Toast() {
  const { notice } = useApp();

  return (
    <AnimatePresence>
      {notice && (
        <motion.div
          className="toast"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <Icon name="check" size={18} />
          <span>{notice}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
