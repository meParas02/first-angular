import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogcmp3',
  templateUrl: './dialogcmp3.component.html',
  styleUrls: ['./dialogcmp3.component.scss'],
})
export class Dialogcmp3Component implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  code: string = '';
  name: string = '';
  ngOnInit(): void {
    console.log('data', this.data);
    this.code = this.data.subject.code;
    this.name = this.data.subject.name;
  }
}
