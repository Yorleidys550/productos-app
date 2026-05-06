import { useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const handleSave = () => {
    setRefresh(!refresh);
    setEditProduct(null);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>🛒 Gestión de Productos</h1>
      <ProductForm
        onSave={handleSave}
        editProduct={editProduct}
        setEditProduct={setEditProduct}
      />
      <ProductList
        refresh={refresh}
        onEdit={setEditProduct}
        onDelete={handleSave}
      />
    </div>
  );
}

export default App;