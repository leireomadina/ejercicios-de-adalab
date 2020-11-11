import React from "react";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stylingSize: "buyPanel__size",
      stylingAmount: "buyPanel__amount",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(ev) {
    const shoppingButton = ev.currentTarget;
    // console.log("Me han clickado", ev);
    this.setState((prevState, props) => {
      let newStyling;
      if (prevState.stylingSize === "buyPanel__size") {
        newStyling = "";
      } else {
        newStyling = "buyPanel__size";
      }
      return { stylingSize: newStyling };
    });
  }

  handleChange(ev) {
    const selectSize = ev.currentTarget.value;
    // console.log("Me han seleccionado", ev);
    this.setState((prevState, props) => {
      let newStyling;
      if (prevState.stylingAmount === "buyPanel__amount") {
        newStyling = "";
      } else {
        newStyling = "buyPanel__amount";
      }
      return { stylingAmount: newStyling };
    });
  }

  render() {
    return (
      <article className="shelves__article">
        <div className="shelves__article--imgContainer">
          <img className="shelves__article--img" src={this.props.src} alt="Imagen del producto" />
        </div>
        <h3 className="shelves__article--title">{this.props.title}</h3>
        <div className="shelves__article--buyPanel">
          <div className={this.state.stylingSize}>
            <h4 className="buyPanel__section--title">Talla:</h4>
            <select name="" id="" className="buyPanel__size--select" onChange={this.handleChange}>
              <option value="" disabled selected>
                Escoge:
              </option>
              <option value="XL">XL</option>
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="S">S</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className={this.state.stylingAmount}>
            <h4 className="buyPanel__section--title">Cantidad:</h4>
            <button className="buyPanel__amount--add">+</button>
            <input type="text" name="" id="" className="buyPanel__amount--number" value="2" />
            <button className="buyPanel__amount--sub">-</button>
          </div>
          <div className="buyPanel__price">
            <h4 className="buyPanel__section--title">{this.props.price}:</h4>
            <span className="buyPanel__price--number">39</span>€
          </div>
          <button className="buyPanel__buy" onClick={this.handleClick}>
            Comprar
          </button>
        </div>
      </article>
    );
  }
}

export default ProductList;
