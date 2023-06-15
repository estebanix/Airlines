import './App.css';
import Tickets from './Big_Files/Tickets';
import Flights from './Big_Files/Flights';
import Home from './Big_Files/Home';
import ContextProvider from './Context/Context';
import ErrorBoundary from "./Error/ErrorBoundary";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <ErrorBoundary fallback={<div>Oops! Something went wrong.</div>}>
              <Route path="/Flights" component={Flights} />
              <Route path="/Tickets" component={Tickets} />
            </ErrorBoundary>
          </Switch>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;

