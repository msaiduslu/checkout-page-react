import { AiFillMinusSquare } from "react-icons/ai";
import { AiFillPlusSquare } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

const ProductCard = ({
  product: { id, name, image, price, dampingRate, amount },
  onChangeProduct,
  onProductRemove,
}) => {
  return (
    <div className="product-container">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="product-info">
        <h4>{name}</h4>
        <p>
          ${(price * dampingRate).toFixed(2)} <span>${price}</span>
        </p>
        <div className="counter">
          <div
            className="minus"
            onClick={() =>
              onChangeProduct(id, { amount: amount > 0 ? amount - 1 : amount })
            }
          >
            <AiFillMinusSquare />
          </div>
          <div className="amount">{amount}</div>
          <div
            className="plus"
            onClick={() => onChangeProduct(id, { amount: amount + 1 })}
          >
            <AiFillPlusSquare />
          </div>
        </div>

        <button onClick={() => onProductRemove(id)}>
          <span>
            <BsTrash />
          </span>
          Remove
        </button>
        <h5>Product Total:${(amount * price * dampingRate).toFixed(2)}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
