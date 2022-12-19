import "./App.css";
import Products from "./Data";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let AddtoCart = (props) => {
    setCart([...cart, { ...props, quantity: 1 }]);
    setTotal(total + props.price);
  };

  let removeCart = (props) => {
    let idx = cart.findIndex((item) => item.id === props.id);
    cart.splice(idx, 1);
    setCart([...cart]);
    setTotal(total - props.quantity * props.price);
  };

  let Add = (props) => {
    let idx = cart.findIndex((item) => item.id === props.id);
    cart[idx].quantity = cart[idx].quantity + 1;
    setCart([...cart]);
    setTotal(total + props.price);
  };

  let Remove = (props) => {
    let idx = cart.findIndex((item) => item.id === props.id);
    if (props.quantity > 0) {
      cart[idx].quantity = cart[idx].quantity - 1;
      setCart([...cart]);
      setTotal(total - props.price);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <h3 style={{ textAlign: "center" }}>Products</h3>
          <div className="row">
            {Products.map((product) => {
              return (
                <Card cart={cart} props={product} Addtocart={AddtoCart}></Card>
              );
            })}
          </div>
        </div>
        <div className="col-3">
          <h3 style={{ textAlign: "center" }}>Cart</h3>
          <Cart
            cart={cart}
            RemoveCart={removeCart}
            Add={Add}
            Remove={Remove}
          ></Cart>
          <h5>Total- {total}</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
