import { Link } from "react-router-dom";
import { Icon } from "@/components/ui/Icon";

export default function NotFoundPage() {
  return (
    <section className="section" style={{ textAlign: "center", padding: "140px 20px", minHeight: "65vh" }}>
      <span className="eyebrow gold">ERROR 404</span>
      <h1
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "clamp(48px, 6vw, 84px)",
          fontWeight: 400,
          margin: "18px 0 20px",
        }}
      >
        Page Not Found
      </h1>
      <p style={{ maxWidth: 500, margin: "0 auto 36px", color: "var(--muted)", lineHeight: 1.8 }}>
        The dress or page you are seeking does not exist or may have been transitioned into an archived
        collection.
      </p>

      <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
        <Link to="/" className="primary">
          Return to home <Icon name="arrow" size={16} />
        </Link>
        <Link to="/shop" className="primary dark">
          Shop collection
        </Link>
      </div>
    </section>
  );
}
