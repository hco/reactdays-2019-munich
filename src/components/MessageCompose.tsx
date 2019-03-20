import React, { FormEvent, useState } from 'react';

interface Props {
  onSubmit: (value: string) => void;
}

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
      <button type="submit">Send 📬</button>
    </form>
  );
};

export default MessageComposeComponent;
