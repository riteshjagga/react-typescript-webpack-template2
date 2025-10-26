import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Counter from './Counter/Counter';

const App = (): React.ReactElement => {
  const [count, setCount] = useState<number>(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>React Typescript Webpack Template</h1>
      <Counter
        value={count}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
      />
    </>
  );
};

const app = document.getElementById('app');
if (!app) {
  throw new Error('Missing root element with app id.');
}
const appRoot = createRoot(app);
appRoot.render(<App />);
