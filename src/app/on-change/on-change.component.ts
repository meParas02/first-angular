import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.scss'],
})
export class OnChangeComponent implements OnInit {
  constructor() {}
  displayVal = '';
  displayVal2 = '';
  addClass = false;
  addId = false;
  marginLeft = '10px';

  ngOnInit(): void {}

  onChangeData(val: string) {
    this.displayVal = val;
    this.addId = !this.addId;
  }

  onClickData(val: string) {
    this.displayVal2 = val;
    this.addClass = !this.addClass;
  }
}
