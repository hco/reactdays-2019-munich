import React, { FormEvent } from 'react';

const MessageCompose = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Hallo Message');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Send 📬</button>
    </form>
  );
};

export default MessageCompose;
