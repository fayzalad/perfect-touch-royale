import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { Icon } from "@/components/ui/Icon";
import { useApp } from "@/context/CartContext";

export default function HomePage() {
  const { setSelected } = useApp();
  const navigate = useNavigate();

  const featured = products.slice(0, 4);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <img
          src="./products/product-5.jpg"
          alt="Turkish luxury clothing"
          loading="eager"
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            PERFECT TOUCH ROYALE · NIGERIA
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Turkish clothing
            <br />
            <em>for women.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Shop authentic dresses, abayas, kaftans, and matching sets directly imported
            from Istanbul. Tailored luxury with nationwide delivery across Nigeria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <Link to="/shop" className="primary">
              Shop the collection <Icon name="arrow" size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="hero-note">
          Turkish styles <span /> Based in Nigeria
        </div>
      </section>

      {/* Intro Brand Statement */}
      <section className="intro">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow gold">THE ESSENCE</span>
          <h2>Where Istanbul Craftsmanship Meets Nigerian Elegance</h2>
          <p>
            At Perfect Touch Royale, we curate exceptional Turkish garments designed for the
            discerning woman. Every piece combines modest silhouettes, luxurious fabrics, and
            timeless detailing suitable for high-society events, celebrations, and refined daily wear.
          </p>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="featured section">
        <div className="section-heading">
          <div>
            <span className="eyebrow gold">AVAILABLE NOW</span>
            <h2>Featured collection</h2>
          </div>
          <Link to="/shop" className="text-link">
            View all pieces <Icon name="arrow" size={16} />
          </Link>
        </div>

        <div className="product-grid">
          {featured.map((p, index) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpen={() => setSelected(p)}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Editorial Split Banner */}
      <section className="editorial">
        <div className="editorial-image">
          <img src="./products/product-3.jpg" alt="Turkish occasion dress" loading="lazy" />
        </div>
        <div className="editorial-copy">
          <span className="eyebrow gold">CURATED LUXURY</span>
          <h2>Handpicked From the Heart of Istanbul</h2>
          <p>
            From the bustling ateliers of Nişantaşı to your wardrobe in Lagos, Abuja, and beyond.
            Our founder personally travels to Türkiye each season to select fabrics that drape
            elegantly, hold up under Nigerian warmth, and honor modest elegance.
          </p>
          <Link to="/about" className="text-link">
            Read our story <Icon name="arrow" size={16} />
          </Link>
          <div className="editorial-number">
            <span></span> 01 / ISTANBUL TO LAGOS
          </div>
        </div>
      </section>

      {/* Benefits / Guarantees */}
      <section className="benefits">
        <div>
          <Icon name="truck" size={28} />
          <h3>Nationwide Delivery</h3>
          <p>Fast dispatch across all 36 Nigerian states &amp; international shipping</p>
        </div>
        <div>
          <Icon name="check" size={28} />
          <h3>100% Authentic Turkish</h3>
          <p>Premium crepe, silk-satin, and Turkish embroidery directly sourced</p>
        </div>
        <div>
          <Icon name="lock" size={28} />
          <h3>Seamless Ordering</h3>
          <p>Order online, pay via secure checkout, or chat directly via WhatsApp</p>
        </div>
      </section>
    </div>
  );
}
