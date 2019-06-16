import React from 'react';

class CommentBox extends React.Component{
    state = {comment : ''};

    handleChange = e =>{
        this.setState({comment : e.target.value });
    };

    handleSubmit = e =>{
        e.preventDefault();

        //call action creator and save comment
        this.setState({comment: ''});
    };

    render=()=>{
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Add Comment</h2>
                <textarea value={this.state.comment}
                          onChange={this.handleChange}/>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    }
}

export default CommentBox;