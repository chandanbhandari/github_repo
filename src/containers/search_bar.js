import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setSearchKeyword} from "../actions/index";
import {fetchUsers} from "../actions";

class SearchBar extends Component {

    render(){

        return (
            <div className="search-bar">
                <input
                    placeholder="search user"
                    onChange = {event => this.handleOnChange(event)}/>
            </div>
        )
    }

    handleOnChange(event) {
        this.props.setSearchKeyword(event.target.value);
        this.props.fetchUsers(event.target.value,1);
    }
}

function mapStateToProps(state) {
    return({searchKeyword : state.searchKeyword})
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setSearchKeyword, fetchUsers},dispatch)

}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);