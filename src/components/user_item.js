import React, { Component } from "react";
import {Button} from "semantic-ui-react";
import * as axios from "axios";
import RepoDetailItem from "./repo_item";

class UserListItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            showDetails : false ,
            repos : []
        };
    }

    render() {

        return (
            <li
                className="list-group-item"
                style={{
                    "padding": "15px",
                    "marginTop": "10px"
                }}
            >
                <div className="media">
                    <div className="media-left">
                        <img className="media-object"
                             style={{"height" : "100px", "width" : "100px"}}
                             src={this.props.user.avatar_url}
                        />
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{this.props.user.login}</div>
                        <div className="media-description">
                            Profile URL : {this.props.user.url}
                            </div>
                        <Button onClick={e => this.toggleDetails()}>
                            {this.state.showDetails? "Collapse" :"Details" }
                        </Button>
                    </div>
                </div>
                <div>
                    {this.state.repos.map(repo =>
                        <RepoDetailItem
                            key = {repo.name}
                            name={repo.name}
                            language={repo.language}
                        />)}
                </div>
            </li>
        )
    }

    toggleDetails() {
        this.setState({showDetails: !this.state.showDetails});
        if (!this.state.showDetails) {
            let url = `https://api.github.com/users/${this.props.user.login}/repos`;
            axios.get(url).then(result => this.setState({repos: result.data}))
        } else {
            this.setState({repos: []})
        }
    }
}

export default UserListItem;