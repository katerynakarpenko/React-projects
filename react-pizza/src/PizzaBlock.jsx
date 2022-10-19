import React from 'react';
import PizzaBlockSelector from './PizzaBlockSelector';
import ButtonAdd from './ButtonAdd';

const PizzaBlock = (props) => {
  return (
    <div class="pizza-block">
      <img
        class="pizza-block__image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="Pizza"
      />

      <h4 class="pizza-block__title">{props.title}</h4>

      <PizzaBlockSelector />

      <div class="pizza-block__bottom">
        <div class="pizza-block__price">from {props.price}</div>

        <ButtonAdd />

      </div>
    </div>
  )
}

export default PizzaBlock;