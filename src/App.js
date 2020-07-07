import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Print from './components/watchList/Print'
import NotFound from './components/pages/NotFound'
import Anime from './components/animes/Anime'
import KitsuState from './context/kitsu/KitsuState'
import WatchListState from './context/watchList/WatchListState'
import './App.css'

function App() {
  return (
    <KitsuState>
      <WatchListState>
        <Router>
          <Navbar/>
          <div className="App" >
            <Switch>
              <Route exact path='/'  component={Home} />
              <Route exact path='/anime/:id' component={Anime}/>
              <Route exact path='/print' component={Print}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
      </WatchListState>
    </KitsuState>
    
  );
}

export default App;
