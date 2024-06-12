import { HttpErrorResponse, HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorResponse } from '../../model/error-response.interface';

export const ErrorHandlingInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(
    catchError((error: HttpErrorResponse) =>
      throwError(() => !(error.status == (HttpStatusCode.Unauthorized, HttpStatusCode.Forbidden))
        ? <ErrorResponse>error.error
        : error
      ))
  )
};
