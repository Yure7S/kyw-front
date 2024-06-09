import { AfterViewInit, ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { TaskStatus } from 'src/app/core/enums/TaskStatus.enum';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.scss']
})
export class TaskStatusComponent implements AfterViewInit {
  @Input({ required: true }) status!: string

  changeDetector = inject(ChangeDetectorRef)

  taskStatusEnum: typeof TaskStatus = TaskStatus
  translatedStatus?: string

  statusTranslator: { [key: string]: string } = {
    [TaskStatus.Open]: 'Aberta',
    [TaskStatus.Closed]: 'Completa',
    [TaskStatus.Pending]: 'Pendente',
  }

  ngAfterViewInit(): void {
    this.translatedStatus = this.statusTranslator[this.status]
    this.changeDetector.detectChanges()
  }
}
