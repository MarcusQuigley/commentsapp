import React from 'react';
//import ReactDOM from 'react-dom';
import CommentBox from './CommentBox'; 
import CommentList from './CommentList';

class App extends React.Component{

    render= ()=>{
        return(
            <div className="app">
                App class!
               <div>
                   <CommentBox/>
                </div>
                <div><CommentList/></div>
            </div>
        );
    }
}


export default App;