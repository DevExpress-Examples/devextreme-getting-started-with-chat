<script setup lang="ts">
import { ref } from 'vue';
import DxChat, { type DxChatTypes } from 'devextreme-vue/chat';

type User = DxChatTypes.User;
type Message = DxChatTypes.Message;
type Alert = DxChatTypes.Alert;

const firstUser: User = {
  id: '1',
  name: 'User',
};

const secondUser: User = {
  id: '2',
  name: 'Feedback Bot',
  avatarUrl: 'bot.png',
};

const initialMessages: Message[] = [
  {
    timestamp: Date.now(),
    author: secondUser,
    text: "Hello! We'd love to hear your feedback. Please share your thoughts below!",
  },
];

const messages = ref<Message[]>(initialMessages);
const typingUsers = ref<User[]>([]);
const alerts = ref<Alert[]>([]);
const disabled = ref<boolean>(false);

const onMessageEntered = ({ message }: DxChatTypes.MessageEnteredEvent): void => {
  messages.value = [...messages.value, message];
  typingUsers.value = [secondUser];
  sendToBackend();
};

const sendToBackend = (): void => {
  setTimeout(() => {
    typingUsers.value = [];
    messages.value = [
      ...messages.value,
      {
        text: 'Thanks for helping us improve!',
        author: secondUser,
        timestamp: Date.now(),
      },
    ];
    alerts.value = [
      ...alerts.value,
      {
        id: 1,
        message: 'Session expired',
      },
    ];
    disabled.value = true;
  }, 1000);
};
</script>

<template>
  <DxChat
    :width="400"
    :height="450"
    :disabled="disabled"
    :alerts="alerts"
    :user="firstUser"
    :items="messages"
    :typing-users="typingUsers"
    @message-entered="onMessageEntered"
  />
</template>
