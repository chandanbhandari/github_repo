import React, {Component} from "react";
import {connect} from "react-redux";
import {setSortOrder} from "../actions/index";

class SortOrder extends Component {

    onInputChange(value){
        this.props.setSortOrder(value)
    }

    render(){

        return (
            <div>
                <select
                    value={this.props.sortType}
                    onChange={event => this.onInputChange(event.target.value)}
                >
                    <option value="1">Name (a-z)</option>
                    <option value="2">Name (z-a)</option>
                    <option value="3">Rank increasing</option>
                    <option value="4">Rank decreasing</option>
                </select>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({sortType :state.sortType})
}

export default connect(mapStateToProps,{setSortOrder})(SortOrder);