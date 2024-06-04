import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Status } from 'src/app/core/enums/status.enum';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {
  temp = new FormControl()
  statusEnum: typeof Status = Status
}
