import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminPortal() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", image: "", description: "", origin: "", price: "" });

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/coffees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, price: parseFloat(form.price) }),
    })
      .then(r => r.json())
      .then(() => navigate("/shop"));
  }

  return (
    <div style={{ background: "#8B5E3C", minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "#A0714F", padding: "2rem", borderRadius: "8px", width: "400px" }}>
        <h2 style={{ color: "white", marginBottom: "1rem" }}>Add New Coffee</h2>
        <form onSubmit={handleSubmit}>
          {["name", "image", "description", "origin", "price"].map(field => (
            <div key={field} style={{ marginBottom: "1rem" }}>
              <label style={{ color: "white", display: "block", marginBottom: "4px" }}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type={field === "price" ? "number" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder={`Type here`}
                style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "none" }}
              />
            </div>
          ))}
          <button type="submit" style={{ background: "#5C3317", color: "white", border: "none", padding: "10px 24px", borderRadius: "4px", cursor: "pointer", width: "100%" }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminPortal;
