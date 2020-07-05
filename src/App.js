import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import Anime from './components/animes/Anime'
import KitsuState from './context/kitsu/KitsuState'
import './App.css'

function App() {
  return (
    <KitsuState>
      <Router>
      <Navbar/>
        <div className="App" >
          <Switch>
            <Route exact path='/'  component={Home} />
            <Route exact path='/anime/:id' component={Anime}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>

    </KitsuState>
    
  );
}

export default App;
