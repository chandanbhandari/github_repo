import React from "react";

const RepoDetailItem = (props) =>{

    return (

        <div>
            <text> {props.name} </text>
            <text> {props.language} </text>
        </div>
    )
};

export default RepoDetailItem;