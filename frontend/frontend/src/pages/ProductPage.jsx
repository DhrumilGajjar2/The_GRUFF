import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { PRODUCTS } from "../data/products";
import { useCart } from "../context/CartContext";
import styles from "./ProductPage.module.css";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [size, setSize] = useState(product?.sizes?.[0] || "");
  const [color, setColor] = useState(product?.colors?.[0] || "");
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <section>
        <p>Product not found.</p>
      </section>
    );
  }

  function handleAddToCart() {
    addToCart(product, size, color, qty);
    navigate("/cart");
  }

  return (
    <main className={styles.main}>

      {/* Product Layout */}
      <section>

        {/* Image Section */}
        <div>
          <img src={product.image} alt={product.name} />
          <div>
            {product.gallery?.map((img, index) => (
              <img key={index} src={img} alt={product.name + index} />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div>
          <div>
            <h2>{product.name}</h2>
            <p>₹{product.price}</p>
          </div>

          <p>{product.description}</p>

          <div>
            <label>Size</label>
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              {product.sizes?.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Color</label>
            <select value={color} onChange={(e) => setColor(e.target.value)}>
              {product.colors?.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Quantity</label>
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            />
          </div>

          <button onClick={handleAddToCart}>Add to Cart</button>

          <div>
            <h4>Product Highlights</h4>
            <ul>
              {product.highlights?.map((h, index) => (
                <li key={index}>{h}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Care Instructions</h4>
            <p>{product.care}</p>
          </div>

        </div>
      </section>

      {/* Additional Sections */}
      <section>
        <h3>Customer Reviews</h3>
        <p>No reviews yet</p>
      </section>

    </main>
  );
}
