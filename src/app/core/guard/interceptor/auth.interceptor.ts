import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CurrentUserService } from '../../utils/current-user.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const currentUserService = inject(CurrentUserService)
  const reqClone = req.clone({ headers: req.headers.set('Authorization', `Bearer ${currentUserService.currentUserSig()?.token}`) })
  return next(reqClone);
};
