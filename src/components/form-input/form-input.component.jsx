import React from 'react';
import './form-input.styles.scss';


const FormInput = ({ handleChange, label, ...otherCollectionProps}) => (
    <div className='group'>

        <input className='form-input' onChange={handleChange} {...otherCollectionProps} />
        {
            label?
            (
                <label className={`${otherCollectionProps.value.length?'shrink':''} form-input-label`} >
                    {label}
                </label> 
            )
            
            :null
        }
    </div>

)

export default FormInput;