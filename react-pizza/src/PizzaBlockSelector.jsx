import React from 'react';

const PizzaBlockSelector = () => {
  return (
    <div class="pizza-block__selector">
      <ul>
        <li class="active">slim</li>
        <li>tradition</li>
      </ul>
      <ul>
        <li class="active">26sm.</li>
        <li>30sm.</li>
        <li>40sm.</li>
      </ul>
    </div>
  )
}

export default PizzaBlockSelector;