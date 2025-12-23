import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <main className={styles.main}>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Everyday Pants & Denim, Reinvented</h1>
          <p>
            THE_GRUFF brings premium comfort and timeless design — crafted for men
            who want style that lasts.
          </p>

          <div className={styles.heroCta}>
            <Link to="/catalog" className={styles.primaryBtn}>
              Shop Now
            </Link>
            <Link to="/about" className={styles.secondaryBtn}>
              Learn More
            </Link>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img
            src="/images/thegruff.png"
            alt="THE_GRUFF Pants Collection"
            loading="lazy"
          />
        </div>
      </section>

      {/* ---------- Trust Indicators ---------- */}
      <section className={styles.trust}>
        <div>⭐ 4.6 Rated by 10,000+ Customers</div>
        <div>🚚 Free Shipping Across India</div>
        <div>🔄 Easy 7-Day Returns</div>
      </section>

      {/* ---------- Featured Products ---------- */}
      <section className={styles.featured}>
        <h2>Best Sellers</h2>

        <div className={styles.productGrid}>
          {featuredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
              </Link>

              <h3>{product.name}</h3>
              <p>₹{product.price}</p>

              <Link to={`/product/${product.id}`} className={styles.link}>
                View Product
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Categories ---------- */}
      <section className={styles.categories}>
        <h2>Explore Our Collection</h2>

        <div className={styles.categoryGrid}>
          <CategoryCard
            title="Chinos"
            image="/images/men.png"
            link="/catalog?category=Chinos"
          />
          <CategoryCard
            title="Joggers"
            image="/images/men.png"
            link="/catalog?category=Joggers"
          />
          <CategoryCard
            title="Formal"
            image="/images/men.png"
            link="/catalog?category=Formal"
          />
        </div>
      </section>

      {/* ---------- Brand Story ---------- */}
      <section className={styles.story}>
        <h2>Our Story</h2>
        <p>
          Built on the idea that everyday essentials should feel premium.
          THE_GRUFF designs pants for work, weekends, and everything in between.
        </p>
        <Link to="/about" className={styles.link}>
          Read Our Story
        </Link>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className={styles.cta}>
        <h2>Join THE_GRUFF Community</h2>
        <p>Be the first to know about launches, offers, and exclusive drops.</p>
        <Link to="/signup" className={styles.primaryBtn}>
          Join Now
        </Link>
      </section>
    </main>
  );
}

function CategoryCard({ title, image, link }) {
  return (
    <div className={styles.categoryCard}>
      <img src={image} alt={title} loading="lazy" />
      <h3>{title}</h3>
      <Link to={link}>Shop {title}</Link>
    </div>
  );
}
