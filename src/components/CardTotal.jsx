import ProductCard from "./ProductCard";

const CardTotal = ({ productById, onChangeProduct, onProductRemove }) => {
  const subtotal = Object.values(productById).reduce((acc, item) => {
    return acc + item.amount * item.price * item.dampingRate;
  }, 0);
  const shipping = 25;
  return (
    <div className="card-total">
      <div className="card-container">
        {Object.values(productById).map((item) => {
          return (
            <ProductCard
              key={item.id}
              product={item}
              onChangeProduct={onChangeProduct}
              onProductRemove={onProductRemove}
            />
          );
        })}
      </div>
      <div className="total-container">
        <div className="total">
          <p>Subtotal</p>
          <div>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
        <div className="total">
          <p>Tax(%18)</p>
          <div>
            <span>${(subtotal * 0.18).toFixed(2)}</span>
          </div>
        </div>
        <div className="total">
          <p>Shipping</p>
          <div>
            <span>${subtotal > 0 ? shipping : 0}</span>
          </div>
        </div>
        <div className="total">
          <p>Total </p>
          <div>
            <span>
              $
              {(subtotal > 0
                ? subtotal + subtotal * 0.18 + shipping
                : 0
              ).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTotal;
