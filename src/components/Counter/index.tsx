import * as Style from './index.style';

interface Props {
  increaseHandler: () => void;
  decreaseHandler: () => void;
  count: number;
}

const Counter = ({ increaseHandler, decreaseHandler, count }: Props) => {
  return (
    <Style.Container>
      <Style.CounterButton onClick={decreaseHandler}>-</Style.CounterButton>
      <Style.CounterDisplay>{count}</Style.CounterDisplay>
      <Style.CounterButton onClick={increaseHandler}>+</Style.CounterButton>
    </Style.Container>
  );
};
export default Counter;
