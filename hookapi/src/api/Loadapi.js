import React ,{useEffect,useState}from 'react';
import axios from 'axios'

function Loadapi(props) {
    const [data,setData] = useState({})
    const [load,setLoad] = useState(true)
    const [error,setError] = useState('')
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/3')
        .then(res =>{
            setLoad(false)
            setData(res.data)
            setError("")
        })
        .catch(err =>{
            setLoad(false)
            setData({})
            setError("something went wrong")
        })
    },[])
    return ( 
        <div>
            {load ? "Loading" :  data.title}
        </div>
    );
}

export default Loadapi;