import React from 'react';
//react-router
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
//components
import Book from '../components/book';
import AddUser from '../components/forms/user/add_user';
import Users from '../components/forms/user/users';
import MyHeader from '../components/my_header';
import Welcome from '../components/welcome';
//pages
import Detail from '../pages/detail/detail';

const Routes = () => {
 return (
   <div>
        <Router>
            <div className="container">
                <h1 align="center">Consumiendo Datos desde una API</h1>
                <MyHeader/>
                <Route exact path="/">

                <Users/>

                </Route>
                <Route exact path="/books" component={Book} />
                <Route path="/books/detail/:id" component={Detail}/>
            </div>
        </Router>
   </div>
 )
}

export default Routes;

