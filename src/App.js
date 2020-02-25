import React, { useState } from 'react';

import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = val => {
    setCount(Number(count) + val);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <>
      <div className="container d-flex justify-content-center mt-2 ">
        <form className="form-inline text-center">
          <button
            type="button"
            className="btn btn-outline-primary mr-2 "
            onClick={incrementCounter.bind(null, -1)}
          >
            -
          </button>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={count}
              readOnly
            />
          </div>
          <button
            type="button"
            className="btn btn-outline-success ml-2"
            onClick={incrementCounter.bind(null, 1)}
          >
            +
          </button>
        </form>
      </div>
      <div className="container d-flex justify-content-center mt-2 ">
        <form>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={resetCounter.bind(null)}
          >
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
