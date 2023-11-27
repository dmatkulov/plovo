import React, {useCallback, useState} from 'react';
import {Customer} from '../../types';

const Order = () => {
  const [customer, setCustomer] = useState<Customer>(
    {
      name: '',
      address: '',
      phone: ''
    });

  const customerChanged = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setCustomer(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }, [])


  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(customer);
  };

  return (
    <div className="row mt-2">
      <div className="col">
        <form onSubmit={onFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Client name</label>
            <input
              id="name" type="text" name="name" required
              className="form-control"
              value={customer.name}
              onChange={customerChanged}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              id="address" type="text" name="address" required
              className="form-control"
              value={customer.address}
              onChange={customerChanged}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone" type="text" name="phone" required
              className="form-control"
              value={customer.phone}
              onChange={customerChanged}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Place order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;