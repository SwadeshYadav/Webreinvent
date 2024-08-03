import React from 'react';
import { useSelector } from 'react-redux';

const ItemDetails = () => {
  const itemDetails = useSelector(state => state.item.itemDetails);

  return (
    <div>
      <h2>Item Details</h2>
      <p>ID: {itemDetails.id}</p> 
      <p>Name: {itemDetails.name}</p>
    </div>
  );
};

export default ItemDetails;
