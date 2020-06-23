import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import allReducers from './reducers';

const store = createStore(
    allReducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//Actions
const increment = () =>{
    return{
        type:'INCREMENT'
    }
  
}
const decrement = () =>{
    return {
        type:"DECREMENT"
    }
}


/* 
let store=createStore(counter);

//display it on console
store.subscribe(()=>{
    console.log('store:', store.getState());
});

//dispatch
store.dispatch(increment());
store.dispatch(increment());
 */

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
    
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
    