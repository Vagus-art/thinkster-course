import React, { useState, useEffect} from 'react';
import './App.css';
import { createStore } from 'redux';

const defaultState = { checked:false };

const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'TOGGLE':
        return {...state,checked: !state.checked };
    }
  return state;
};
const store = createStore(reducer);

function App() {
  let [myState,setState] = useState(store.getState());
  useEffect(()=>{
    store.subscribe(() => setState(store.getState()));
    console.log(myState);
  },[myState]);
  return (
    <div className="App">
      <h1>hello</h1>
      <input type="checkbox" checked={myState.checked} onChange={()=>store.dispatch({type:'TOGGLE'})}></input>
      {myState.checked ? <h2>Done!</h2> : <h2>not done</h2>}
    </div>
  );
}

export default App;
