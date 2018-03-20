import React, {Component} from "react";
import {connect} from "react-redux";
import {Grid, Pagination} from "semantic-ui-react";
import {fetchUsers} from "../actions";
import UserListItem from "../components/user_item";


class UserList extends Component {

    handlePaginationChange = (e, { activePage }) =>
        this.props.fetchUsers(this.props.searchKeyword,activePage);

    render(){

        if(this.props.userList.users.length == 0)
            return(
                <div>
                    Please search user
                </div>
            )

        return (
            <Grid columns={1}>

                <Grid.Column>
                    {this.renderUsers(this.props.userList.users)}
                </Grid.Column>

                <Grid.Column >
                    <Pagination
                        activePage={1}
                        onPageChange={this.handlePaginationChange}
                        size='mini'
                        totalPages={Math.ceil(this.props.userList.count/10)}
                        boundaryRange = {1}
                        siblingRange= {1}
                        showEllipsis= {true}
                        showFirstAndLastNav= {true}
                        showPreviousAndNextNav= {true}
                    />
                </Grid.Column>
            </Grid>
        )
    }

    renderUsers(list) {

        let sortedList=[]

        switch (this.props.sortType){
            case "1" :
                sortedList = list.sort((a,b)=> {a.login - b.login});
                break;
            case "2" :
                sortedList = list.sort((a,b)=> {a.login - b.login}).reverse();
                break;
            case "3" :
                sortedList = list.sort((a,b)=> {a.score - b.score}).reverse();
                break;
            case "4" :
                sortedList = list.sort((a,b)=> {a.score - b.score}).reverse();
                break;
        }

        return sortedList.map(user => <UserListItem  key={user.login} user={user}/>)
    }
}

function mapStateToProps(state) {
    return(
        {
            userList : state.userList,
            searchKeyword : state.searchKeyword,
            sortType : state.sortType
        }
    )
}


export default connect(mapStateToProps,{fetchUsers})(UserList);