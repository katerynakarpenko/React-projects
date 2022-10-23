import React from 'react';

const PizzaBlockSelector = () => {
  return (
    <div className="pizza-block__selector">
      <ul>
        <li className="active">slim</li>
        <li>tradition</li>
      </ul>
      <ul>
        <li className="active">26sm.</li>
        <li>30sm.</li>
        <li>40sm.</li>
      </ul>
    </div>
  )
}

export default PizzaBlockSelector;