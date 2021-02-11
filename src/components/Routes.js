import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import React from 'react';
import MovieList from '../containers/MovieList';
import MoviePage from '../containers/MoviePage';
import Navbar from './Navbar';
import Footer from './Footer';
import Styles from '../assets/stylesheets/Routes.module.css';

const Routes = () => (
  <div className={Styles.routeBody}>
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
    <Footer />
  </div>
);

export default Routes;
