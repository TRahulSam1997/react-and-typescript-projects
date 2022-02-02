import { ChangeEvent, useState } from 'react';

type CounterProps = {
  incident: string;
}

type CounterState = {
  count: number;
}

const inc = (count: number) => ( count + 1 );
const dec = (count: number) => ( count - 1 );

const Counter = () => {
  const [count, setCount] = useState(0);

const changeCount = (event: ChangeEvent<HTMLInputElement>) => {
  setCount( +event.target.value );
}

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => setCount(inc)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(dec)}>Decrement</button>
      </section>
      <section className="controls">
        <form onSubmit={() => {}}>
          <label htmlFor="set-to">Set Count</label>
          <input id="set-to" type="number" />
          <input type="submit" />
        </form>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
