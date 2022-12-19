function Card({ props, Addtocart, cart }) {
  return (
    <div className="col-3 main">
      <div className="img-div">
        <img className="pic" src={props.img} alt="pic"></img>
      </div>
      <div className="content-div">
        <h5 className="name">{props.name}</h5>
        <p className="price">{props.price} </p>
        <button
          disabled={cart.some((item) => item.id === props.id)}
          onClick={() => Addtocart(props)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
