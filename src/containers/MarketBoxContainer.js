import MarketBox from '../components/MarketBox'
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
    menuList : state.get('menuList')
})

const MarketBoxtContainer = connect(
    mapStateToProps
)(MarketBox);

export default MarketBoxtContainer;
