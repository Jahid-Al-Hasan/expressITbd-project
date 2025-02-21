import { useState } from "react";
import { useLocation } from "react-router";

function ProductDetails() {
  const { state } = useLocation();
  const [product, setProduct] = useState(state?.product || null);
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity(() => {
      if (quantity === 1) {
        return 1;
      } else {
        return quantity - 1;
      }
    });
  };
  const handleIncrease = () => {
    setQuantity(() => {
      if (quantity === 100) {
        return 100;
      } else {
        return quantity + 1;
      }
    });
  };

  return (
    <div className="xl:max-w-[80%] px-2 md:px-0 mx-auto my-6">
      <h3 className="font-bold text-xl">Product Details</h3>
      <div
        className="grid lg:grid-cols-2 md:grid-cols-1 rounded-xl p-4 shadow bg-white gap-10 my-4
      "
      >
        <div className="rounded-md  lg:w-full  ">
          <img
            src={product.images[0]?.optimizeUrl}
            alt="products image"
            className="rounded-md object-cover h-full  w-full  overflow-scroll "
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <div className=" flex justify-between items-center">
              <h3 className="text-xl font-bold opacity-70">{product.name}</h3>

              <button className="btn">BUY NOW</button>
            </div>
            <br />
            <hr />
            <div className="inline-block my-3 p-2 border border-gray-200 text-xs font-bold opacity-50">{`Price:  ${product.price} TK`}</div>

            <p className="text-md font-medium opacity-40 my-10 mx-2">
              {product.description}
            </p>

            <div className="flex justify-between gap-2">
              <div className="rounded-sm border px-6 py-3">Quantity</div>

              <div className="grid grid-cols-3 rounded-sm border px-6 py-3 w-28 gap-2">
                <button
                  onClick={handleDecrease}
                  className="font-bold cursor-pointer"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={handleIncrease}
                  className="font-bold cursor-pointer"
                >
                  +
                </button>
              </div>
              <div className="rounded-sm border px-6 py-3">
                Total = {quantity * product.price}
              </div>
            </div>
            <button className="btn my-12 w-full">ADD TO CART</button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
