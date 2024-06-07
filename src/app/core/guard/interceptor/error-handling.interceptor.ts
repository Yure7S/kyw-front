import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorResponse } from '../../model/error-response.interface';

export const ErrorHandlingInterceptor: HttpInterceptorFn = (req, next) => {


  console.log('**************error handling interceptor******************')

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => throwError(() => <ErrorResponse>error.error))
  )
};
