import { Component, Input } from '@angular/core';
import { Member } from 'src/app/core/model/member.interface';
import { User } from 'src/app/core/model/user.interface';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent {
  @Input() member!: Member
  @Input() fullWidth: boolean = false
}
