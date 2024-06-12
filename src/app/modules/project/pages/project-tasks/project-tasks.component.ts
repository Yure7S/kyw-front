import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from 'src/app/core/enums/status.enum';
import { GetterResponse } from 'src/app/core/model/getter-response.interface';
import { Task } from 'src/app/core/model/task.interface';
import { TaskService } from 'src/app/core/service/task.service';
import { TrackByService } from 'src/app/core/utils/track-by.service';

@Component({
  selector: 'app-project-tasks',
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.scss']
})
export class ProjectTasksComponent implements OnInit {
  taskService = inject(TaskService)
  trackByService = inject(TrackByService)
  
  statusEnum: typeof Status = Status
  taskList$?: Observable<GetterResponse<Task[]>>

  ngOnInit(): void {
    this.taskList$ = this.taskService.getAll()
    this.taskList$.subscribe(console.log)
  }
}
