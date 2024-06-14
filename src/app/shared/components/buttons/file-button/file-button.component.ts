import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

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

  @ViewChild('input', { static: true }) input!: ElementRef

  onFileInput(event: any) {
    const file: File = event.target?.files[0]
    this.addFile.emit(file)
    this.input.nativeElement.value = ''
  }
}
