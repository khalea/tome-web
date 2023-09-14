import { MessageProps } from './types/types';

export default function Message({ date, text, sender }: MessageProps) {
  return (
    <div>
      <div>{date.toLocaleString()}</div>
      <div>{text}</div>
      <div>{sender}</div>
    </div>
  );
}
