import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskStatus } from 'src/app/core/enums/TaskStatus.enum';
import { Criticality } from 'src/app/core/enums/criticality.enum';
import { Status } from 'src/app/core/enums/status.enum';
import { Task } from 'src/app/core/model/task.interface';
import { User } from 'src/app/core/model/user.interface';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss']
})
export class TaskInfoComponent {

  statusEnum: typeof Status = Status

  task: Task = {
    id: '456',
    status: TaskStatus.Closed,
    criticality: Criticality.High,
    title: 'Nome da tarefa',
    description: 'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia',
    attachments: '',
    createAt: '2024-08-07T12:10:10.374Z',
    completedAt: '2024-09-07T12:10:10.374Z',
    project: {
      projectId: '',
      name: ''
    },
    attributedTo: {
      userId: '',
      nickname: ''
    },
    pin: false
  }

  userList: User[] = [
    {
      id: '45646',
      nickname: 'João teste',
      email: 'aqueleemail@gmail.com',
      phone: '98988659845',
      notification: [{
        id: 'asdf',
        type: '',
        content: '',
        viewed: false,
        createdAt: ''
      }],
      avatarUrl: ''
    },
    {
      id: '45646',
      nickname: 'João teste',
      email: 'aqueleemail@gmail.com',
      phone: '98988659845',
      notification: [{
        id: '',
        type: '',
        content: '',
        viewed: false,
        createdAt: ''
      }],
      avatarUrl: ''
    },
    {
      id: '45646',
      nickname: 'João teste',
      email: 'aqueleemail@gmail.com',
      phone: '98988659845',
      notification: [{
        id: '',
        type: '',
        content: '',
        viewed: false,
        createdAt: ''
      }],
      avatarUrl: ''
    },
  ]

  $task?: Observable<Task> = of(this.task)
}
