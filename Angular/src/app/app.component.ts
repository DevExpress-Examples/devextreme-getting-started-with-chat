import { Component } from '@angular/core';
import { DxChatModule } from 'devextreme-angular/ui/chat';
import type { DxChatTypes } from 'devextreme-angular/ui/chat';

interface MessageEnteredEvent {
  message: DxChatTypes.Message;
}

@Component({
  selector: 'app-root',
  imports: [DxChatModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  firstUser: DxChatTypes.User = {
    id: '1',
    name: 'User',
  };

  secondUser: DxChatTypes.User = {
    id: '2',
    name: 'Feedback Bot',
    avatarUrl: 'assets/bot.png',
  };

  messages: DxChatTypes.Message[] = [
    {
      timestamp: Date.now(),
      author: this.secondUser,
      text: 'Hello! We\'d love to hear your feedback. Please share your thoughts below!',
    },
  ];

  alerts: DxChatTypes.Alert[] = [];

  typingUsers: DxChatTypes.User[] = [];

  disabled = false;

  onMessageEntered({ message }: MessageEnteredEvent): void {
    this.messages = [...this.messages, message];
    this.typingUsers = [this.secondUser];
    this.sendToBackend();
  }

  sendToBackend(): void {
    setTimeout(() => {
      this.typingUsers = [];
      this.messages = [
        ...this.messages,
        {
          text: 'Thanks for helping us improve!',
          author: this.secondUser,
          timestamp: Date.now(),
        },
      ];
      this.alerts = [
        ...this.alerts,
        {
          id: 1,
          message: 'Session expired',
        },
      ];
      this.disabled = true;
    }, 1000);
  }
}
