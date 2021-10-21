/*

import axios from 'axios';
import './App.css'
import React ,{useState,useEffect}from 'react'
interface IPost {
    id: number;
    userId?: number;
    title: string;
    body: string;
  }
  const defaultPosts:IPost[] = [];
export const App = () => {
const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
const [error, setError]: [string, (error: string) => void] = React.useState("");
React.useEffect(() => {
axios
    .get<IPost[]>("https://jsonplaceholder.typicode.com/posts/", {
      headers: {
        "Content-Type": "application/json"
      },
    }).then(response => {
      setPosts(response.data);
      setLoading(false);
      console.log(posts)
    }) .catch(ex => {
      const error =
      ex.response.status === 404
        ? "Resource Not found"
        : "An unexpected error has occurred";
      setError(error);
      setLoading(false);
    });
}, []);
  return (
    
 <div className="App">
  <ul className="posts">
    {posts.map((post) => (
     <li key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
     </li>
   ))}
  </ul>
  {error && <p className="error">{error}</p>}
</div>
);
   
}



*/

import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";



const App: React.FC = () => {
  return (
    <div>
     <h3>hh</h3>
          
    </div>
  );
}

export default App;