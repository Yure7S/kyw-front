import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CurrentUserService } from '../../utils/current-user.service';
import { environment } from 'src/environments/environment.development';
import { LoaderService } from '../../utils/loader.service';
import { EMPTY, finalize } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const currentUserService = inject(CurrentUserService)
  const loaderService = inject(LoaderService)
  const apiUrl: string = environment.apiUrl

  const routerWhiteList: string[] = [
    `${apiUrl}/auth/signin`,
    `${apiUrl}/auth/refreshtoken`,
    `${apiUrl}/users/register`
  ]

  if(loaderService.isLoading) return EMPTY
  loaderService.show()

  return next(!routerWhiteList.includes(req.url)
    ? req.clone({ headers: req.headers.set('Authorization', `Bearer ${currentUserService.currentUserSig()?.token}`) })
    : req).pipe(finalize(() => loaderService.hide()));
};
