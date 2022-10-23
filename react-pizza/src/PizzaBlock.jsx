import React from 'react';
import PizzaBlockSelector from './PizzaBlockSelector';
import { PlusSvg } from './svg_component';
import Button from './Button';

const PizzaBlock = (props) => {
  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="Pizza"
      />

      <h4 className="pizza-block__title">{props.title}</h4>
      <PizzaBlockSelector />

      <div className="pizza-block__bottom">
        <div className="pizza-block__price">from {props.price}</div>

        <Button onClick={()=> alert('333')} add outline>
          <PlusSvg />
          <span>Add</span>
          <i>2</i>
       </Button>

      </div>
    </div>
  )
}

export default PizzaBlock;