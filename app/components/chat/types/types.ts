export interface MessageProps {
  date: Date;
  text: string;
  sender: string;
}

export interface LogProps {
  messages: MessageProps[];
}
