import React from 'react';
//import ReactDOM from 'react-dom';
import CommentBox from 'components/CommentBox'; 
import CommentList from 'components/CommentList';

class App extends React.Component{

    render= ()=>{
        return(
               <div>
                   <CommentBox/>
                 <CommentList/> 
            </div>
        );
    }
}


export default App;