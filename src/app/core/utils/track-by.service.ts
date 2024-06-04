import { Injectable, TrackByFunction } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackByService {

  public track(index: number, item: any): TrackByFunction<any> {
    return item.id
  }
}
