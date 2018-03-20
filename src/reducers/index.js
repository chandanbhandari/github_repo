import { combineReducers } from 'redux';
import searchKeyword from './reducer_search_keyword'
import userList from './reducer_user_list'
import sortType from './reducer_sort_order'

const rootReducer = combineReducers({
    searchKeyword : searchKeyword,
    userList : userList,
    sortType : sortType
});

export default rootReducer;
