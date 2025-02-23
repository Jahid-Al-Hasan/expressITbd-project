import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Products() {
  const [products, setProducts] = useState([]);

  // Fetch Data
  useEffect(() => {
    const productData = async () => {
      try {
        const response = await axios.get("/api/product");
        if (!response) {
          console.log("Product not found");
        } else {
          setProducts(response.data.data);
        }
      } catch (error) {
        console.log("Product load error:", error.message);
      }
    };
    productData();
  }, []);

  return (
    <div className="w-full lg:max-w-[80%] px-2 lg:px-0 lg:mx-auto ">
      <div className="my-8">
        <h3 className="text-2xl font-bold my-6">Our Products</h3>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2  gap-4">
          {products.map((product) => (
            <div key={product._id} className="rounded-md bg-white shadow p-3 ">
              <div className="h-72 ">
                <Link to={`/product/${product._id}`} state={{ product }}>
                  <img
                    src={product.images[0]?.optimizeUrl}
                    alt="products image"
                    className="rounded-md object-cover h-full w-full "
                  />
                </Link>
              </div>
              <div className="my-3 mx-1 ">
                <div className="flex justify-between text-md font-bold opacity-70 whitespace-pre">
                  <h3>{product.name}</h3>

                  <h3>{`Price:  ${product.price} TK`}</h3>
                </div>
                <Link to={`/product/${product._id}`} state={{ product }}>
                  <button className="btn rounded-lg border px-3 py-0.5 my-4 text-xs ">
                    Details
                  </button>
                </Link>
                <p className="text-sm opacity-50  my-4 mb-6">
                  {product.description}
                </p>

                <div
                  className="flex
                justify-center"
                >
                  <button className="btn text-xs border rounded-3xl py-1 px-6">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
