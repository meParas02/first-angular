import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogcmp2',
  templateUrl: './dialogcmp2.component.html',
  styleUrls: ['./dialogcmp2.component.scss'],
})
export class Dialogcmp2Component implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  name: string = '';

  ngOnInit(): void {
    this.name = this.data.name;
  }
}
