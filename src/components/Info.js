import React from 'react';
import  {Link}  from "react-router-dom";

const User = ({ name, email, gen, id, removeUser }) => {
    const handleClick = () =>{
          removeUser(id)
    }
    return (
        <div>
            <h4  style={{color:"#fff",}}>Name: {name}</h4>
            <p  style={{color:"#fff",}}>email: {email}</p>
            <p  style={{color:"#fff",}}>Gen: {gen}</p>
            <button onClick={handleClick}>Remove User</button>
            <Link to = {`/edit/${id}`}>Edit User</Link>
            <hr/>

        </div>
    );
}

export default User;