import React from 'react';
import PlusSvg from './svg_component/PlusSvg';

const ButtonAdd = () => {
  return (
    <div class="button button--outline button--add">

      <PlusSvg />
      
      <span>Add</span>
      <i>2</i>
    </div>
  )
}

export default ButtonAdd;