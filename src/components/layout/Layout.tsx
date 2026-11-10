import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Toast from "@/components/ui/Toast";
import ProductModal from "@/components/product/ProductModal";
import CartDrawer from "@/components/cart/CartDrawer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="app">
      <Header />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Overlays */}
      <Toast />
      <ProductModal />
      <CartDrawer />
      <WhatsAppButton />
    </div>
  );
}
