import MenuList from '../components/MenuList'
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
    menuList : state.get('menuList')
})

const mapDispatchToProps = (dispatch) => ({
    onCreate:(idx) => dispatch(actions.create(idx))
})

const MenuListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuList);

export default MenuListContainer;
