import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject(false)
  public isLoading$: Observable<boolean> = this.loadingSubject.asObservable()

  public show() {
    this.loadingSubject.next(true)
  }

  public hide() {
    this.loadingSubject.next(false)
  }
}
