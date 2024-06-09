import { Component, Input } from '@angular/core';
import { User } from 'src/app/core/model/user.interface';

@Component({
  selector: 'app-list-of-members',
  templateUrl: './list-of-members.component.html',
  styleUrls: ['./list-of-members.component.scss']
})
export class ListOfMembersComponent {
  @Input() userList?: User[]
}
