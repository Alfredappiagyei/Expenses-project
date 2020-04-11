import React from 'react';

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
            <hr/>

        </div>
    );
}

export default User;