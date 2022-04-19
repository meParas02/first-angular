import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogcmpComponent } from '../dialogcmp/dialogcmp.component';
import { Dialogcmp3Component } from '../dialogcmp3/dialogcmp3.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  city = '';
  pincode = '';
  name = '';
  subject = {
    code: 34,
    name: 'maths',
  };
  openDialog() {
    const dialofRef = this.dialog.open(DialogcmpComponent, {
      data: { city: this.city, pincode: this.pincode, name: this.name },
    });

    dialofRef.afterClosed().subscribe((res) => {
      this.city = res.city;
      this.pincode = res.pincode;
    });
  }
  openDialog2() {
    const dialofRef = this.dialog.open(Dialogcmp3Component, {
      data: { subject: this.subject },
    });

    dialofRef.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }

  users = [
    {
      name: 'Anil',
      phone: '1111',
      socialAccounts: ['facebook', 'insta', 'gmail'],
    },
  ];
}
