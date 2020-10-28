import React,{Fragment} from 'react';

const DetailField = ({book}) => {
 console.log(book)
 const {id,title,body} = book
 
 return (
   <Fragment>
       <h4>ID: {id}</h4>
       <h1>Title: {title}</h1>
       <p>Description: {body}</p>
   </Fragment>
 )
}

export default DetailField;