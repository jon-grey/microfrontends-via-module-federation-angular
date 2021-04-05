import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiLibService {
  public event = new BehaviorSubject<String>('init');
  constructor() { }
}
