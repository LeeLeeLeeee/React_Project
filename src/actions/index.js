import * as types from './ActionTypes';

export function create(id) {
    
    return {
        type: types.CREATE,
        id
    };
}

export function deletes(id) {
    return {
        type : types.DELETE,
        id
    };
}

export function increment(id) {
    return {
        type : types.INCREMENT,
        id
    };
}

export function decrement(id) {
    return {
        type : types.DECREMENT,
        id
    };
}

export function orderMenu() {
    return {
        type: types.ORDER_MENU
    };
}