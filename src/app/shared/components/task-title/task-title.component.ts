import { Component, Input } from '@angular/core';
import { Task } from 'src/app/core/model/task.interface';

@Component({
  selector: 'app-task-title',
  templateUrl: './task-title.component.html',
  styleUrls: ['./task-title.component.scss']
})
export class TaskTitleComponent {
  @Input({required: true}) task?: Task
}
