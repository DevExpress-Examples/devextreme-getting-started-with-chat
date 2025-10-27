<template>
  <DxChat
    width="400"
    height="450"
    :disabled="disabled"
    :alerts="alerts"
    :user="firstUser"
    :items="messages"
    :typingUsers="typingUsers"
    @message-entered="onMessageEntered"
  />
</template>

<script setup>
import { ref } from "vue";
import DxChat from "devextreme-vue/chat";

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

const messages = ref(initialMessages);
const typingUsers = ref([]);
const alerts = ref([]);
const disabled = ref(false);

const onMessageEntered = ({ message }) => {
  messages.value = [...messages.value, message];
  typingUsers.value = [secondUser];
  sendToBackend();
};

const sendToBackend = () => {
  setTimeout(() => {
    typingUsers.value = [];
    messages.value = [
      ...messages.value,
      {
        text: "Thanks for helping us improve!",
        author: secondUser,
        timestamp: Date.now(),
      },
    ];
    alerts.value = [
      ...alerts.value,
      {
        id: 1,
        message: "Session expired",
      },
    ];
    disabled.value = true;
  }, 1000);
};
</script>