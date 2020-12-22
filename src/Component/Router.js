import { Link, browserHistory, IndexRoute, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Main/Home'
import Search from './Main/Search'

function Routers() {
    return (
        <Router browserHistory>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/Search' component={Search}/>
            </Switch>
        </Router>
    )
}

export default Routers;