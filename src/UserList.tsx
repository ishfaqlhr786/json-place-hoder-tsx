import React, {Fragment } from 'react';
import { TUserList } from './Users';

interface UserListProps {
    items: TUserList // don't have to redeclare the object again
};

const UserList: React.FC<UserListProps> = (props) => {
    return (
        <Fragment>
            <ul>
            {props.items.map(user => (
                <li key={user.id}>
                    <span>{user.title}  <h2>body:{user.body}</h2></span>
                    {/* not call delete function, just point to it
                    // set this to null in bind() */}
                </li>
            ))}
            </ul>
        </Fragment>
    );
};

export default UserList;