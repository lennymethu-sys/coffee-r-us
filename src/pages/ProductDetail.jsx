import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [coffee, setCoffee] = useState(null);
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/coffees/${id}`)
      .then(r => r.json())
      .then(d => { setCoffee(d); setPrice(d.price); });
  }, [id]);

  function handlePriceUpdate(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/coffees/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: parseFloat(price) }),
    })
      .then(r => r.json())
      .then(updated => setCoffee(updated));
  }

  if (!coffee) return <p style={{ padding: "2rem" }}>Loading...</p>;

  return (
    <div style={{ background: "#8B5E3C", minHeight: "90vh", padding: "2rem", color: "white" }}>
      <button onClick={() => navigate("/shop")} style={{ marginBottom: "1rem", background: "#5C3317", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}>
        ← Back to Shop
      </button>
      <div style={{ background: "#A0714F", padding: "2rem", borderRadius: "8px", maxWidth: "500px" }}>
        <img src={coffee.image} alt={coffee.name} style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }} />
        <h2>{coffee.name}</h2>
        <p>{coffee.description}</p>
        <p>Origin: {coffee.origin}</p>
        <p>Price: ${coffee.price}</p>
        <form onSubmit={handlePriceUpdate} style={{ marginTop: "1rem" }}>
          <label>Update Price:</label>
          <input
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            style={{ display: "block", margin: "8px 0", padding: "8px", borderRadius: "4px", border: "none", width: "100%" }}
          />
          <button type="submit" style={{ background: "#5C3317", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}>
            Update Price
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductDetail;
