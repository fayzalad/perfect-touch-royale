import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@/components/ui/Icon";

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Story Hero */}
      <section className="story-hero">
        <img
          src="./products/product-2.jpg"
          alt="Turkish fashion storytelling"
          loading="eager"
        />
        <div>
          <span className="eyebrow gold">OUR ORIGIN &amp; PURPOSE</span>
          <h1>The Perfect Touch Royale Story</h1>
        </div>
      </section>

      {/* Story Narrative Grid */}
      <section className="story-copy">
        <div>
          <span className="eyebrow gold">A CURATED BRIDGE</span>
          <h2>From the Historic Bazaars of Istanbul to the Sophistication of Nigeria</h2>
        </div>

        <div>
          <p>
            Perfect Touch Royale was founded with a singular, passionate mission: to bring the
            unparalleled richness, craftsmanship, and modesty of authentic Turkish female fashion
            directly to women across Nigeria.
          </p>
          <p>
            For generations, Türkiye has been celebrated worldwide as the epicenter of luxury
            textiles — revered for opulent crepes, breathable cotton blends, intricate gold
            embroidery, and flowing silhouettes that flatter every woman with effortless grace.
          </p>
        </div>

        <div>
          <p>
            Recognizing how difficult it was for Nigerian women to source genuine Turkish garments
            without either traveling to Istanbul or facing counterfeit copies, our founder began
            personally traveling to Türkiye each season to select limited-run, bespoke collections.
          </p>
          <p>
            Today, whether you are attending a milestone wedding in Lagos, a high-level diplomatic
            reception in Abuja, or seeking everyday modest opulence, Perfect Touch Royale guarantees
            dresses that drape royally, endure beautifully, and make an unforgettable statement.
          </p>

          <Link to="/shop" className="text-link" style={{ marginTop: 24, display: "inline-flex" }}>
            Explore the current collection <Icon name="arrow" size={16} />
          </Link>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="section-heading" style={{ justifyContent: "center", textAlign: "center" }}>
          <div>
            <span className="eyebrow gold">OUR PROMISE</span>
            <h2>What Sets Our Garments Apart</h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "36px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              padding: "40px 30px",
              background: "var(--cream)",
              borderRadius: "4px",
              borderTop: "2px solid var(--gold)",
            }}
          >
            <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "26px", marginBottom: "12px" }}>
              100% Turkish Sourcing
            </h3>
            <p style={{ fontSize: "13px", lineHeight: 1.8, color: "var(--muted)" }}>
              Every single dress, abaya, and co-ord in our store is manufactured in Türkiye by skilled
              artisans in Istanbul, Izmir, and Bursa. No shortcuts, no compromises.
            </p>
          </div>

          <div
            style={{
              padding: "40px 30px",
              background: "var(--cream)",
              borderRadius: "4px",
              borderTop: "2px solid var(--gold)",
            }}
          >
            <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "26px", marginBottom: "12px" }}>
              Climate-Adapted Fabrics
            </h3>
            <p style={{ fontSize: "13px", lineHeight: 1.8, color: "var(--muted)" }}>
              We specifically test our chosen fabrics against the Nigerian climate. You get fabrics that
              maintain full modesty and rich texture while remaining breathable in warm temperatures.
            </p>
          </div>

          <div
            style={{
              padding: "40px 30px",
              background: "var(--cream)",
              borderRadius: "4px",
              borderTop: "2px solid var(--gold)",
            }}
          >
            <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "26px", marginBottom: "12px" }}>
              Personalized Concierge
            </h3>
            <p style={{ fontSize: "13px", lineHeight: 1.8, color: "var(--muted)" }}>
              Shopping with us feels like a bespoke boutique experience. We provide WhatsApp size
              consultations, fast door-to-door delivery, and dedicated customer support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
