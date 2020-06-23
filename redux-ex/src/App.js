import React from 'react';
import {useSelector, useDispatch} from 'react-redux' ;
import actions from './actions'


function App() {
  //const counter = useSelector(state=>state);
  const counter = useSelector(state=>state);
  const dispatch = useDispatch();

  console.log(actions);
  return (

    <div >
      REDUX: {counter.counterReducer}<br></br>
      <button onClick={()=>dispatch(actions.increment())}>+</button>
      <button onClick={()=>dispatch(actions.decrement())}>+</button><br></br>
      <button onClick={()=>dispatch(actions.increment(5))}>+5</button>
      <button onClick={()=>dispatch(actions.increment(10))}>+10</button><br></br>
      <button onClick={()=>dispatch(actions.decrement(5))}>-5</button>
      <button onClick={()=>dispatch(actions.decrement(10))}>-10</button>

    </div>
  );
}

export default App;
