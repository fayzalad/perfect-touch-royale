import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { products, categories, type Product } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { useApp } from "@/context/CartContext";
import { Icon } from "@/components/ui/Icon";

export default function ShopPage() {
  const { setSelected } = useApp();
  const location = useLocation();

  const [category, setCategory] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc" | "name">("featured");

  // Read location state if user navigated from header search or footer links
  useEffect(() => {
    if (location.state?.category) {
      setCategory(location.state.category);
    }
    if (location.state?.search) {
      setSearch(location.state.search);
    }
  }, [location.state]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory = category === "All" || p.category.toLowerCase() === category.toLowerCase();
        const matchesSearch =
          !search ||
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sort === "price-asc") return a.price - b.price;
        if (sort === "price-desc") return b.price - a.price;
        if (sort === "name") return a.name.localeCompare(b.name);
        return a.id - b.id; // default featured
      });
  }, [category, search, sort]);

  return (
    <section className="shop-page section">
      <div className="shop-hero">
        <motion.span
          className="eyebrow gold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          COLLECTION
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Turkish clothing collection
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore bespoke abayas, flowing kaftans, tailored sets, and evening dresses.
        </motion.p>
      </div>

      {/* Filter & Controls Bar */}
      <div className="filters">
        <div style={{ display: "flex", gap: "24px", overflowX: "auto", flex: 1 }}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={category.toLowerCase() === c.toLowerCase() ? "active" : ""}
            >
              {c}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginLeft: "auto" }}>
          {/* In-page search if active */}
          {search && (
            <div
              style={{
                fontSize: "11px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "var(--cream)",
                padding: "6px 12px",
                borderRadius: "20px",
              }}
            >
              <span>Search: "{search}"</span>
              <button
                onClick={() => setSearch("")}
                style={{ border: "none", background: "none", cursor: "pointer", display: "grid", placeItems: "center" }}
                aria-label="Clear search"
              >
                <Icon name="close" size={14} />
              </button>
            </div>
          )}

          {/* Sort selector */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
            style={{
              border: "none",
              borderBottom: "1px solid var(--line)",
              background: "transparent",
              fontSize: "11px",
              padding: "4px 8px",
              cursor: "pointer",
              outline: "none",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>

          <span>{filteredProducts.length} pieces</span>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((p, index) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpen={() => setSelected(p)}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No pieces found</h2>
          <p>We couldn't find any items matching your selected criteria.</p>
          <button
            className="primary dark"
            onClick={() => {
              setCategory("All");
              setSearch("");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
