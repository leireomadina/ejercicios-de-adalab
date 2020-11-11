import React from "react";
import "./App.scss";
import Cart from "./Cart";
import Header from "./Header";
import ProductList from "./ProductList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header number="2.6" lesson="Estado" title="Zaralab" />
        <main className="container">
          <h2>Zaralab</h2>
          <div class="store">
            <ProductList />
            <Cart />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
