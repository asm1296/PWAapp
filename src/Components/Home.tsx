import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';

const Home =()=>{
    const [data,setData] = useState([{
        userId:0,
        id:0,
        title:"",
        body:""
    }]);
    useEffect(()=>{
        initializeData();
    },[])

    const fetchData = () =>{
        return fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10',{
           method:"GET"
       })
        .then((response)=>{
           if(response){
            return response.json();
           }
        }).catch((error)=>{
            console.log(error);
        })
    }

    const initializeData = ()=>{
        fetchData().then((response)=>{
            if(response){
                setData(response);
            }
        })
    }

    return(
        <div>
            <h3>React Store Posts</h3>
            <Carousel>
            {data.map(item=>{
                return <Carousel.Item style={{width:'100%', padding:'20px auto',height:'250px', backgroundColor:'black'}}>
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </Carousel.Caption>
              </Carousel.Item>
            })}
            </Carousel>
        </div>
    )

}

export default Home;