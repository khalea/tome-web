'use client';

import { useState } from 'react';
import Input from './input';
import Log from './log';
import { MessageProps } from './types/types';

export default function Container({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      date: new Date(),
      sender: 'Me',
      text: 'Hello',
    },
    {
      date: new Date(),
      sender: 'Bot',
      text: 'Hi',
    },
    {
      date: new Date(),
      sender: 'Me',
      text: 'How are you?',
    },
  ]);

  // Saves the input value when the user presses send button
  const updateMessages = (value: string) => {
    setMessages([...messages, { date: new Date(), sender: 'Me', text: value }]);
  };

  const styles = {
    container: 'flex flex-col h-screen py-2',
  };

  return (
    <section className={styles.container}>
      <Log messages={messages} />
      <Input updateMessages={updateMessages} />
    </section>
  );
}
