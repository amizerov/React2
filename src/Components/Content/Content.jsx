import { useState, useEffect } from "react";

export const Content = ({login}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        if(!login) return;
        fetch("https://api.github.com/users/" + login)
        .then(res => res.json())
        .then(res => {
            setUser(res);
            //console.log(res);
        })
    }, [login]);
    
    if(!user) return null;
    return(
        <div>
            <h2>Login: {login}</h2>
            <img src={user.avatar_url} alt="" />
            <div>Details: {user.id}</div>
        </div>
    );
}