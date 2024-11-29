import React, { useCallback, useState } from "react";
import Chat from "devextreme-react/chat";

const firstUser = {
  id: "1",
  name: "User"
};

const secondUser = {
  id: "2",
  name: "Feedback Bot",
  avatarUrl: "./bot.png"
};

const initialMessages = [{
  timestamp: Date.now(),
  author: secondUser,
  text: `Hello! We'd love to hear your feedback. Please share your thoughts below!`
}];

const App = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [typingUsers, setTypingUsers] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const onMessageEntered = useCallback(({ message }) => {
    setMessages((prevMessages) => [...prevMessages, message]);
    setTypingUsers([secondUser]);
    sendToBackend();
  }, []);

  const sendToBackend = () => {
    setTimeout(() => {
      setTypingUsers([]);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Thanks for helping us improve!",
          author: secondUser,
          timestamp: Date.now(),
        },
      ]);
      setAlerts([
        {
          id: 1,
          message: "Session expired",
        },
      ]);
      setDisabled(true);
    }, 3000);
  };

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
};

export default App;