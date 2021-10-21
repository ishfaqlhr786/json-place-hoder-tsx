import React, {useEffect, useState, Fragment } from 'react';
import axios from 'axios';

interface User {
  id: number;
  title: string;
  body:string;
}
interface Props{
    id:number
}

export type TUserList = User

const UserOne:React.FC<Props> = ({id}) =>{
   // const [data, setdata] = useState({})
 const [users, setUserList] = useState< User>({
     id:0,
     title:'',
     body:''
 });
    useEffect(() => {
        axios.get<TUserList>(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            setUserList(response.data)
        });
    }, [{id}]);

//console.log(users, " data");


    return (
        <>
        
     <h3 key={users.id}>body:{users.body}  ---- </h3>
     <h3>title:{users.body}</h3>
     <h3>Id:{users.id}</h3>

                   </>

    );
};
export default UserOne;