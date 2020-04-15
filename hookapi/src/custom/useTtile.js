import React ,{useState,useEffect}from 'react';

function useTtile(count) {
    
    useEffect(() =>{
        document.title =`title of page ${count}`
    },[count])
}

export default useTtile;