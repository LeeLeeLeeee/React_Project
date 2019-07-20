import MarketBox from '../components/MarketBox'
import { connect } from 'react-redux';
import * as actions from '../modules';

const mapStateToProps = (state) => ({
    menuList : state.get('menuList'),
    StoreList : state.get('MenuStore')
})

let mapDispatchToProps = (dispatch) => {
    return {
    onIncrement:(idx) => dispatch(actions.increment(idx)),
    onDecrement:(idx) => dispatch(actions.decrement(idx)),
    onDelete:(idx)=> dispatch(actions.deletes(idx)),
    onOrder:(idx) => dispatch(actions.orderMenu(idx))
    }
}

const MarketBoxtContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MarketBox);

export default MarketBoxtContainer;
