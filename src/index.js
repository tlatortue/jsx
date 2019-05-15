import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
        </div>
    );
}
//https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);