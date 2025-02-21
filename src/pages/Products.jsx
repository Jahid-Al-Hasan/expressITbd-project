import axios from "axios";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  // Fetch Data
  useEffect(() => {
    const productData = async () => {
      try {
        const response = await axios.get(
          "https://glore-bd-backend-node-mongo.vercel.app/api/product"
        );
        if (!response) {
          console.log("Product not found");
        } else {
          setProducts(response.data.data);
          console.log(response.data.data[0].images[0].optimizeUrl);
        }
      } catch (error) {
        console.log("Product load error:", error.message);
      }
    };
    productData();
  }, []);

  return (
    <div className="container lg:max-w-[70%] mx-auto">
      <div>
        <h3>Our Products</h3>
        {products.map((product) => (
          <div key={product._id}>
            <img src={product.images[0].optimizeUrl} alt="product-1 image" />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
