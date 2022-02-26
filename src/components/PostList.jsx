import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

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
            <TransitionGroup className="todo-list">
            {posts.map((post,index) =>
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                <PostItem delete={remove} namber={index + 1} value={post} />
                </CSSTransition>
            )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;