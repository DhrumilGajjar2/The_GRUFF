import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import styles from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <main className={styles.main}>

      {/* Page Title & Filters */}
      <section>
        <div>
          <h2>All Pants & Denim</h2>
          <p>Premium everyday wear crafted for comfort & durability.</p>
        </div>

        <div>
          <label>Sort By:</label>
          <select>
            <option value="default">Featured</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="new">Newest</option>
          </select>
        </div>
      </section>

      {/* Product Grid */}
      <section>
        <div>
          {PRODUCTS.map((product) => (
            <div key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>

              <div>
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>

                <Link to={`/product/${product.id}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Load More */}
      <section>
        <button>Load More</button>
      </section>

    </main>
  );
}
