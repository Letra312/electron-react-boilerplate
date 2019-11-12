import React from 'react';

interface ICounterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default class Counter extends React.Component<ICounterProps> {
  constructor(props: ICounterProps) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  public incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  public incrementAsync() {
    setTimeout(this.props.onIncrement, 1000);
  }

  public render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <p>
        Clicked: {value} times <button onClick={onIncrement}>+</button>{' '}
        <button onClick={onDecrement}>-</button>{' '}
        <button onClick={this.incrementIfOdd}>Increment if odd</button>{' '}
        <button onClick={this.incrementAsync}>Increment async</button>
      </p>
    );
  }
}
