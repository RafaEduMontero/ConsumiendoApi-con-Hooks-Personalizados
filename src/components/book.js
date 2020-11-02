import React,{Fragment,useEffect,useState} from 'react';
//atomics
import CardField from '../atomics/card_field';
//paths
import Books from '../paths/books';
//hooks
import useFetch from '../hooks/use_fetch'

const Book = () => {

const [results,validate] = useFetch(Books.getBooks)

 return (
   <div>
        {validate?(<CardField books={results}/>):(<h3>loading...</h3>)}
   </div>
    )
}

export default Book;