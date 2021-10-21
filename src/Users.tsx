import React, {useEffect, useState, Fragment } from 'react';
import UserList from './UserList';
import axios from 'axios';

interface User {
  id: number;
  title: string;
  body:string;
}
interface Country {
  //id: number;
  name: string;
  capital:string;
   flag:string;
}

// you can export the type TUserList to use as -
// props type in your `UserList` component
export type TUserList = User[]

const Users: React.FC = (props) => {
   // you can also use User[] as type argument
   const [users, setUserList] = useState< User[]>([]);
   // const [countries, setUserList] = useState<Country[]>([]); 

    useEffect(() => {
        // Use [] as second argument in useEffect for not rendering each time
        axios.get<TUserList>('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(response.data);
            setUserList( response.data );
            
            
            console.log()
        });
    }, []);
 //<UserList {...users} />

    return (
        <Fragment>
          
        <UserList  items= {users} />
                   </Fragment>

    );
};
export default Users;