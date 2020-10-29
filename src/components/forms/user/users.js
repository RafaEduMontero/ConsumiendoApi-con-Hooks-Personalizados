import React,{Fragment} from 'react';
//paths
import Albums from '../../../paths/albums';
//components
import UlUsers from '../../../atomics/ul_users';
//hooks
import useFetch from '../../../hooks/use_fetch';



const Users = () => {
 const [results, validate, error ] = useFetch(Albums.getAlbums); 
 return (
   <Fragment>
       {validate?(<UlUsers data={results}/>):(<h3>loading...</h3>)} 
   </Fragment>
 )
}

export default Users;