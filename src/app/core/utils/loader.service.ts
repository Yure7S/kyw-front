import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject(false)

  public show() {
    this.loadingSubject.next(true)
  }

  public hide() {
    this.loadingSubject.next(false)
  }

  public get isLoading(): boolean {
    return this.loadingSubject.value;
  }
}
