export interface Dish {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface DishMutation {
  name: string;
  description: string;
  image: string;
  price: string;
  type: string;
}

export interface CartDish {
  dish: Dish;
  amount: number;
}