import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Shop() {
  const { data: coffees, setData: setCoffees, loading } = useFetch("http://localhost:3001/coffees");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const displayed = coffees.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleDelete(id) {
    fetch(`http://localhost:3001/coffees/${id}`, { method: "DELETE" })
      .then(() => setCoffees(prev => prev.filter(c => c.id !== id)));
  }

  if (loading) return <p style={{ padding: "2rem" }}>Loading...</p>;

  return (
    <div style={{ background: "#8B5E3C", minHeight: "90vh", padding: "2rem" }}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: "8px 16px", borderRadius: "20px", border: "none", marginBottom: "1.5rem" }}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
        {displayed.map(coffee => (
          <div key={coffee.id} style={{ background: "white", borderRadius: "8px", padding: "1rem", cursor: "pointer" }}
            onClick={() => navigate(`/product/${coffee.id}`)}>
            <img src={coffee.image} alt={coffee.name} style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "4px" }} />
            <h3>{coffee.name}</h3>
            <p>{coffee.description}</p>
            <p>{coffee.origin}</p>
            <p>${coffee.price}</p>
            <button onClick={e => { e.stopPropagation(); handleDelete(coffee.id); }}
              style={{ background: "#7B4F2E", color: "white", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer" }}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
