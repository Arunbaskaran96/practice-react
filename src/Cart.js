export default function Cart({ cart, RemoveCart, Add, Remove }) {
  return (
    <ol class="list-group list-group-numbered">
      {cart.map((item) => {
        return (
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{item.name}</div>
              {item.price}
              <button onClick={() => Add(item)} className="btnn">
                +
              </button>
              {item.quantity}
              <button onClick={() => Remove(item)} className="btnn">
                -
              </button>
            </div>
            <button
              onClick={() => RemoveCart(item)}
              class="badge bg-primary rounded-pill"
            >
              Remove
            </button>
          </li>
        );
      })}
    </ol>
  );
}
