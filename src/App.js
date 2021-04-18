import React from "react";
import './App.css';
import DiagramPage from "./components/DiagramPage";
import ConvertPage from "./components/ConvertPage";
import NewsPage from "./components/NewsPage";
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Route exact path="/" component={ConvertPage}/>
    <Route exact path="/diagram" component={DiagramPage}/>
    <Route exact path="/news" component={NewsPage}/>
    </div>
  );
}

export default App;
