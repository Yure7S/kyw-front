import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CurrentUserService } from '../../utils/current-user.service';
import { environment } from 'src/environments/environment.development';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const currentUserService = inject(CurrentUserService)
  const apiUrl: string = environment.apiUrl

  const routerWhiteList: string[] = [
    `${apiUrl}/auth/signin`,
    `${apiUrl}/auth/refreshtoken`
  ]

  return next(!routerWhiteList.includes(req.url)
    ? req.clone({ headers: req.headers.set('Authorization', `Bearer ${currentUserService.currentUserSig()?.token}`) })
    : req);
};
