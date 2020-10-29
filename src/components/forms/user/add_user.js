import React,{Fragment} from 'react';
//hooks
import useInput from '../../../hooks/use_input';
//state
import initState from '../../../state_input/add_user';
//components
import TextField from '../../../atomics/text_field';
//fields
import Fields from './fields/add_user.js';


const AddUser = () => {

 const [inputs, setInputs] = useInput(initState);
 
 const {nombre,correo} = inputs
    
 return (
   <Fragment>
        <label>Formulario: {nombre} - {correo}</label>
       <TextField {...Fields.NOMBRE} value={nombre} onChange={setInputs}/>
       <TextField {...Fields.CORREO} value={correo} onChange={setInputs}/>
   </Fragment>
 )
}

export default AddUser;