import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, remove}) => {

    if (!posts.length){
        return (
            <h3 style={{textAlign: "center"}}>Not posts</h3>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                List posts
            </h1>
            {posts.map((post,index) =>
                <PostItem delete={remove} namber={index + 1} value={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;