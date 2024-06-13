import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-button',
  templateUrl: './file-button.component.html',
  styleUrls: ['./file-button.component.scss']
})
export class FileButtonComponent {
  @Input() routerLinkValue?: string;
  @Input() titleValue: string = ''
  @Input() fullWidth?: boolean = false
  @Input() status?: string
  @Output() addFile: EventEmitter<File> = new EventEmitter()
  @Output() onClick: EventEmitter<any> = new EventEmitter()

  onFileDropped(event: any) {
    const file: File = event instanceof DragEvent
      ? event.dataTransfer?.files[0]!
      : event.target?.files[0]
    this.addFile.emit(file)
  }
}
