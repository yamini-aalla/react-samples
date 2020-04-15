import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import { fetchUser } from '../redux/user/userAction';

function User({userdata,userdispatch}) {
    useEffect(() =>{
       userdispatch()
    },[])
    return userdata.loading?(
        <h2>Loading</h2>
    ):userdata.error ? (<h2>{userdata.error}</h2>):(<div>
        <h2>User List</h2><div>
            {userdata && userdata.user&& userdata.user.map((user) =><p>{user.name}</p>)}
        </div>
    </div>)
}
const mapStateToProps =(state) =>{
    return{
        userdata: state.user
    }
}
const mapDispatchToProps =(dispatch) =>{
    return{
        userdispatch : () =>dispatch(fetchUser())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(User);