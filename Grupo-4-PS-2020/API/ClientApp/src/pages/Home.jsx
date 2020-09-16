import React from 'react'
import { apiAxios } from '../config/axios';

export const Home = ({tokenJWT}) => {
    const falopa = () =>{
        console.log(tokenJWT)
        var token = localStorage.getItem("token");
        apiAxios.get("api/v1/test/hello",  {
            headers:{ 
                'Authorization': token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': "POST, GET, OPTIONS, DELETE, PUT",
                'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization"
            }
        })
            .then(res => {
              console.log(res.data);
    
            })
            .catch(res => console.log(res));
    }
    return (
        <div>
            <h2>Hola soy un home</h2>
            <button onClick={falopa}> falopa </button>
        </div>
    )
}
