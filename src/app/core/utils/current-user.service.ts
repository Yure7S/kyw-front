import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, retry, timer, catchError, throwError, tap, EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CurrentUser } from '../model/current-user.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  currentUserSig = signal<CurrentUser | null>(null)

  private toastService = inject(ToastrService)
  private router = inject(Router)

  public setCurrentUser(): void {
    if (!!localStorage.getItem('session')) {
      try {
        const currentUserData = <CurrentUser>JSON.parse(localStorage.getItem('session')!)
        this.currentUserSig.set(currentUserData)
      } catch (error) {
        this.router.navigateByUrl('auth/login')
        this.currentUserSig.set(null)
        localStorage.clear()
      }
    }
  }

  public onlyLoggedInd(toastMessageError?: string): boolean {
    return !!this.currentUserSig() || (
      !!toastMessageError && this.toastService.warning(toastMessageError, "Atenção"),
      this.router.navigateByUrl('auth/login'),
      false
    );
  }
}
