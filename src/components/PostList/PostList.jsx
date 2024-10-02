import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../slices/postListSlice";
import PostListItem from "./PostListItem";

function PostList() {
    const dispatch = useDispatch();
  const postList = useSelector((state) => state.postList);
    const mode = "new";
    const subreddit = "Home";

    useEffect(() => {
      dispatch(getPosts({ mode: mode, subreddit: subreddit }));
    }, [dispatch]);


    return (<div>
      {
        postList.posts.children?.map(post => 
          <PostListItem title={post.data.title} />
        
        )
      }
    </div>);
  
}

export default PostList;
