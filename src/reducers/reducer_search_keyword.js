import {SET_KEYWORD} from '../actions/index'

export default function (state = "" , action) {

    switch(action.type){
        case SET_KEYWORD:
            return action.payload
    }
    return state;
}