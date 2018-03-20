import * as axios from "axios";

const BASE_URL ='https://api.github.com/';

export const SET_KEYWORD=1;
export const FETCH_USER_LIST=2;
export const SET_SORT_ORDER=3;


export function setSearchKeyword(keyword) {

    return {
        payload : keyword,
        type : SET_KEYWORD
    }
}

export function fetchUsers(query,pageNumber) {

    const url = `${BASE_URL}search/users?q=${query}&page=${pageNumber}`;
    const request = axios.get(url);

    return {
        payload : request,
        type : FETCH_USER_LIST
    }
}

export function setSortOrder(key) {

    return {
        payload : key,
        type : SET_SORT_ORDER
    }
}
