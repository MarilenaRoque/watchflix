import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import MovieList from '../containers/MovieList'
import MoviePage from '../containers/MoviePage'
import Navbar from './Navbar'
import React from 'react'

const Routes = () => {
    return (
        <div>
            <Router>
            <Navbar />
                <div data-testid="page-content">
                    <Switch>
                        <Route exact path="/">
                            <MovieList />
                        </Route>
                        <Route exact path="/movie/:id">
                            <MoviePage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Routes
