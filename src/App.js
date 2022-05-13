import React, {useState} from 'react';
import Cart from './components/Cart/Cart';
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
function App() {
  const[cartIsShown, setCartIsShown] = useState(false);

  const showCardHandler = (event) => {
    setCartIsShown(true);
  };

  const hideCardHandler = () => {
    setCartIsShown(false);
  };

  
  return (
  <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCardHandler}/>}
      <Header onShowCart={showCardHandler} />
      <main>
        <Meals />
        
      </main>
      </CartProvider>

  );
}

export default App;
