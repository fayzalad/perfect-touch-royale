import { Link } from "react-router-dom";
import { useApp } from "@/context/CartContext";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { Icon } from "@/components/ui/Icon";

export default function WishlistPage() {
  const { wishlist, setSelected } = useApp();

  const wishlistedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <section className="section" style={{ maxWidth: 1280, margin: "0 auto", paddingBottom: 100 }}>
      <div style={{ textAlign: "center", marginBottom: 50 }}>
        <span className="eyebrow gold">YOUR SAVED PIECES</span>
        <h1
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(38px, 5vw, 64px)",
            fontWeight: 400,
            margin: "14px 0",
          }}
        >
          My Wishlist ({wishlistedProducts.length})
        </h1>
        <p style={{ color: "var(--muted)", maxWidth: 540, margin: "0 auto", fontSize: "14px" }}>
          Items you've saved to revisit later. Click any garment to choose your color and size.
        </p>
      </div>

      {wishlistedProducts.length > 0 ? (
        <div className="product-grid">
          {wishlistedProducts.map((p, idx) => (
            <ProductCard key={p.id} product={p} onOpen={() => setSelected(p)} index={idx} />
          ))}
        </div>
      ) : (
        <div className="empty-state" style={{ textAlign: "center", padding: "80px 20px" }}>
          <div style={{ margin: "0 auto 20px", color: "var(--gold)" }}>
            <Icon name="heart" size={48} />
          </div>
          <h2>Your wishlist is empty</h2>
          <p style={{ color: "var(--muted)", margin: "14px 0 28px" }}>
            Explore our collection and click the heart icon on any piece you love.
          </p>
          <Link to="/shop" className="primary dark">
            Explore the collection <Icon name="arrow" size={16} />
          </Link>
        </div>
      )}
    </section>
  );
}
