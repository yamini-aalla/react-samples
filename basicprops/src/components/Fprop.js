import React from 'react';
export const Fprops =(props) =>{
	const {name,sname} = props;        // props destructuringreplace props.name , props.sname
	return(<div>
 <h1> hello {name} surname {sname}</h1>    
{props.children}
</div>
)

 }





//for not using default export


