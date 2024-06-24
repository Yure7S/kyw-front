import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { MessageResponse } from 'src/app/core/model/message-response.model';
import { Message } from 'src/app/core/model/message.model';
import { MessageService } from 'src/app/core/service/message.service';
import { ProjectService } from 'src/app/core/service/project.service';
import { ChatService } from 'src/app/core/utils/chat.service';
import { CurrentUserService } from 'src/app/core/utils/current-user.service';

@Component({
  selector: 'app-project-chat',
  templateUrl: './project-chat.component.html',
  styleUrls: ['./project-chat.component.scss']
})
export class ProjectChatComponent implements AfterViewInit, OnDestroy {
  chatService = inject(ChatService)
  currentUserService = inject(CurrentUserService)
  messageService = inject(MessageService)
  projectService = inject(ProjectService)
  activatedRoute = inject(ActivatedRoute)
  route = inject(Router)

  projectId: string = this.activatedRoute.parent?.snapshot.paramMap.get('projectId') ?? ''
  currentUser = this.currentUserService.currentUserSig()

  @ViewChild('boxMessages', { static: true }) boxMessages!: ElementRef
  
  messageControl: FormControl = new FormControl()
  messagesList$?: Observable<MessageResponse[]>

  ngAfterViewInit(): void {
    this.messagesList$ = this.projectService.getMessages(this.projectId)
    this.chatService.connect()
    this.messageService.getRecentMessages(this.projectId, () => this.getMessages())
    setTimeout(() => {
    }, 500);
  }

  private getMessages(): void {
    this.messagesList$ = this.projectService.getMessages(this.projectId)
  }

  ngOnDestroy(): void {
    this.chatService.disconnect()
  }

  isFirst(index: number): boolean {
    //return this.messagesList[index].sender.userId !== this.messagesList[index--].sender.userId
    return false
  }

  send() {
    this.chatService.send(this.projectId, this.messageControl.value)
    this.messageControl.reset()
    this.getMessages()
  }

}
