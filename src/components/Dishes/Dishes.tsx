import React, {useEffect} from 'react';
import DishItem from './DishItem';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDeleteDishLoading, selectDishes, selectFetchDishLoading} from '../../store/dishes/dishesSlice';
import Spinner from '../Spinner/Spinner';
import {deleteDish, fetchDishes} from '../../store/dishes/dishesThunks';

const Dishes: React.FC = () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const deleteLoading = useAppSelector(selectDeleteDishLoading);
  const dishesLoading = useAppSelector(selectFetchDishLoading);
  
  useEffect(() => {
    void dispatch(fetchDishes());
  }, [dispatch]);
  
  const removeDish = async (id: string) => {
    await dispatch(deleteDish(id));
    await dispatch(fetchDishes());
  };
  
  return (
    <>
      <h4>Dishes</h4>
      {dishesLoading ? <Spinner/> : dishes.map((dish) => (
          <DishItem
            key={dish.id}
            dish={dish}
            deleteLoading={deleteLoading}
            onDelete={() => removeDish(dish.id)}
          />
      ))}
    </>
  );
};

export default Dishes;