import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './user-auth/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { InterVsBindingComponent } from './inter-vs-binding/inter-vs-binding.component';
import { OnChangeComponent } from './on-change/on-change.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { NotPageComponent } from './not-page/not-page.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogcmpComponent } from './dialogcmp/dialogcmp.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Dialogcmp2Component } from './dialogcmp2/dialogcmp2.component';
import { Dialogcmp3Component } from './dialogcmp3/dialogcmp3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    InterVsBindingComponent,
    OnChangeComponent,
    UserDetailsComponent,
    SubHeaderComponent,
    TwoWayComponent,
    AboutComponent,
    NotPageComponent,
    HomeComponent,
    DialogcmpComponent,
    Dialogcmp2Component,
    Dialogcmp3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
