import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<Header/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
