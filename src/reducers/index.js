import * as types from '../actions/ActionTypes'
import {Map} from 'immutable'

const initialState = Map({
    menuList: Map({

    })
})

function order(state = initialState,action) {
    //const idx = action.id;
    //const Template = Map( [[idx , Map({count:0})]] );
    
    switch(action.type) {
        case types.INCREMENT:
            return state.setIn(['menuList',action.id,'count'], parseInt(state.getIn(['menuList',action.id,'count'])) + 1);
        case types.DECREMENT:
            return state.setIn(['menuList',action.id,'count'], parseInt(state.getIn(['menuList',action.id,'count'])) + 1);
        case types.CREATE:
            return state.setIn(['menuList',action.id],Map({count:0}));
        case types.DELETE:
            return state.delete(action.id);
        case types.ORDER_MENU:
            return console.log('order menu!');
        default:
            return state;
    }
}

export default order