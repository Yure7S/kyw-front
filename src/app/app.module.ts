import { APP_INITIALIZER, NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/guard/interceptor/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { ErrorHandlingInterceptor } from './core/guard/interceptor/error-handling.interceptor';
import { CurrentUserService } from './core/utils/current-user.service';
import { RefreshTokenInterceptor } from './core/guard/interceptor/refresh-token.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
      progressBar: true,
      toastClass: 'toast ngx-toastr',
      maxOpened: 5
    }),
  ],
  providers: [
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        RefreshTokenInterceptor,
        ErrorHandlingInterceptor,
      ]),
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        const currentUserService = inject(CurrentUserService)
        return () => currentUserService.setCurrentUser()
      },
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
