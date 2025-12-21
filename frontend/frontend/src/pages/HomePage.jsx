import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>

      {/* Hero Section */}
      <section>
        <div>
          <h1>Everyday Pants & Denim, Reinvented</h1>
          <p>
            THE_GRUFF brings premium comfort and timeless design — crafted for men who want style that lasts.
          </p>

          <div>
            <a href="/catalog">Shop Now</a>
            <a href="/about">Learn More</a>
          </div>
        </div>

        <div>
          <img 
            src="/images/thegruff.png" 
            alt="THE_GRUFF Pants Collection" 
          />
        </div>
      </section>

      {/* Featured Categories */}
      <section>
        <h2>Explore Our Collection</h2>

        <div>
          <div>
            <img src="/images/men.png" alt="Pants" />
            <h3>Pants</h3>
            <a href="/catalog?category=pants">Shop Pants</a>
          </div>

          <div>
            <img src="/images/women.png" alt="Denim" />
            <h3>Denim</h3>
            <a href="/catalog?category=denim">Shop Denim</a>
          </div>

          <div>
            <img src="/images/men.png" alt="Cargo" />
            <h3>Cargos</h3>
            <a href="/catalog?category=cargo">Shop Cargos</a>
          </div>
        </div>
      </section>

      {/* Story / Brand Section */}
      <section>
        <div>
          <h2>Our Story</h2>
          <p>
            Built on the idea that everyday essentials should have premium quality. 
            At THE_GRUFF, we create pants designed for work, weekends, and everything in between.
          </p>
          <a href="/about">Read More</a>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <h2>Join THE_GRUFF Community</h2>
        <p>Be the first to know about launches, offers, and exclusive drops.</p>
        <a href="/signup">Join Now</a>
      </section>

    </main>
  );
}
