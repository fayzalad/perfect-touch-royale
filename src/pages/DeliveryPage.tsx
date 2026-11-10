import { deliveryZones, money, freeDeliveryThreshold, internationalShippingCost } from "@/utils/format";
import { Icon } from "@/components/ui/Icon";

export default function DeliveryPage() {
  return (
    <section className="section" style={{ maxWidth: 1040, margin: "0 auto", paddingBottom: 100 }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <span className="eyebrow gold">SHIPPING &amp; POLICIES</span>
        <h1
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(42px, 5.5vw, 68px)",
            fontWeight: 400,
            margin: "16px 0",
          }}
        >
          Delivery &amp; Returns Policy
        </h1>
        <p style={{ maxWidth: 620, margin: "0 auto", color: "var(--muted)", lineHeight: 1.8 }}>
          We provide fast, secure, and trackable door-to-door delivery across all 36 Nigerian states and the
          FCT, as well as worldwide delivery for our international clientele.
        </p>
      </div>

      {/* Free Delivery Banner */}
      <div
        style={{
          background: "var(--ink)",
          color: "#fff",
          padding: "24px 30px",
          borderRadius: 4,
          marginBottom: 48,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", color: "var(--gold)" }}>
            Complimentary Nationwide Shipping
          </h3>
          <p style={{ fontSize: "13px", opacity: 0.8, marginTop: 4 }}>
            Enjoy complimentary free shipping on all orders totaling {money(freeDeliveryThreshold)} or more.
          </p>
        </div>
        <Icon name="truck" size={32} />
      </div>

      {/* Nigerian Shipping Zones */}
      <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "36px", marginBottom: 24 }}>
        Nigerian Delivery Zones &amp; Timelines
      </h2>

      <div
        style={{
          background: "var(--paper)",
          border: "1px solid var(--line)",
          borderRadius: 4,
          overflowX: "auto",
          marginBottom: 60,
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "13px" }}>
          <thead>
            <tr style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Destination Zone</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>States Covered</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Courier Fee</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Estimated Transit</th>
            </tr>
          </thead>
          <tbody>
            {deliveryZones.map((z, idx) => (
              <tr key={z.name} style={{ borderBottom: idx < deliveryZones.length - 1 ? "1px solid #f0ebe1" : "none" }}>
                <td style={{ padding: "16px 20px", fontWeight: 600 }}>{z.name}</td>
                <td style={{ padding: "16px 20px", color: "var(--muted)", maxWidth: 300 }}>
                  {z.states.join(", ")}
                </td>
                <td style={{ padding: "16px 20px", fontWeight: 600, color: "var(--gold)" }}>
                  {money(z.cost)}
                </td>
                <td style={{ padding: "16px 20px" }}>{z.timeline}</td>
              </tr>
            ))}
            <tr style={{ background: "#fcfaf7", borderTop: "2px solid var(--line)" }}>
              <td style={{ padding: "16px 20px", fontWeight: 600 }}>International Express (DHL)</td>
              <td style={{ padding: "16px 20px", color: "var(--muted)" }}>
                UK, US, Canada, Ghana, UAE, South Africa &amp; Worldwide
              </td>
              <td style={{ padding: "16px 20px", fontWeight: 600, color: "var(--gold)" }}>
                {money(internationalShippingCost)}
              </td>
              <td style={{ padding: "16px 20px" }}>7–14 business days</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Returns & Exchange Guarantee */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 36 }}>
        <div style={{ background: "var(--cream)", padding: "35px", borderRadius: 4 }}>
          <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", marginBottom: 14 }}>
            14-Day Exchange Guarantee
          </h3>
          <p style={{ fontSize: "13px", lineHeight: 1.8, color: "var(--muted)" }}>
            We want you to be completely satisfied with your Turkish attire. If an item doesn't fit to your
            liking, you may request an exchange for another size or style within 14 calendar days of receipt.
          </p>
        </div>

        <div style={{ background: "var(--cream)", padding: "35px", borderRadius: 4 }}>
          <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", marginBottom: 14 }}>
            Condition of Returned Garments
          </h3>
          <p style={{ fontSize: "13px", lineHeight: 1.8, color: "var(--muted)" }}>
            Garments must be returned in their original condition: unworn, unwashed, unaltered, free of makeup or
            perfume residue, and with all original Turkish tags intact.
          </p>
        </div>

        <div style={{ background: "var(--cream)", padding: "35px", borderRadius: 4 }}>
          <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", marginBottom: 14 }}>
            How to Initiate an Exchange
          </h3>
          <p style={{ fontSize: "13px", lineHeight: 1.8, color: "var(--muted)" }}>
            Simply send a WhatsApp message to +234 800 000 0000 or email hello@perfecttouchroyale.com with your
            Order ID. Our dispatch team will arrange courier pickup or drop-off instructions.
          </p>
        </div>
      </div>
    </section>
  );
}
