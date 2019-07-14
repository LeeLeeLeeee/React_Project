import MenuList from '../components/MenuList';
import { connect } from 'react-redux';
import * as actions from '../modules';

const mapStateToProps = (state) => ({
    menuList : state.get('menuList'),
    StoreList : state.get('MenuStore')
})

const mapDispatchToProps = (dispatch) => ({
    onCreate:(idx) => dispatch(actions.create(idx))
    
})

const MenuListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuList);

export default MenuListContainer;
