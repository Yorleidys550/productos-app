import { useState, useEffect } from "react";
import axios from "axios";
const API = "http://localhost:3000/api/products";
function ProductForm({ onSave, editProduct, setEditProduct }) {
  const [form, setForm] = useState({ name: "", description: "", price: "" });
  useEffect(() => {
    if (editProduct) setForm(editProduct);
  }, [editProduct]);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editProduct) {
      await axios.put(`${API}/${editProduct.id}`, form);
    } else {
      await axios.post(API, form);
    }
    setForm({ name: "", description: "", price: "" });
    onSave();
  };
  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>{editProduct ? "✏️ Editar Producto" : "➕ Nuevo Producto"}</h2>
      <input
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        required
        style={{ display: "block", marginBottom: "8px", width: "100%", padding: "8px" }}
      />
      <input
        name="description"
        placeholder="Descripción"
        value={form.description}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "8px", width: "100%", padding: "8px" }}
      />
      <input
        name="price"
        placeholder="Precio"
        type="number"
        value={form.price}
        onChange={handleChange}
        required
        style={{ display: "block", marginBottom: "8px", width: "100%", padding: "8px" }}
      />
      <button type="submit" style={{ marginRight: "8px", padding: "8px 16px" }}>
        {editProduct ? "Actualizar" : "Guardar"}
      </button>
      {editProduct && (
        <button type="button" onClick={() => setEditProduct(null)} style={{ padding: "8px 16px" }}>
          Cancelar
        </button>
      )}
    </form>
  );
}
export default ProductForm;