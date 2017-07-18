import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <input type="text" [(ngModel)]="message" (keydown)="onKeyDown($event)">
    <button (click)="update.emit({post:message})">Click me!</button>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  @Input() message;
  @Output() update = new EventEmitter();

  constructor() { }

  onKeyDown(key: KeyboardEvent) {
    if (key.keyCode == 13)
      this.update.emit({ post: this.message })
  }

  ngOnInit() {
  }

}
