import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header'
import Footer from './components/footer'
import About from './components/about'
import Contact from './components/contact'
import Gallery from './components/gallery'
import Services from './components/services'
import single from './components/single'
import './App.css';

const App = () => {
  return (
    <div>
    <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/services' component={Services} />
          <Route path='/single' component={single} />
          <Redirect to='/' />
        </Switch>
        <Footer />
    </Router>
       
    </div>
  )
}

export default App;
