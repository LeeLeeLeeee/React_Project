import StoreBox from '../components/StoreBox';
import { connect } from 'react-redux';
//import * as actions from '../modules';


const mapStateToProps = (state) => ({
    StoreList : state.get('MenuStore')
})

const StoreBoxContainer = connect(
    mapStateToProps
)(StoreBox);

export default StoreBoxContainer;
