import React, { Component } from 'react';
import MenuListContainer from './MenuListContainer'
import MarketBox from './MarketBoxContainer'
import StoreBox from './StoreBoxContainer'
import '../components/Menu.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Home() {
    return (
      <div>
        <h2 style={{textAlign:'center'}}>Home</h2>
      </div>
    );
  }
  

function toVisitor() {
    return (
        <div className="App">
            <div className="MenuFrame">
                <h3>메뉴판</h3>
                <MenuListContainer />
            </div>
            <div className="MenuFrame">
                <h3>장바구니</h3>
                <MarketBox />
            </div>
        </div>
    )
}
function toMaster() {
    return (
        <div className="App">
            <StoreBox />
        </div>
    )
}


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Visitor">Visitor</Link>
                        </li>
                        <li>
                            <Link to="/Master">Master</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route path="/Visitor" component={toVisitor} />
                    <Route path="/Master" component={toMaster} />                    
                </div>
            </Router>
        )
    }
}


export default App;
