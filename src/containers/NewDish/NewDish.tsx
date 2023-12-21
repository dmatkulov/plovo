import React from 'react';
import DishForm from '../../components/DishForm/DishForm';
import {ApiDish} from '../../types';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectCreateLoading} from '../../store/dishes/dishesSlice';
import {createDish, fetchDishes} from '../../store/dishes/dishesThunks';

const NewDish: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const createLoading = useAppSelector(selectCreateLoading);
  
  const onSubmit = async (dish: ApiDish) => {
    await dispatch(createDish(dish));
    await dispatch(fetchDishes());
    navigate('/');
  };
  
  return (
    <div className="row mt-2">
      <div className="col">
        <DishForm onSubmit={onSubmit} isLoading={createLoading}/>
      </div>
    </div>
  );
};

export default NewDish;