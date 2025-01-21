// hooks/useProducts.js
import { useState, useEffect } from "react";

const useProducts = (url = "http://127.0.0.1/8000/products") => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        console.log("data : ", data);
        setProducts(data);
      } catch (e) {
        // setError(error.);
        console.log("ERROR in getting products", e);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [url]);

  return { products, loading, error };
};

export default useProducts;
