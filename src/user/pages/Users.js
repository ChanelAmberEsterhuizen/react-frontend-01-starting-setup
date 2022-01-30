import React from "react";
import UsersList from "../components/UsersList";
const Users = () => 
{
    const USERS = [{id : 'u1', name: 'Chanel' , image: 'https://media.istockphoto.com/photos/high-five-pushing-dog-picture-id693468238', places: 3  },  {id : 'u', name: 'Mario' , image: 'https://media.istockphoto.com/photos/high-five-pushing-dog-picture-id693468238', places: 7  }] ; 
    return <UsersList items = {USERS} />; 
}; 
export default Users ; 