import React from 'react';
import './custom-button.styles.scss';


const CustomButton = ({children, ...otherCollectionProps}) => (
        <button className='custom-button' {...otherCollectionProps}>
         {children}
        </button>
)

export default CustomButton;
