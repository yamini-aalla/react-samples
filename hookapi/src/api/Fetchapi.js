import React ,{useState ,useEffect} from 'react';
import axios from 'axios';

function Fetchapi() {
    const [items, setItems] = useState([])

	useEffect(() => {
        		axios
        			.get(`https://jsonplaceholder.typicode.com/posts`)
        			.then(res => {
                console.log(res.data)
                setItems(res.data)
        			})
        			.catch(err => {
        				console.log(err)
        			})
        	},[])

	return (
		<div>
			
			<ul>
				{items.map(i=>i.id<5? <div key={i.id}>{i.id}</div>:null)}
			</ul>
		</div>
	)
}

export default Fetchapi;
// const [post, setPost] = useState({})
// 	const [id, setId] = useState(1)
// 	const [idFromButtonClick, setIdFromButtonClick] = useState(1)

// 	useEffect(() => {
// 		axios
// 			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
// 			.then(res => {
//         console.log(res)
//         setPost(res.data)
// 			})
// 			.catch(err => {
// 				console.log(err)
// 			})
// 	}, [idFromButtonClick])

// 	const handleClick = () => {
// 		setIdFromButtonClick(id)
// 	}

// 	return (
// 		<div>
// 			<input type="text" value={id} onChange={e => setId(e.target.value)} />
// 			<button type="button" onClick={handleClick}>Fetch Post</button>
// 			<div>{post.title}</div>
// 			{/* <ul>
// 				{posts.map(post => (
//           <li key={post.id}>{post.title}</li>
// 				))}
// 			</ul> */}
// 		</div>
// 	)
// }