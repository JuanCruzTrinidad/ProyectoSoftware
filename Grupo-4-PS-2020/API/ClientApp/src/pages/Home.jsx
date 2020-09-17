import React from 'react'
import { apiAxios } from '../config/axios';
import Slider from '../components/ui/SliderHome';

export const Home = ({tokenJWT}) => {
    //prueba mail
    // var token = localStorage.getItem("token");
    // apiAxios
    // .get("/user/allusers", {
    //   headers: {
    //     'Authorization': token, 
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
    //     "Access-Control-Allow-Headers":
    //       "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
    //   },
    //   withCredentials: true
    // })

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
            <button onClick={falopa}> falopa </button>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Slider />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
