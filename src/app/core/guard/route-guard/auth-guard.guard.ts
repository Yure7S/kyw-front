import { CanActivateFn } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  console.log('***** authGuardGuard ativo *****')
  return true;
};
