import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-posts',
  templateUrl: './form-posts.component.html',
  styleUrls: ['./form-posts.component.css']
})
export class FormPostsComponent implements OnInit {
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
