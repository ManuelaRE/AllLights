import React, { createContext, useState, useEffect } from 'react';


export const UserContext = createContext({});


export const UserProvider = (props) => {

    const [user, setUser] = useState('Manuela');
    console.log(user);

    const getUser = () => {
        if(!user) setUser('guest');
    };

    useEffect(() => { 
        getUser();
    });


    return (
        <UserContext.Provider value={{ user }}>
            {props.children}
        </UserContext.Provider>
    )}