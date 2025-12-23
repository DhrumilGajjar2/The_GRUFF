import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import styles from "./CatalogPage.module.css";

export default function CatalogPage() {
  const [sortBy, setSortBy] = useState("featured");
  const [priceFilter, setPriceFilter] = useState("all");

  // ---------- Sort & Filter Logic ----------
  const filteredProducts = useMemo(() => {
    let items = [...PRODUCTS];

    // Price filter
    if (priceFilter === "under2000") {
      items = items.filter((p) => p.price < 2000);
    } else if (priceFilter === "2000-4000") {
      items = items.filter((p) => p.price >= 2000 && p.price <= 4000);
    } else if (priceFilter === "above4000") {
      items = items.filter((p) => p.price > 4000);
    }

    // Sorting
    if (sortBy === "low-high") {
      items.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high-low") {
      items.sort((a, b) => b.price - a.price);
    } else if (sortBy === "new") {
      items.sort((a, b) => b.id - a.id);
    }

    return items;
  }, [sortBy, priceFilter]);

  return (
    <main className={styles.main}>
      {/* ---------- Header ---------- */}
      <section className={styles.header}>
        <div>
          <h2>All Pants & Denim</h2>
          <p>Premium everyday wear crafted for comfort & durability.</p>
        </div>

        <div className={styles.filters}>
          <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
            <option value="all">All Prices</option>
            <option value="under2000">Under ₹2000</option>
            <option value="2000-4000">₹2000 - ₹4000</option>
            <option value="above4000">Above ₹4000</option>
          </select>

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="new">Newest</option>
          </select>
        </div>
      </section>

      {/* ---------- Product Grid ---------- */}
      <section className={styles.grid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            {/* Badge */}
            {product.isNew && <span className={styles.badge}>New</span>}

            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
            </Link>

            <div className={styles.info}>
              <h3>{product.name}</h3>

              <div className={styles.meta}>
                <span className={styles.price}>₹{product.price}</span>
                <span className={styles.rating}>⭐ {product.rating || 4.5}</span>
              </div>

              <Link className={styles.cta} to={`/product/${product.id}`}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* ---------- Empty State ---------- */}
      {filteredProducts.length === 0 && (
        <p className={styles.empty}>No products found</p>
      )}
    </main>
  );
}
