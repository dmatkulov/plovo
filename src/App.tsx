import Toolbar from './components/Toolbar/Toolbar';
import {useState} from 'react';
import {CartDish, Dish} from './types';
import Home from './containers/Home/Home';
import NewDish from './containers/NewDish/NewDish';
import {Route, Routes} from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Order from "./containers/Order/Order";

function App() {
  
  const [dishes, setDishes] = useState<Dish[]>([
    {id: '1', name: 'Plov', description: 'Very tasty pilaf', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Afghan_Palo.jpg/280px-Afghan_Palo.jpg', price: 250},
    {id: '2', name: 'Another Plov', description: 'Also tasty pilaf', image: 'https://cdn.momsdish.com/wp-content/uploads/2021/06/Uzbek-Plov-Recipe-05-600x900.jpg', price: 350},
  ]);

  const [cartDishes, setCartDishes] = useState<CartDish[]>([]);

  const addDish = (dish: Dish) => {
    setDishes((prev) => [...prev, dish]);
  };

  const addDishToCart = (dish: Dish) => {
    setCartDishes((prevState) => {
      const existingIndex = prevState.findIndex((cartDish) => {
        return cartDish.dish === dish;
      });

      if (existingIndex === -1) {
        const newCartDish: CartDish = {dish, amount: 1};
        return [...prevState, newCartDish];
      } else {
        const itemsCopy = [...prevState];
        const itemCopy = {...itemsCopy[existingIndex]};
        itemCopy.amount++;
        itemsCopy[existingIndex] = itemCopy;
        return itemsCopy;
      }
    });
  };
  

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={(
            <Home
              dishes={dishes}
              addToCart={addDishToCart}
              cartDishes={cartDishes}
            />
          )}/>
          <Route path="/new-dish" element={(
            <NewDish onCreate={addDish}/>
          )}/>
          <Route path="checkout" element={(
            <Checkout cartDishes={cartDishes}/>
          )}>
            <Route path="continue" element={<Order/>}/>
          </Route>
          <Route path="*" element={(<h1>Not found</h1>)}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
