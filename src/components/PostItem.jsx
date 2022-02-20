import React from 'react';
import MyButton from "./UI/button/MyButton";



const PostItem = (props) => {

    return (
        <div id={props.value.id} className="post">
            <div className="post__content">
                <strong>{props.namber}.{props.value.title}</strong>
                <div>
                    {props.value.body}
                </div>
            </div>
            <div className="className">
                <MyButton  onClick={()=>props.delete(props.value)}  >Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;