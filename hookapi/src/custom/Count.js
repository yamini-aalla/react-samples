import React ,{useState,useEffect} from 'react';
import useCount from './useCount';

function Count(props) {
    const [count,increment,reset] = useCount();
    return (
        <div>

            <button onClick={increment}>count</button>
            <button onClick={reset}>reset</button>
          {count}
        </div>
    );
}

export default Count;