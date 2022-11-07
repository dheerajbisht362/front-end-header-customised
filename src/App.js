import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
