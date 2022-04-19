import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogcmp',
  templateUrl: './dialogcmp.component.html',
  styleUrls: ['./dialogcmp.component.scss'],
})
export class DialogcmpComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  name = '';
  ngOnInit(): void {
    this.name = this.data.name;
  }
}
