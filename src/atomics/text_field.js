import React,{Fragment} from 'react';
import Types from 'prop-types'

const TextField = ({
    name,
    value,
    className,
    onChange,
    placeholder
}) => {
    return(
        <Fragment>
            <input 
                type="text"
                name={name}
                value={value}
                className={className}
                onChange={onChange}
                placeholder={placeholder}
            />
        </Fragment>
    )
}

TextField.propTypes = {
    name: Types.string.isRequired,
    value: Types.string.isRequired,
    className: Types.string,
    onChange: Types.func.isRequired,
    placeholder: Types.func.isRequired
}
export default TextField;