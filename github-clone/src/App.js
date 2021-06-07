import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home'; 
import Repo from './components/Repo'; 
import './App.css';
import 'h8k-components';

//const title = "GIT Clone";
function App() {
    return (
        <Router>
            <div>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/profile' component={Profile}/>
                        <Route exact path='/repo' component={Repo}/>
                    </Switch>
                </div>
            </div>
        </Router>    
            
    );
}

export default App;
