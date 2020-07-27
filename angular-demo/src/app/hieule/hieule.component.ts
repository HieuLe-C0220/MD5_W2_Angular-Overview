import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hieule',
  templateUrl: './hieule.component.html',
  styleUrls: ['./hieule.component.css']
})
export class HieuleComponent implements OnInit {
  fontSize = 14;

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onChange(value) {
    this.fontSize = value;
  }
}
