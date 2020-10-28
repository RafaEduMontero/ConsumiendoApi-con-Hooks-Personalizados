import React,{useState,Fragment} from 'react';
import {Link} from 'react-router-dom'
import ReactPaginate from 'react-paginate';

const CardField = ({books}) => {

    const acortarTexto = (text, limit) => {
        const total = text.length;
        if (total <= limit) {
            return text;
        } else {
            return `${text.substring(0, limit)}...`;
        }
      };

    const [currentPage,setCurrentPage] = useState(0);

    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;
    const currenPageBooks = books.slice(offset, offset + PER_PAGE).map((book,i) =>{
        console.log(book)
        const {id,title} = book;
        return(
            <div key={i} className='col-md-6 p-4'>
                <div className='card border border-success'>
                    <div className='card-body'>
                        <h4 key={i}>Id: {id}</h4>
                        <h1 key={i} className='card-title'>{acortarTexto(title,20)}</h1>
                        <Link className="btn btn-success" to={`/books/detail/${id}`}>Ver más...</Link>
                    </div>
                </div>
            </div>
        )
    })


    const pageCount = Math.ceil(books.length / PER_PAGE);


    const handlePageClick = ({selected}) =>{
        setCurrentPage(selected)
    }

 return (
     <Fragment>
         <div className="row">
            {currenPageBooks}
         </div>
         <nav>
            <ReactPaginate
                previousLabel={"<- Previous"}
                nextLabel={"Next ->"}
                breakLabel={"..."}
                breakClassName={"page-link"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                pageLinkClassName={"page-link"}
                containerClassName={"pagination"}
                previousClassName={"page-link"}
                disabledClassName={"page-item disabled"}
                activeClassName={"page-item active"}
            />
        </nav>
     </Fragment>
 )
}

export default CardField;