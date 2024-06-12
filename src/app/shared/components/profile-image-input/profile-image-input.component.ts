import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-image-input',
  templateUrl: './profile-image-input.component.html',
  styleUrls: ['./profile-image-input.component.scss']
})
export class ProfileImageInputComponent implements AfterContentInit {
  @Output() removeFile: EventEmitter<any> = new EventEmitter()
  @Output() addFile: EventEmitter<File> = new EventEmitter()
  @Input({ required: true }) idValue!: string
  @Input() disabled: boolean = false
  @Input() minHeight: string = ''
  @Input() set currentFile(value: File | undefined) {
    this._currentFile = value
    !!this._currentFile && this.updateImageUrl()
  }

  get currentFile(): File | undefined {
    return this._currentFile
  }

  _currentFile?: File
  imageUrl?: string

  onFileDropped(event: any) {
    const file: File = event instanceof DragEvent
      ? event.dataTransfer?.files[0]!
      : event.target?.files[0]
    this.currentFile = file
    this.addFile.emit(this.currentFile)
    this.updateImageUrl();
  }

  onRemoveFile(event: Event) {
    event.preventDefault();
    this.currentFile = undefined
    this.removeFile.emit()
  }

  ngAfterContentInit(): void {
    this.updateImageUrl();
  }

  private updateImageUrl() {
    if (this.currentFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(this.currentFile);
    }
  }
}
