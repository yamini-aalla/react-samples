import React ,{useState,useEffect} from 'react';
import axios from 'axios';

function Fetchinput(props) {
    const [data,setData] = useState([])
    const [id,setId] = useState(1)
    const [btn,setBtn] = useState(1)
    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            setData(res.data)
        })
        .catch(err=>{
            console.log("error")
        })
    },[btn])
    return (
        <div>
            <input type="text"  value={id} onChange={e =>setId(e.target.value)}/>
            <button onClick={() => setBtn(id)}>title submit</button>
            {data.title}
        </div>
    );
}

export default Fetchinput;