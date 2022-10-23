import React from 'react';
import classNames from 'classnames';

const Button = (props) => {
  return (
    <div 
      onClick={props.onClick}
      className={classNames('button', props.className,
        {'button--outline': props.outline}, 
        {'button--add': props.add},
        {'button-cart': props.cart}
    )}>

      {props.children}     
    </div>
  )
}

export default Button;