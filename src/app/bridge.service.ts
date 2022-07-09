import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {
  @Output() imageResult: EventEmitter<string> = new EventEmitter();
  constructor() { }
}
