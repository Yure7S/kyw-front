import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CurrentUserService } from '../../utils/current-user.service';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const currentUserService = inject(CurrentUserService)
  return currentUserService.onlyLoggedInd('Você precisa estar logado para acessar esta página');
};
