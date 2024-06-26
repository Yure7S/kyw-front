import { ComponentRef, Injectable, ViewContainerRef, inject } from '@angular/core';
import { ErrorResponse } from '../model/error-response.interface';
import { Subject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private resolver = inject(ViewContainerRef)

  private modalResponse: Subject<any> = new Subject()
  private modalComponent?: ComponentRef<any>

  open(options?: any, component?: any, callbackFn?: (response: any) => void) {
    this.modalComponent = this.resolver.createComponent(component)
    this.modalComponent.instance.active = true
    this.modalComponent.instance.close.pipe(take(1)).subscribe(() => this.close())
    this.modalComponent.instance.submit.pipe(take(1)).subscribe((r: any) => {
      callbackFn ? callbackFn(r) : this.submit(r)
    })

    options && Object.keys(options).forEach((value) => {
      this.modalComponent!.instance[value] = options[value]
    })

    this.modalResponse = new Subject()
    return this.modalResponse.asObservable().pipe(take(1))
  }

  close() {
    this.modalResponse.complete()
    const timeToFinishTheAnimation = 250
    this.modalComponent!.instance.active = false
    setTimeout(() => this.resolver.clear(), timeToFinishTheAnimation);
  }

  submit(response: any) {
    if (response instanceof ErrorResponse) {
      this.modalComponent?.instance.setError(response.message)
    } else {
      this.modalResponse.next(response)
      this.close()
    }
  }
}
