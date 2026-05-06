import { useEffect, useState } from "react";
import axios from "axios";
const API = "http://localhost:3000/api/products";
function ProductList({ refresh, onEdit, onDelete }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(API).then((res) => setProducts(res.data));
  }, [refresh]);
  const handleDelete = async (id) => {
    if (confirm("¿Seguro que deseas eliminar este producto?")) {
      await axios.delete(`${API}/${id}`);
      onDelete();
    }
  };
  return (
    <div>
      <h2>📦 Lista de Productos</h2>
      {products.length === 0 && <p>No hay productos aún.</p>}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th style={th}>ID</th>
            <th style={th}>Nombre</th>
            <th style={th}>Descripción</th>
            <th style={th}>Precio</th>
            <th style={th}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td style={td}>{p.id}</td>
              <td style={td}>{p.name}</td>
              <td style={td}>{p.description}</td>
              <td style={td}>${p.price}</td>
              <td style={td}>
                <button onClick={() => onEdit(p)} style={{ marginRight: "8px" }}>✏️</button>
                <button onClick={() => handleDelete(p.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const th = { padding: "10px", border: "1px solid #ddd", textAlign: "left" };
const td = { padding: "10px", border: "1px solid #ddd" };
export default ProductList;