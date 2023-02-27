import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const AddProduct = ({ onAddProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();
  const [image, setImage] = useState("");

  return (
    <div className="add-product">
      <form
        onSubmit={(e) => {
          // onAddProduct()
          e.preventDefault();
          const newProduct = {
            name: name,
            price: parseInt(price),
            amount: parseInt(amount),
            image: image,
            dampingRate: 0.8,
          };
          onAddProduct(newProduct);
        }}
      >
        <div className="input-container">
          <label htmlFor="">Product Name</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="">Product Price</label>
        </div>
        <div className="input-container">
          <input
            type="number"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="">Product Quantity</label>
        </div>
        <div className="input-container">
          <input
            type="number"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <div>
            <label htmlFor="">Product Image</label>
          </div>
          <div className="addproductImage">
            <label htmlFor="">https://example.com/</label>
            <input
              type="text"
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="add-button">
          <button type="submit">
            <span>
              <FaShoppingCart />
            </span>{" "}
            Add To Cart
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddProduct;
