/*
    React- Redux의 Ducks 디자인 패턴 적용.
    - Redux를 사용할 경우 Reducer와 Action의 파일들을 같이 수정해야주어야 하며 해당 작업은
    코드를 직관적이지 못하게 함.
*/
import {createAction, handleActions} from 'redux-actions'
import {Map, List} from 'immutable'

const initialState = Map({
    menuList: Map({

    }),
    MenuStore: List([
       
    ])
})

// Action Type
const CREATE = 'visitor/CREATE';
const DELETE = 'visitor/DELETE';
const INCREMENT = 'visitor/INCREMENT';
const DECREMENT = 'visitor/DECREMENT';
const ORDER_MENU = 'visitor/ORDER_MENU';

// Action Constructor
// 파라미터가 payload에 들어가기 때문에 나중에 어떤 파라미터가 들어갔는 지 알아볼 수 있게 주석으로 명시해두어야 함.
//인수가 하나일 경우 payload만 써주고 두개일 경우 key값을 붙여줌 Ex ) payload / payload.something
export const create      = createAction(CREATE); // id 
export const deletes     = createAction(DELETE); // id
export const increment   = createAction(INCREMENT); // id
export const decrement   = createAction(DECREMENT);  // id
export const orderMenu   = createAction(ORDER_MENU); // Nothing

export default handleActions({
    [CREATE] : (state,action) => {
        console.log(action.payload);
        if( state.hasIn(['menuList',action.payload]) ) {
            alert('이미 장바구니에 있는 메뉴입니다');
            return state
        } else {
            return state.setIn(['menuList',action.payload],Map({count:1}));
        }
    },

    [DELETE] : (state,action) => {
        if(window.confirm('해당 메뉴를 삭제하시겠습니까?')) {
            return state.deleteIn(['menuList',action.payload]);
        } else {
            return state;
        }
    },
    [INCREMENT] : (state,action) => {
        return state.setIn(['menuList',action.payload,'count'], parseInt(state.getIn(['menuList',action.payload,'count'])) + 1);
    },
    [DECREMENT] : (state,action) => {
        let tempVar = parseInt(state.getIn(['menuList',action.payload,'count']))
        if( tempVar  < 2 ) {
            alert('수량은 1개 이상으로 선택해주세요.');
            return state;
        } else {
            return state.setIn(['menuList',action.payload,'count'], tempVar - 1);
        }
    },
    [ORDER_MENU] : (state,action) => {
        if(window.confirm('장바구니에 있는 메뉴로 주문하시겠습니까?')) {
            alert('주문이 완료되었습니다!');
            state = state.set('MenuStore',state.get('MenuStore').push(state.get('menuList')));
            //state = state.get('menuList').clear();
            return state.set('menuList',Map({}))
        } else {
            return state
        }    
    }
},initialState)