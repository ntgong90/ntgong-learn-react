import { useState } from 'react';
export const Component1 = () => {
  let [text, displayText] = useState('starting text');

  function handleClick() {
    // eslint-disable-next-line no-useless-concat
    displayText(text = text + " " + 'test');
  }

  return (
      <div>
        <h3>Component1</h3>
        <button className="comp1" onClick={handleClick}>
          Press Here
        </button>
        <p>{text}</p>
      </div>
  );
};

export const Counter = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h3>Component2</h3>
      <button onClick={handleClick}>
        You pressed me times.
      </button>
      {count} 
    </div>

  );

}

export const ChildComponent = () => {
  return (
      <div>
        <h3>ChildComponent</h3>
        <p>Insert text here</p>
      </div>
  );
};
