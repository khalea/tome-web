import { LogProps } from './types/types';

export default function Log({ messages }: LogProps) {
  const messageColors = {
    self: 'bg-slate-200',
    other: '',
  };

  const styles = {
    container: 'flex flex-col h-screen py-4 overflow-auto',
    message: 'p-4 w-full rounded ',
  };

  return (
    <div className={styles.container}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={
            styles.message +
            (message.sender === 'Me' ? messageColors.self : messageColors.other)
          }
        >
          <p>
            <strong>{message.sender}</strong> {message.date.toLocaleString()}
          </p>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
}
