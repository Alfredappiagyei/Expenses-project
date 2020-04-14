import React from 'react';
import  {Link}  from "react-router-dom";

const User = ({ name, email, gen, id, removeUser }) => {
    const handleClick = () =>{
          removeUser(id)
    }
    return (
        <div>
            <h4  style={{color:"#fff",}}>{name}</h4>
            <p  style={{color:"#fff",}}>{email}</p>
            <p  style={{color:"#fff",}}>{gen}</p>
            <button onClick={handleClick}>Remove User</button>
            <Link to = {`/edit/${id}`}>Edit User</Link>
            <hr/>

        </div>
    );
}

export default User;