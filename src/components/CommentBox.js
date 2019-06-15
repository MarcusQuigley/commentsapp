import React from 'react';

class CommentBox extends React.Component{
    render=()=>{
        return(
            <div className="comment-box">
                <span>Enter a Comment</span>
                <div className="comment-input">
                    <input type="text"/>
                </div>
                <button >Submit</button>
            </div>
        );
    }
}

export default CommentBox;