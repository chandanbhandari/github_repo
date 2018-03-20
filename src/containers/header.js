import React, {Component} from "react";
import SearchBar from "./search_bar";
import SortOrder from "./list_sort";

class Header extends Component {
    render() {
        return (
            <div className="container"
                 style={{
                     "background": "#106ec1" ,
                     "padding": "15px",
                     "margin-top": "10px"
                 }}
            >
                <SortOrder />
                <SearchBar />
            </div>
        )
    }
}

export default Header;