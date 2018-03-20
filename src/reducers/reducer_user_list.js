import {FETCH_USER_LIST} from '../actions/index'

const INITIAL_STATE = {count :0 ,users :[]};

export default function (state = INITIAL_STATE , action) {

    switch(action.type){
        case FETCH_USER_LIST:
            return {
                users: action.payload.data.items,
                count: action.payload.data["total_count"]
            }
    }
    return state;
}