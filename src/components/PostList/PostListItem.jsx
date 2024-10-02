import React from "react";
import { Link } from "react-router-dom";

function PostListItem({title}) {
    return (
        <div>
            <Link style={{color:"white"}}>{ title }</Link>
        </div>
    );
}

export default PostListItem;
