import React, {Component} from 'react';
import MenuListContainer from './MenuListContainer'
import MarketBox from './MarketBoxContainer'
import '../components/Menu.css'
import { connect } from 'react-redux';
import * as actions from '../actions';



class App extends Component {
 
    render() {
        return(
            <div className="App">
                <div className="MenuFrame">
                    <h3>메뉴판</h3>
                    <MenuListContainer/>
                </div>
                <div className="MenuFrame">
                    <h3>장바구니</h3>
                    <MarketBox />
                </div>
            </div>
        )
    }
}


export default App;
