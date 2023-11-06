import Toolbar from './components/Toolbar/Toolbar';
import DishForm from './components/DishForm/DishForm';
import Dishes from './components/Dishes/Dishes';
import Cart from './components/Cart/Cart';
import {useState} from 'react';
import {Dish} from './types';

function App() {
  const [dishes, setDishes] = useState<Dish[]>([
    {id: '1', name: 'First Plov', description: 'Tasty plov', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Polu.jpg/274px-Polu.jpg', price: 250 },
    {id: '2', name: 'Second Plov', description: 'Tasty plov', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Samarkand_Zigir-pilaf.jpg/1600px-Samarkand_Zigir-pilaf.jpg?20191002090918.jpg', price: 250 },
    {id: '3', name: 'Third Plov', description: 'Tasty plov', image: '', price: 250 },
  ]);
  
  const addDish = (dish: Dish) => {
    setDishes((prev) => [...prev, dish]);
  };
  
  
  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">
            <DishForm onSubmit={addDish}/>
          </div>
          <div className="col-4">
            <Dishes dishes={dishes}/>
          </div>
          <div className="col-4">
            <Cart/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
