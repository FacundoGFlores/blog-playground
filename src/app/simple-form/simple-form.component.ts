import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <input type="text" [(ngModel)]="message">
    <button (click)="update.emit({post:message})">Click me!</button>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  @Input() message;
  @Output() update = new EventEmitter();

  constructor() { }


  ngOnInit() {
  }

}
