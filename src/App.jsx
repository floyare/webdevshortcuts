import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Home';
import Category from './Components/Category';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category/:name">
            <Category></Category>
          </Route>
          <Route path="*">
              <NotFound />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
