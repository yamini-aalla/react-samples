import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
//import {connect} from 'react-redux';
import { buyIce } from '../redux/Icecream/ICeAction';

function Ice() {
    const displayIce = useSelector(state => state.ice.numofIce);
    const dispatch = useDispatch()
    return (
        <div>
            <h2>IceCream - {displayIce} </h2>
            <button onClick={() =>dispatch(buyIce())}>click Ice</button>

        </div>
    );
}
// const mapStateToProps =(state) =>{
//     return{
//         displayIce: state.ice.numofIce
//     }
// }
// const mapDispatchToProps =(dispatch) =>{
//     return{
//         buyIce: () =>dispatch(buyIce())
//     }
// }

//export default connect(mapStateToProps,mapDispatchToProps)(Ice);
export default Ice