import '../stylesheets/App.scss';
import React from 'react';
import Right from './Right';
import Left from './Left';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="header__title">3.4 Cosas distribuidas</h1>
        </header>
        <main className="container">
          <Left>
            {/* todo este JSX dentro del componente Left es un CHILDREN de manera automática (lo podemos ver en los Components de Chrome) */}
            <article>
            <h2>A la izquierda</h2>
              <p>
                Nemo dolorem doloremque eligendi neque voluptatum. Illo sed quia ea numquam. Quibusdam molestiae quis
                atque nihil. Nisi recusandae laudantium laborum. Tenetur ducimus rem. Consequatur eos nisi incidunt
                distinctio fugiat voluptas praesentium dolores ab.
              </p>
            </article>
          </Left>
          <Right>
            <article>
            <h2>A la derecha</h2>
              <p>
                Nemo dolorem doloremque eligendi neque voluptatum. Illo sed quia ea numquam. Quibusdam molestiae quis
                atque nihil. Nisi recusandae laudantium laborum. Tenetur ducimus rem. Consequatur eos nisi incidunt
                distinctio fugiat voluptas praesentium dolores ab.
              </p>
            </article>
          </Right>
        </main>
      </div>
    );
  }
}

export default App;
