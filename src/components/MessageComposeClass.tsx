import React, { FormEvent, useState, Component } from 'react';

interface Props {
  onSubmit: (value: string) => void;
}

interface State {
  inputValue: string;
}

class MessageComposeClassComponent extends Component<Props, State> {
  state: State = {
    inputValue: ''
  };

  handleSubmit = (e: FormEvent) => {
    const { onSubmit } = this.props;
    const { inputValue } = this.state;

    e.preventDefault();
    onSubmit(inputValue);
    this.setState({ inputValue: '' });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={inputValue} onChange={this.handleChange} />
        <button type="submit">Send 📬</button>
      </form>
    );
  }
}

export default MessageComposeClassComponent;
