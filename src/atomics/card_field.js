import React from 'react';
import {Link} from 'react-router-dom'

const CardField = ({books}) => {

   const acortarTexto = (text, limit) => {
        const total = text.length;
        if (total <= limit) {
            return text;
        } else {
            return `${text.substring(0, limit)}...`;
        }
      };

 return (
   <div className="row">
        {books.map((book,i) =>{
            const {id,title} = book;
            return(
                <div key={i} className='col-md-6 p-4'>
                    <div className='card border border-success'>
                        <div className='card-body'>
                            <h4>Id: {id}</h4>
                            <h1 className='card-title'>{acortarTexto(title,20)}</h1>
                            <Link className="btn btn-success" to={`/books/detail/${id}`}>Ver más...</Link>
                        </div>
                    </div>
                </div>
            )
        })}
   </div>
 )
}

export default CardField;