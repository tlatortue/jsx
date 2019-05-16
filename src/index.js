import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="Nice blog post" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <CommentDetail author="Alex" timeAgo="Today at 2:00AM" content="Blah blah" avatar={faker.image.avatar()}/>
            <CommentDetail author="Jane" timeAgo="Yesterday at 6:15PM" content="foo" avatar={faker.image.avatar()}/>
        </div>
    );
}
//https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);