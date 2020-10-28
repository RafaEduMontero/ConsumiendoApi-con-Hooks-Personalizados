import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Book from '../components/book';
import MyHeader from '../components/my_header';
import Welcome from '../components/welcome';
import Detail from '../pages/detail/detail';

const Routes = () => {
 return (
   <div>
        <Router>
            <div className="container">
                <h1 align="center">Consumiendo Datos desde una API</h1>
                <MyHeader/>
                <Route exact path="/"><Welcome/></Route>
                <Route exact path="/books" component={Book} />
                <Route path="/books/detail/:id" component={Detail}/>
            </div>
        </Router>
   </div>
 )
}

export default Routes;

