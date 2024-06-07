import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Input() placeholder?: string
  @Input() fullWidth: boolean = false
  @Input() type?: string
}
