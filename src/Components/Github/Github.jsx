import React, {useEffect, useState} from "react";
import s from "./Github.module.scss";
import {Search} from "../Search/Search";
import {List} from "../List/List";

export const Github = (props) => {

    const [search, setSearch] = useState('mizerov'); 
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if(user){
            document.title = user.login;
            props.onChange(user.login); 
        }
    }, [user]);// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if(search.length < 3) return;
        fetch("https://api.github.com/search/users?q=" + search)
        .then(res => res.json())
        .then(res => {
            setUsers(res.items)
        })
    }, [search]);

    useEffect(() => {
        if(users.length === 0) return;
        setUser(users[0]);
    }, [users]);
   
    return( 
    <div className={s.container}>
        <Search Text={search} setSearch={setSearch} />
        <List user={user} users={users} setUser={setUser} />
        <br/>
    </div>
    );
}
