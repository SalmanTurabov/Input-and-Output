import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
})
export class FooComponent implements OnInit {
  @Input()
  title!: string;

  @Input()
  counter = 0;

  @Output()
  couterChange = new EventEmitter<number>();

  @Output()
  sayHi = new EventEmitter<string>();

  constructor() {
    console.log('constructor', this.title);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.title);
  }

  onSayHi() {
    this.sayHi.emit(this.title + ' Hello');
  }
}
