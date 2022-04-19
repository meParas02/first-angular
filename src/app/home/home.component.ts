import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dialogcmp2Component } from '../dialogcmp2/dialogcmp2.component';

@Component({
  selector: 'app-home',
  template: ` <p>home works!</p>
    <mat-form-field appearance="fill">
      <mat-label>What's your name?</mat-label>
      <input matInput [(ngModel)]="name" /> </mat-form-field
    >&nbsp;
    <button mat-raised-button (click)="openDialog()">Pick one</button>&nbsp;
    <span>{{ city }} {{ pincode }} </span>`,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  name: string = '';
  city: string = '';
  pincode: string = '';
  openDialog() {
    const dialogRef = this.dialog.open(Dialogcmp2Component, {
      width: '250px',
      data: { name: this.name, city: this.city, pincode: this.pincode },
    });

    dialogRef.afterClosed().subscribe((res) => {
      this.city = res.city;
      this.pincode = res.pincode;
    });
  }
}
