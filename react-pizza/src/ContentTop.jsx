import React from 'react';
import SvgTriangleUp from './svg_component/SvgTriangleUp';


const ContentTop = () => {
  return (
    <div class="content__top">
      <div class="categories">
        <ul>
          <li class="active">All</li>
          <li>With meat</li>
          <li>Vegetarian</li>
          <li>Grill</li>
          <li>Spicy</li>
          <li>Closed</li>
        </ul>
      </div>
      <div class="sort">
        <div class="sort__label">

          <SvgTriangleUp />

          <b>Sorted by:</b>
          <span>popular</span>
        </div>
        <div class="sort__popup">
          <ul>
            <li class="active">popular</li>
            <li>price</li>
            <li>A-Z</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContentTop;