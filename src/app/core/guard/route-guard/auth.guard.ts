import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CurrentUserService } from '../../utils/current-user.service';

export const authGuard: CanActivateFn = (route, state) => {

  const currentUserService = inject(CurrentUserService)
  return currentUserService.onlyLoggedInd();
};
