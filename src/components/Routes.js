import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import MovieList from '../containers/MovieList'
import MoviePage from './MoviePage'

import React from 'react'

const Routes = () => {
    return (
        <div>
            <Router>
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
                <Link to={`/movie/${2}`}>Go</Link>
            </Router>
        </div>
    )
}

export default Routes
