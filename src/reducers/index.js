import * as types from '../actions/ActionTypes'
import {Map} from 'immutable'

const initialState = Map({
    menuList: Map({

    })
})

function order(state = initialState,action) {
    
    //const Template = Map( [[idx , Map({count:0})]] );
    
    switch(action.type) {
        case types.INCREMENT:
            return state.setIn(['menuList',action.id,'count'], parseInt(state.getIn(['menuList',action.id,'count'])) + 1);
           
        case types.DECREMENT:
            let tempVar = parseInt(state.getIn(['menuList',action.id,'count']))
            if( tempVar  < 2 ) {
                alert('수량은 1개 이상으로 선택해주세요.');
                return state;
            } else {
                return state.setIn(['menuList',action.id,'count'], tempVar - 1);
            }
            
           
        case types.CREATE:
            if( state.hasIn(['menuList',action.id]) ) {
                alert('이미 장바구니에 있는 메뉴입니다');
                return state
            } else {
                return state.setIn(['menuList',action.id],Map({count:1}));
            }
            
        case types.DELETE:
            if(window.confirm('해당 메뉴를 삭제하시겠습니까?')) {
                return state.deleteIn(['menuList',action.id]);
            } else {
                return state;
            }
            
        case types.ORDER_MENU:
                if(window.confirm('장바구니에 있는 메뉴로 주문하시겠습니까?')) {
                    alert('주문이 완료되었습니다');
                    return state.get('menuList').clear();
                } else {
                    return state
                }
            
        default:
            return state;
    }
}

export default order