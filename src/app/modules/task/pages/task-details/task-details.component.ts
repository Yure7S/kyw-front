import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskStatus } from 'src/app/core/enums/TaskStatus.enum';
import { Sidebar } from 'src/app/core/model/sidebar.interface';
import { Task } from 'src/app/core/model/task.interface';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {

  task: Task = {
    id: '456',
    status: TaskStatus.Pending,
    criticality: 'HIGH',
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

  $task?: Observable<Task> = of(this.task)

  sidebarContent: Sidebar[] = [
    {
      content: 'Detalhes',
      link: 'detalhes'
    },
    {
      content: 'Chat',
      link: 'chat'
    },
  ]
}
