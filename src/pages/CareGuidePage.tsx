import { Icon } from "@/components/ui/Icon";

export default function CareGuidePage() {
  const fabrics = [
    {
      name: "Turkish Crepe (Abayas & Modest Robes)",
      description:
        "Our signature Turkish crepe provides fluid movement and opaque modesty. It naturally resists creasing when hung properly.",
      dos: [
        "Hand wash in cool water with mild liquid detergent or delicate machine cycle",
        "Hang immediately on contoured wooden hangers to dry naturally",
        "Steam gently on medium heat, or iron on the reverse side with a pressing cloth",
      ],
      donts: ["Do not wring or twist fabric violently", "Never use harsh chlorine bleach or hot water"],
    },
    {
      name: "Satin & Silk-Touch Gowns (Evening & Occasion)",
      description:
        "High-density Turkish satin offers an incomparable luminous sheen for celebratory occasions.",
      dos: [
        "Professional dry cleaning is recommended for best preservation",
        "Store in a breathable garment bag away from direct sunlight",
        "Steam from a distance of at least 15 cm to avoid water droplet spots",
      ],
      donts: [
        "Do not spray perfume, hairspray, or deodorant directly onto the fabric",
        "Avoid high-temperature iron contact which can scorch the satin weave",
      ],
    },
    {
      name: "Gold Embroidery & Kaftan Trims",
      description:
        "Intricate gold metallic threading and artisanal trims require extra tenderness to maintain luster.",
      dos: [
        "Turn garment inside out prior to any gentle spot cleaning or laundering",
        "Always dry clean heavily embellished garments to protect threading",
        "Iron from the underside with low heat over a thick towel",
      ],
      donts: [
        "Never iron directly over gold embroidery or metallic threading",
        "Do not rub vigorously over embellished seams",
      ],
    },
    {
      name: "Turkish Cotton-Linen Co-ords",
      description:
        "Breathable, natural-fiber blends made specifically for relaxed, modern elegance in warm weather.",
      dos: [
        "Gentle machine wash with cold water and like colors",
        "Reshape trousers and tunics while damp before hanging",
        "Warm iron while slightly damp for that crisp, tailored finish",
      ],
      donts: ["Avoid high-heat tumble drying which may cause shrinkage"],
    },
  ];

  return (
    <section className="section" style={{ maxWidth: 1040, margin: "0 auto", paddingBottom: 100 }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <span className="eyebrow gold">LONGEVITY &amp; CARE</span>
        <h1
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(42px, 5.5vw, 68px)",
            fontWeight: 400,
            margin: "16px 0",
          }}
        >
          Fabric &amp; Garment Care Guide
        </h1>
        <p style={{ maxWidth: 620, margin: "0 auto", color: "var(--muted)", lineHeight: 1.8 }}>
          Authentic Turkish garments are crafted with high quality standards. Follow these simple guidelines
          to maintain their vibrant color, exquisite drape, and embroidery for years to come.
        </p>
      </div>

      <div style={{ display: "grid", gap: 36 }}>
        {fabrics.map((f) => (
          <div
            key={f.name}
            style={{
              background: "var(--paper)",
              border: "1px solid var(--line)",
              padding: "36px 32px",
              borderRadius: 4,
            }}
          >
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "28px",
                color: "var(--ink)",
                marginBottom: 8,
              }}
            >
              {f.name}
            </h2>
            <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: 20 }}>{f.description}</p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 24,
                borderTop: "1px solid #f0ebe1",
                paddingTop: 20,
              }}
            >
              <div>
                <h4
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    color: "var(--gold)",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  ✓ Recommended Care
                </h4>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: "13px", lineHeight: 1.8, color: "#333" }}>
                  {f.dos.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    color: "#c9384a",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  ✕ Practices to Avoid
                </h4>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: "13px", lineHeight: 1.8, color: "#333" }}>
                  {f.donts.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
