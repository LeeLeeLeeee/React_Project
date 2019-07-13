import MarketBox from '../components/MarketBox'
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
    menuList : state.get('menuList')
})

let mapDispatchToProps = (dispatch) => {
    return {
    onIncrement:(idx) => dispatch(actions.increment(idx)),
    onDecrement:(idx) => dispatch(actions.decrement(idx)),
    onDelete:(idx)=> dispatch(actions.deletes(idx))
    }
}

const MarketBoxtContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MarketBox);

export default MarketBoxtContainer;
