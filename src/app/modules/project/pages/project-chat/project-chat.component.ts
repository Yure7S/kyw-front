import { Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/core/model/message.model';
import { ChatService } from 'src/app/core/utils/chat.service';
import { CurrentUserService } from 'src/app/core/utils/current-user.service';

@Component({
  selector: 'app-project-chat',
  templateUrl: './project-chat.component.html',
  styleUrls: ['./project-chat.component.scss']
})
export class ProjectChatComponent implements OnInit, OnDestroy {
  chatService = inject(ChatService)
  currentUserService = inject(CurrentUserService)
  activatedRoute = inject(ActivatedRoute)

  projectId: string = ''
  currentUser = this.currentUserService.currentUserSig()

  @ViewChild('boxMessages', {static: true}) boxMessages!: ElementRef

  messageControl: FormControl = new FormControl()

  ngOnInit(): void {
    const projectId: string = this.activatedRoute.snapshot.paramMap.get('projectId') ?? ''
    this.chatService.connect()
    console.log(projectId)

    this.boxMessages.nativeElement.scrollTop = this.boxMessages.nativeElement.scrollHeight;
  }

  ngOnDestroy(): void {
    this.chatService.disconnect()
  }

  isFirst(index: number): boolean {
    return this.messagesList[index].sender.userId !== this.messagesList[index--].sender.userId
  }

  send() {
    this.chatService.sendMessage(this.projectId, this.messageControl.value)
    this.messageControl.reset()
  }

  currentUserId: string = 'd82d261b-1f69-4e74-b995-4e8f6ef39573'

  messagesList: Message[] = [
    {
      id: '1',
      sender: {
        userId: this.currentUserId,
        nickname: 'Senha',
        avatarUrl: ''
      },
      project: {
        id: '',
        name: ''
      },
      content: 'Hi! How are you?',
      sendIn: '2024-06-15T09:00:00Z'
    },
    {
      id: '3',
      sender: {
        userId: this.currentUserId,
        nickname: 'Senha',
        avatarUrl: ''
      },
      project: {
        id: '',
        name: ''
      },
      content: 'Are you doing anything interesting today?',
      sendIn: '2024-06-15T09:02:00Z'
    },
    {
      id: '2',
      sender: {
        userId: 'other-user-id',
        nickname: 'UserB',
        avatarUrl: ''
      },
      project: {
        id: '',
        name: ''
      },
      content: 'Hello! I\'m good, thanks. How about you?',
      sendIn: '2024-06-15T09:01:00Z'
    },
    {
      id: '4',
      sender: {
        userId: 'other-user-id',
        nickname: 'UserB',
        avatarUrl: ''
      },
      project: {
        id: '',
        name: ''
      },
      content: 'Not much, just relaxing. What about you?',
      sendIn: '2024-06-15T09:03:00Z'
    },
    {
      id: '5',
      sender: {
        userId: this.currentUserId,
        nickname: 'Senha',
        avatarUrl: ''
      },
      project: {
        id: '',
        name: ''
      },
      content: 'Do you have any plans for the weekend?',
      sendIn: '2024-06-15T09:04:00Z'
    },
    {
      id: '6',
      sender: {
        userId: 'other-user-id',
        nickname: 'UserB',
        avatarUrl: ''
      },
      project: {
        id: '',
        name: ''
      },
      content: 'Not yet. Maybe I\'ll hang out with some friends. And you?',
      sendIn: '2024-06-15T09:05:00Z'
    },
    {
      id: '7',
      sender: {
        userId: this.currentUserId,
        nickname: 'Senha',
        avatarUrl: ''
      },
      project: {
        id: '',
        name: ''
      },
      content: 'Sounds good. I\'ll probably spend some time with family.',
      sendIn: '2024-06-15T09:06:00Z'
    },
    {
      id: '8',
      sender: {
        userId: 'other-user-id',
        nickname: 'UserB',
        avatarUrl: ''
      },
      project: {
        id: '',
        name: ''
      },
      content: 'That sounds nice. Family time is important.',
      sendIn: '2024-06-15T09:07:00Z'
    },
    {
      id: '9',
      sender: {
        userId: this.currentUserId,
        nickname: 'Senha',
        avatarUrl: ''
      },
      project: {
        id: '',
        name: ''
      },
      content: 'Yes, definitely. Let\'s catch up later.',
      sendIn: '2024-06-15T09:08:00Z'
    },
    {
      id: '10',
      sender: {
        userId: 'other-user-id',
        nickname: 'UserB',
        avatarUrl: ''
      },
      project: {
        id: '',
        name: ''
      },
      content: 'Sure thing. Talk to you later!',
      sendIn: '2024-06-15T09:09:00Z'
    },
    {
      id: '14',
      sender: {
        userId: 'other-user-id',
        nickname: 'UserB',
        avatarUrl: ''
      },
      project: {
        id: '',
        name: ''
      },
      content: 'Goodbye!',
      sendIn: '2024-06-15T09:13:00Z'
    },
    {
      id: '13',
      sender: {
        userId: this.currentUserId,
        nickname: 'Senha',
        avatarUrl: ''
      },
      project: {
        id: '',
        name: ''
      },
      content: 'Bye for now!',
      sendIn: '2024-06-15T09:12:00Z'
    },
    {
      id: '11',
      sender: {
        userId: this.currentUserId,
        nickname: 'Senha',
        avatarUrl: ''
        },
      project: {
        id: '',
        name: ''
      },
      content: 'Have a great day!',
      sendIn: '2024-06-15T09:10:00Z'
    },
    {
      id: '12',
      sender: {
        userId: 'other-user-id',
        nickname: 'UserB',
        avatarUrl: ''
      },
      project: {
        id: '',
        name: ''
      },
      content: 'Thanks, you too!',
      sendIn: '2024-06-15T09:11:00Z'
    },
  ];

}
