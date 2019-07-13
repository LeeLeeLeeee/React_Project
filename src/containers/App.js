import React, {Component} from 'react';
import MenuListContainer from './MenuListContainer'
import MarketBox from './MarketBoxContainer'

import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
    render() {
        return(
            <div className="App">
                <MenuListContainer/>
                <MarketBox />
            </div>
        )
    }
}

export default App;
