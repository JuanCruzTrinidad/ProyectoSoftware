import React from 'react'
import { apiAxios } from '../config/axios';
import Slider from '../components/ui/SliderHome';
import { Container, Row, Col } from 'react-bootstrap';
import { FeaturedProducts } from '../components/ui/FeaturedProducts';

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

    return (
        <>
        <Container>
            <Row className={"mt-4"}>
                <Col xs={12}> 
                    <Slider />
                </Col>
            </Row>
            <Row className={"mt-4"}>
                <Col xs={{ span: 8, offset: 2 }}>
                    <FeaturedProducts/>
                </Col>
            </Row>
        </Container>
        </>
    )
}
