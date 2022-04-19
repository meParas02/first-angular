import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() data: any = '';

  title = 'first-app';
  apiData = 'Json data';
  getData() {
    return 'Api dataaaa';
  }
}
