import React,{useState,useEffect} from 'react';
import useTtile from './useTtile'
function Title(props) {
    const [count,setCount] = useState(0);
    useTtile(count)
    return (
        <div>

            <button onClick={() =>setCount(count+1)}>count title</button>
        </div>
    );
}

export default Title;