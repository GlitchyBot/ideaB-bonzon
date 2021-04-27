import { render } from "@testing-library/react";
import React, { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  
  const [count, setCount, maxCount] = useState(1);

  
  const itemIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  
  const itemDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  render() 
  return (
    
      <div>
        <h5>Producto {count}</h5> 
        <button onClick={itemDecrement}>-</button>        
        <button onClick={itemIncrement}>+</button>
      </div>
      
    
  );
}

export default ItemCount;