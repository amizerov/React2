import React, { useEffect, useState } from 'react';
import './Search.module.scss';

export const Search = (props) => {

    const [tmp, setTmp] = useState(''); 
    useEffect(() => {
        setTmp(props.Text);
    }, [props.Text]);

    return(
        <div>
            <input placeholder="Search" value={tmp} onChange={(e) => {setTmp(e.currentTarget.value)}}/>
            <button onClick={() => props.setSearch(tmp)}>Search</button>
        </div>
    );
}