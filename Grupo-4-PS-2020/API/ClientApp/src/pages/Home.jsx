import React from 'react'
import { apiAxios } from '../config/axios';
import Slider from '../components/ui/SliderHome';

export const Home = ({tokenJWT}) => {
    // const falopa = () =>{
    //     console.log(tokenJWT)
    //     var token = localStorage.getItem("token");
    //     apiAxios.get("api/v1/test/hello",  {
    //         headers:{ 
    //             'Authorization': token,
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': "POST, GET, OPTIONS, DELETE, PUT",
    //             'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization"
    //         }
    //     })
    //         .then(res => {
    //           console.log(res.data);
    
    //         })
    //         .catch(res => console.log(res));
    // }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pt-4">
                        <Slider />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
