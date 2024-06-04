import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-profile-image-input',
  templateUrl: './profile-image-input.component.html',
  styleUrls: ['./profile-image-input.component.scss']
})
export class ProfileImageInputComponent {
  @Output() removeFile: EventEmitter<any> = new EventEmitter()
  @Output() addFile: EventEmitter<File> = new EventEmitter()
  @Input({ required: true }) idValue!: string
  @Input() disabled: boolean = false
  @Input() minHeight: string = ''
  @Input() currentFile?: File

  onFileDropped(event: any) {
    const file: File = event instanceof DragEvent
      ? event.dataTransfer?.files[0]!
      : event.target?.files[0]
    this.currentFile = file
    this.addFile.emit(this.currentFile)
  }

  onRemoveFile() {
    this.currentFile = undefined
    this.removeFile.emit()
  }
}
