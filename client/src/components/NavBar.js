import React, {useState, useEffect} from "react";


const NavBar=()=>{

    useEffect(()=>{
        fetch("http://127.0.0.1:3001/api/users")
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
        })
    },[])

    return(
        <div className="navbar">
            navbar 
        </div>
    )
}

export default NavBar