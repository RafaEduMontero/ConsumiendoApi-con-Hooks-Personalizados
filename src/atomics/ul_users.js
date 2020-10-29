import React, {Fragment} from 'react';
import Types from 'prop-types'

const UlUsers = ({
        data
    }) => {
        return (<Fragment> 
                    <ul> {data.map((item, i) => {
                            return ( <li key = {i} > {item.title} </li> ) })} 
                    </ul> 
                </Fragment> ) }; 

UlUsers.propTypes = {
    data: Types.string.isRequired
}
export default UlUsers; 