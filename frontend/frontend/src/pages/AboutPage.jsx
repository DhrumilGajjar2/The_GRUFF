import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <h1>About THE_GRUFF</h1>
        <p>
          Premium pants designed for everyday life — where comfort, durability,
          and style come together.
        </p>
      </section>

      {/* ---------- Mission ---------- */}
      <section className={styles.section}>
        <h2>Our Mission</h2>
        <p>
          At THE_GRUFF, our mission is simple: to redefine everyday menswear.
          We believe pants should look sharp, feel comfortable, and last long —
          without costing a fortune.
        </p>
      </section>

      {/* ---------- Why We Exist ---------- */}
      <section className={styles.sectionAlt}>
        <h2>Why THE_GRUFF?</h2>

        <div className={styles.points}>
          <div>
            <h3>✔ Thoughtful Design</h3>
            <p>
              Every fit is carefully tailored to suit modern Indian body types
              and lifestyles.
            </p>
          </div>

          <div>
            <h3>✔ Premium Fabrics</h3>
            <p>
              We source high-quality fabrics that balance softness, strength,
              and breathability.
            </p>
          </div>

          <div>
            <h3>✔ Everyday Versatility</h3>
            <p>
              Designed for work, weekends, and everything in between.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Quality Promise ---------- */}
      <section className={styles.section}>
        <h2>Our Quality Promise</h2>
        <p>
          From fabric selection to final stitching, every THE_GRUFF product goes
          through strict quality checks. We focus on long-lasting comfort,
          reliable fits, and timeless style.
        </p>
      </section>

      {/* ---------- Sustainability ---------- */}
      <section className={styles.sectionAlt}>
        <h2>Responsibility & Sustainability</h2>
        <p>
          We are committed to reducing waste, improving fabric efficiency, and
          working with ethical manufacturing partners wherever possible.
        </p>
      </section>

      {/* ---------- Closing ---------- */}
      <section className={styles.cta}>
        <h2>Designed for Everyday Confidence</h2>
        <p>
          THE_GRUFF isn’t just about clothing — it’s about feeling confident in
          what you wear, every single day.
        </p>
      </section>
    </main>
  );
}
