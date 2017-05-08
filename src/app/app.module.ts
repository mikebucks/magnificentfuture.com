import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { BrandComponent } from './brand/brand.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDrbPf94Qhd28VtnJu2mJTFiyw36RGA3jg",
  authDomain: "magnificentfuture-a4d0c.firebaseapp.com",
  databaseURL: "https://magnificentfuture-a4d0c.firebaseio.com",
  projectId: "magnificentfuture-a4d0c",
  storageBucket: "magnificentfuture-a4d0c.appspot.com",
  messagingSenderId: "216192365258"
};

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
