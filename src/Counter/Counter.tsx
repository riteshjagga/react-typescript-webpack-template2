import Button from '../components/Button/Button';

type CounterProps = {
  value: number;
  onIncrement: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDecrement: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Counter = ({ value, onIncrement, onDecrement }: CounterProps) => {
  return (
    <div>
      <p>Current Value: {value}</p>
      <Button onClick={onDecrement}>-</Button>
      <Button onClick={onIncrement}>+</Button>
    </div>
  );
};

export default Counter;
