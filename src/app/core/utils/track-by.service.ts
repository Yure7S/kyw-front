import { Injectable, TrackByFunction } from '@angular/core';
import { Sidebar } from '../model/sidebar.interface';

@Injectable({
  providedIn: 'root'
})
export class TrackByService {

  public track(index: number, item: any): TrackByFunction<any> {
    return item.id
  }

  public itemSideBarTrack(): TrackByFunction<Sidebar> {
    return (index: number, item: Sidebar) => item.content
  }
}
