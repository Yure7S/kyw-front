import { Component, Input } from '@angular/core';
import { Task } from 'src/app/core/model/task.interface';

@Component({
  selector: 'app-sidebar-task-card',
  templateUrl: './sidebar-task-card.component.html',
  styleUrls: ['./sidebar-task-card.component.scss']
})
export class SidebarTaskCardComponent {
  @Input() task!: Task
}
