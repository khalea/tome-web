import { LogProps } from './types/types';

export default function Log({ messages }: LogProps) {
  const styles = {
    container: 'flex flex-col h-screen py-4 overflow-auto',
    message: '',
  };

  return (
    <div className={styles.container}>
      {messages.map((message, index) => (
        <div key={index}>
          <p>
            <strong>Date:</strong> {message.date.toLocaleString()}
          </p>
          <p>
            <strong>Sender:</strong> {message.sender}
          </p>
          <p>
            <strong>Message:</strong> {message.text}
          </p>
        </div>
      ))}
    </div>
  );
}
