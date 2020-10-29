import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const Card = ({book,acortarTexto,i}) => {
    const {id,title} = book;
    return (
        <Fragment>
            <div key={i} className='col-md-6 p-4'>
                <div className='card border border-success'>
                    <div className='card-body'>
                        <h4 key={i}>Id: {id}</h4>
                        <h1 key={i} className='card-title'>{acortarTexto(title,20)}</h1>
                        <Link className="btn btn-success" to={`/books/detail/${id}`}>Ver más...</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Card;
