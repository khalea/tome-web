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
      sender: 'me',
      text: 'Hello',
    },
    {
      date: new Date(),
      sender: 'you',
      text: 'Hi',
    },
    {
      date: new Date(),
      sender: 'me',
      text: 'How are you?',
    },
  ]);

  const styles = {
    container: 'flex flex-col h-screen py-2',
  };

  return (
    <section className={styles.container}>
      <Log messages={messages} />
      <Input />
    </section>
  );
}
