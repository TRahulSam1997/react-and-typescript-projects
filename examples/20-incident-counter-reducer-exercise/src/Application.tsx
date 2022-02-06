import { useReducer } from 'react';

type CounterAction = {
  type: 'INCREMENT' | 'DECREMENT' | 'SET';
  payload?: number;
}

type CounterState = {
  count: number;
}

const initialState: CounterState = {count: 0};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    case 'SET':
      return {count: action.payload || 0};
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const increment = () => dispatch({type: 'INCREMENT'});
  // const decrement = () => dispatch({type: 'DECREMENT'});
  // const set = (n: number) => dispatch({type: 'SET', payload: n});

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{state.count}</p>
      <section className="controls">
        <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
        <button onClick={() => dispatch({type: 'SET'})}>Reset</button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
