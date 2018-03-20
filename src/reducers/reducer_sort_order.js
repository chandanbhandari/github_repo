import {SET_SORT_ORDER} from '../actions/index'

export default function (state = "1" , action) {

    switch(action.type){
        case SET_SORT_ORDER:
            return action.payload
    }
    return state;
}