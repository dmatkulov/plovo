import React from 'react';
import Dishes from '../../components/Dishes/Dishes';
import Cart from '../../components/Cart/Cart';
import {CartDish, Dish} from '../../types';
import Spinner from '../../components/Spinner/Spinner';

interface Props {
  dishesLoading: boolean;
  dishes: Dish[];
  addToCart: (dish: Dish) => void;
  cartDishes: CartDish[];
}

const Home: React.FC<Props> = ({dishesLoading, dishes, addToCart, cartDishes}) => {
  return (
    <div className="row mt-2">
      <div className="col-8">
        {dishesLoading ? <Spinner/> : <Dishes dishes={dishes} addToCart={addToCart}/>}
      </div>
      <div className="col-4">
        <Cart cartDishes={cartDishes}/>
      </div>
    </div>
  );
};

export default Home;