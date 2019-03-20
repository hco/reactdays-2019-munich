import React, { FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import { addMessage } from '../redux/configureStore';

interface Props {
  onSubmit: (value: string) => void;
}

const Button = styled.button<{ primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${props => (props.primary ? 'color: palevioletred;' : 'color: green;')}

  &:hover {
    color: var(--hover-color);
  }
`;

export const MessageComposeComponent = ({ onSubmit }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <Button type="submit" style={{ '--hover-color': 'blue' } as any}>
        Send 📬
      </Button>
      <Button type="submit" primary>
        Send 📬
      </Button>
    </form>
  );
};

const mapDispatchToProps = {
  onSubmit: addMessage
};

export default connect(
  null,
  mapDispatchToProps
)(MessageComposeComponent);
