import { HttpClient, HttpErrorResponse, HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { catchError, of, switchMap, throwError } from 'rxjs';
import { ErrorResponse } from '../../model/error-response.interface';
import { inject } from '@angular/core';
import { CurrentUserService } from '../../utils/current-user.service';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';

export const RefreshTokenInterceptor: HttpInterceptorFn = (req, next) => {

  const currentUserService = inject(CurrentUserService)
  const toastService = inject(ToastrService)
  const authService = inject(AuthService)

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === HttpStatusCode.Forbidden) {
        return authService.refreshToken(currentUserService.currentUserSig()?.refreshToken!).pipe(
          switchMap(r => {
            currentUserService.currentUserSig.mutate(v => v!.refreshToken = r.refreshToken)
            currentUserService.setLocalCurrentUser()
            return next(req.clone({ headers: req.headers.set('Authorization', `Bearer ${r.accessToken}`) }))
          }),
          catchError(error => {
            toastService.warning('Sua sessão expirou!', 'Alerta', { timeOut: 5000 })
            currentUserService.logOut()
            return of(error)
          })
        )
      } else return throwError(() => error)
    })
  )
};
