import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  drawerState$: Subject<boolean> = new Subject();

  constructor() {}
}
