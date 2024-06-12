import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, shareReplay, switchMap } from 'rxjs';
import { Status } from 'src/app/core/enums/status.enum';
import { Task } from 'src/app/core/model/task.interface';
import { User } from 'src/app/core/model/user.interface';
import { TaskService } from 'src/app/core/service/task.service';

@Component({
  selector: 'app-project-task-info',
  templateUrl: './project-task-info.component.html',
  styleUrls: ['./project-task-info.component.scss']
})
export class ProjectTaskInfoComponent implements OnInit {
  taskService = inject(TaskService)
  activatedRoute = inject(ActivatedRoute)

  $task?: Observable<Task>
  statusEnum: typeof Status = Status

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

  ngOnInit(): void {
    this.$task = this.activatedRoute.parent?.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const taskId = params.get('taskId')?.toString() ?? ''
        return this.taskService.getById(taskId)
      }), shareReplay()
    )
  }
}
