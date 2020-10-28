import React,{useEffect,useState} from 'react';
import DetailField from '../../atomics/detail_field';
import Books from '../../paths/books';

const Detail = props => {

    const [book,setBook] = useState({});
    const {match:{params:{id}}} = props;
    useEffect(() =>{
        fetch(Books.getBooks/`${id}`)
            .then((res) => res.json())
            .then(data =>{
                setBook(data)
            })
    },)

 console.log(book)
 return (
   <div>
     <DetailField book={book}/>       
   </div>
 )
}

export default Detail;