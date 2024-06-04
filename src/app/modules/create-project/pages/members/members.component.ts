import { Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Status } from 'src/app/core/enums/status.enum';
import { TrackByService } from 'src/app/core/utils/track-by.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {
  trackByService = inject(TrackByService)

  emailControl = new FormControl('', [Validators.required])
  statusEnum: typeof Status = Status

  memberEmailList: string[] = [
    'teste@gmail.com',
    'outroemail@gmail.com',
    'joaoteste@gmail.com'
  ]

  removeEmail(email: string): void {
    this.memberEmailList = this.memberEmailList.filter(item => item != email)
  } 
  
  addEmail(): void {
    if(this.emailControl.valid) {
      this.memberEmailList.push(this.emailControl.value!)
      this.emailControl.reset()
    }
  } 
}
