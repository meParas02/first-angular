import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  status = 'login Out!';
  birthday = new Date(1999, 11, 2);
  classes = 'special';
  updateLogin(item: string) {
    this.status = item;
  }
}
