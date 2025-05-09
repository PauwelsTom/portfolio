import { Component } from 'react';
import './App.css';
import "./Data/color.css"
import "./Data/Images.css"
import { MainPage } from './MainPage/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Calculator } from './PageCalculator/Calculator';
import { ScrollToTop } from './Fonctions/ScrollToTop';
import { Stocks } from './Stocks/Stocks';
import { MilleBornes } from './MilleBornes/MilleBornes';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Projects/Calculator" element={<Calculator />} />
            <Route path="/Projects/Stocks" element={<Stocks />} />
            <Route path="/Projects/1000Bornes" element={<MilleBornes />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
