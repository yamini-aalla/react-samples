import React ,{useState} from 'react';
import useCount from './useCount';
function Count1(props) {
    const [count,increment,reset] = useCount();
    return (
        <div>

            <button onClick={increment}>count1</button>
            <button onClick={reset}>reset1</button>
          {count}
        </div>
    );
}

export default Count1;