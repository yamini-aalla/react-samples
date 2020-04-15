import React ,{useState,useEffect} from 'react';
import axios from 'axios'
function Fetchjob(props) {
    const [data,setData] = useState('')
    const [zip ,setZip] = useState('')
    const [btn,setBtn] = useState('')
    useEffect(()=>{
        axios.get(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=6adb0f716ff7fb53d89de609621f9f6c`)
        .then(res =>{
            setData(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[btn])
    return (
        <div>
            <input type="text" placeholder="zipcode" onChange={e => setZip(e.target.value)}/>
            <button onClick={() => setBtn(zip)}>submit zipcode</button>
            {data?<div>{data.name} {data.main.temp}</div>:null}
        </div>
    );
}

export default Fetchjob;