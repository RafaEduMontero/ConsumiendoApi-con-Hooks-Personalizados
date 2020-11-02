import React,{useState,Fragment} from 'react';
//react-paginate
import ReactPaginate from 'react-paginate';
//atomics
import Card from './card';

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
        
        return(
            <Card book={book} acortarTexto={acortarTexto} i={i}/>
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