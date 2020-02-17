import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Heroes from './pages/heroes/Heroes';
import Hero from './pages/hero/Hero';
import Series from './pages/series/SeriesContainer';
import ComicWrapper from './pages/comics/ComicWrapper';

const App = () => (
  <div>
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Super Heroes
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/hero/:id">
          <Hero />
        </Route>
        <Route path="/series/:id">
          <Series />
        </Route>
        <Route path="/comics/:id">
          <ComicWrapper />
        </Route>
        <Route path="/">
          <Heroes />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
