import React, {useState} from 'react';
import Header from './components/Layout/Header';
import Books from './components/Books/Books';
import CartProvider from './store/cartProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (event) => {
    setCartIsShown(true);
  };

  const hideCartHandler = (event) =>
  {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Books />
      </main>
      </CartProvider>
  );
}

export default App;
