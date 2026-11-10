import { Link } from "react-router-dom";
import { Icon } from "@/components/ui/Icon";

export default function SizeGuidePage() {
  return (
    <section className="section" style={{ maxWidth: 1040, margin: "0 auto", paddingBottom: 100 }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <span className="eyebrow gold">FIT &amp; PROPORTIONS</span>
        <h1
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(42px, 5.5vw, 68px)",
            fontWeight: 400,
            margin: "16px 0",
          }}
        >
          Turkish Women's Sizing Guide
        </h1>
        <p style={{ maxWidth: 600, margin: "0 auto", color: "var(--muted)", lineHeight: 1.8 }}>
          Turkish fashion sizing uses European standards. Use this conversion chart and measurement guide to
          ensure your garments fit comfortably and modestly.
        </p>
      </div>

      {/* Sizing Table */}
      <div
        style={{
          background: "var(--paper)",
          border: "1px solid var(--line)",
          borderRadius: 4,
          overflowX: "auto",
          marginBottom: 60,
          boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "13px" }}>
          <thead>
            <tr style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Standard</th>
              <th style={{ padding: "16px 20px", fontWeight: 600, color: "var(--gold)" }}>Turkish (TR/EU)</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>UK</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>US</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Bust (cm / in)</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Waist (cm / in)</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Hips (cm / in)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #f0ebe1" }}>
              <td style={{ padding: "16px 20px", fontWeight: 600 }}>XS</td>
              <td style={{ padding: "16px 20px", color: "var(--gold)", fontWeight: 600 }}>34</td>
              <td style={{ padding: "16px 20px" }}>6</td>
              <td style={{ padding: "16px 20px" }}>2</td>
              <td style={{ padding: "16px 20px" }}>82 cm / 32"</td>
              <td style={{ padding: "16px 20px" }}>64 cm / 25"</td>
              <td style={{ padding: "16px 20px" }}>90 cm / 35.5"</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0ebe1" }}>
              <td style={{ padding: "16px 20px", fontWeight: 600 }}>S</td>
              <td style={{ padding: "16px 20px", color: "var(--gold)", fontWeight: 600 }}>36</td>
              <td style={{ padding: "16px 20px" }}>8</td>
              <td style={{ padding: "16px 20px" }}>4</td>
              <td style={{ padding: "16px 20px" }}>86 cm / 34"</td>
              <td style={{ padding: "16px 20px" }}>68 cm / 26.5"</td>
              <td style={{ padding: "16px 20px" }}>94 cm / 37"</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0ebe1" }}>
              <td style={{ padding: "16px 20px", fontWeight: 600 }}>M</td>
              <td style={{ padding: "16px 20px", color: "var(--gold)", fontWeight: 600 }}>38</td>
              <td style={{ padding: "16px 20px" }}>10</td>
              <td style={{ padding: "16px 20px" }}>6</td>
              <td style={{ padding: "16px 20px" }}>90 cm / 35.5"</td>
              <td style={{ padding: "16px 20px" }}>72 cm / 28.5"</td>
              <td style={{ padding: "16px 20px" }}>98 cm / 38.5"</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0ebe1" }}>
              <td style={{ padding: "16px 20px", fontWeight: 600 }}>L</td>
              <td style={{ padding: "16px 20px", color: "var(--gold)", fontWeight: 600 }}>40</td>
              <td style={{ padding: "16px 20px" }}>12</td>
              <td style={{ padding: "16px 20px" }}>8</td>
              <td style={{ padding: "16px 20px" }}>96 cm / 37.5"</td>
              <td style={{ padding: "16px 20px" }}>78 cm / 30.5"</td>
              <td style={{ padding: "16px 20px" }}>104 cm / 41"</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0ebe1" }}>
              <td style={{ padding: "16px 20px", fontWeight: 600 }}>XL</td>
              <td style={{ padding: "16px 20px", color: "var(--gold)", fontWeight: 600 }}>42</td>
              <td style={{ padding: "16px 20px" }}>14</td>
              <td style={{ padding: "16px 20px" }}>10</td>
              <td style={{ padding: "16px 20px" }}>102 cm / 40"</td>
              <td style={{ padding: "16px 20px" }}>84 cm / 33"</td>
              <td style={{ padding: "16px 20px" }}>110 cm / 43.5"</td>
            </tr>
            <tr>
              <td style={{ padding: "16px 20px", fontWeight: 600 }}>XXL</td>
              <td style={{ padding: "16px 20px", color: "var(--gold)", fontWeight: 600 }}>44</td>
              <td style={{ padding: "16px 20px" }}>16</td>
              <td style={{ padding: "16px 20px" }}>12</td>
              <td style={{ padding: "16px 20px" }}>108 cm / 42.5"</td>
              <td style={{ padding: "16px 20px" }}>90 cm / 35.5"</td>
              <td style={{ padding: "16px 20px" }}>116 cm / 45.5"</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* How to Measure Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 30 }}>
        <div style={{ background: "var(--cream)", padding: "30px", borderRadius: 4 }}>
          <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "22px", marginBottom: 12 }}>
            1. Abayas &amp; Kaftans
          </h3>
          <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--muted)" }}>
            Abayas and kaftans have generous relaxed silhouettes. Your main consideration is garment length
            (standard floor length is typically 56–60 inches depending on your height and choice of heels).
          </p>
        </div>

        <div style={{ background: "var(--cream)", padding: "30px", borderRadius: 4 }}>
          <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "22px", marginBottom: 12 }}>
            2. Co-ords &amp; Tailored Sets
          </h3>
          <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--muted)" }}>
            For tailored trousers and matching tops, measure around your natural waistline (narrowest point) and
            broadest point of your hips. If between sizes, we recommend sizing up for modest drape.
          </p>
        </div>

        <div style={{ background: "var(--cream)", padding: "30px", borderRadius: 4 }}>
          <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "22px", marginBottom: 12 }}>
            3. Still Unsure About Sizing?
          </h3>
          <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--muted)", marginBottom: 16 }}>
            Our WhatsApp concierge can recommend the exact size based on your height, UK dress size, and
            preferred drape.
          </p>
          <a
            href="https://wa.me/2348000000000?text=Hello%20Perfect%20Touch%20Royale,%20I%20need%20assistance%20choosing%20my%20size"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#25D366",
              fontWeight: 600,
              fontSize: "12px",
              textDecoration: "none",
            }}
          >
            <Icon name="whatsapp" size={16} />
            Chat with sizing concierge
          </a>
        </div>
      </div>
    </section>
  );
}
