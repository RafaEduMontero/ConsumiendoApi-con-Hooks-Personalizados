import React from 'react';
//detail
import DetailField from '../../atomics/detail_field';
//paths
import Books from '../../paths/books';
//react-router
import {useParams} from 'react-router';
//hooks
import useFetch from '../../hooks/use_fetch'

console.log(Books.getBooks)

const Detail = () => {

    const {id} = useParams();
    const [results,validate] = useFetch(Books.getBooks+`/${id}`)

 return (
   <div>
     {validate?(<DetailField book={results}/>):(<h3>loading...</h3>)}       
   </div>
 )
}

export default Detail;