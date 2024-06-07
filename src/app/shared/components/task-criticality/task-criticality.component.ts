import { ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { Criticality } from 'src/app/core/enums/criticality.enum';

@Component({
  selector: 'app-task-criticality',
  templateUrl: './task-criticality.component.html',
  styleUrls: ['./task-criticality.component.scss']
})
export class TaskCriticalityComponent {
  @Input({ required: true }) criticality!: string

  changeDetector = inject(ChangeDetectorRef)

  criticalityEnum: typeof Criticality = Criticality
  translatedStatus?: string

  criticalityTranslator: { [key: string]: string } = {
    [Criticality.Medium]: 'Importante',
    [Criticality.High]: 'Urgente',
    [Criticality.Low]: 'Normal',
  }

  ngAfterViewInit(): void {
    this.translatedStatus = this.criticalityTranslator[this.criticality]
    this.changeDetector.detectChanges()
  }
}
