import { useCallback, useState } from 'react';
import Chat, { type ChatTypes } from 'devextreme-react/chat';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';

type User = ChatTypes.User;
type Message = ChatTypes.Message;
type Alert = ChatTypes.Alert;

const firstUser: User = {
  id: '1',
  name: 'User',
};

const secondUser: User = {
  id: '2',
  name: 'Feedback Bot',
  avatarUrl: '/bot.png',
};

const initialMessages: Message[] = [
  {
    timestamp: Date.now(),
    author: secondUser,
    text: 'Hello! We\'d love to hear your feedback. Please share your thoughts below!',
  },
];

function App(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [typingUsers, setTypingUsers] = useState<User[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);

  const sendToBackend = useCallback((): void => {
    setTimeout(() => {
      setTypingUsers([]);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: 'Thanks for helping us improve!',
          author: secondUser,
          timestamp: Date.now(),
        },
      ]);
      setAlerts([
        {
          id: 1,
          message: 'Session expired',
        },
      ]);
      setDisabled(true);
    }, 3000);
  }, []);

  const onMessageEntered = useCallback(
    ({ message }: ChatTypes.MessageEnteredEvent): void => {
      setMessages((prevMessages) => [...prevMessages, message]);
      setTypingUsers([secondUser]);
      sendToBackend();
    },
    [sendToBackend],
  );

  return (
    <Chat
      disabled={disabled}
      alerts={alerts}
      width={400}
      height={450}
      user={firstUser}
      onMessageEntered={onMessageEntered}
      items={messages}
      typingUsers={typingUsers}
    />
  );
}

export default App;
