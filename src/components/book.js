import React,{Fragment,useEffect,useState} from 'react';
import CardField from '../atomics/card_field';
import Books from './books';

const Book = () => {

const [books,setBooks] = useState([]);

useEffect(() =>{
    fetch(Books.getBooks)
        .then((res) => res.json())
        .then(data =>{
            setBooks(data)
        })
},[])

 return (
   <div>
        <CardField books={books}/>
   </div>
    )
}

export default Book;