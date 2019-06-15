import React from 'react';


class CommentList extends React.Component{

    render = ()=>{
        return (
            <div className="comment-slist" >{/*style={{backgroundColor: firebrick}} */}
                
                <span>comment 1</span>
                <span>comment 2</span>
                <span>comment 3</span>
            </div>
        );
    }
}

export default CommentList;