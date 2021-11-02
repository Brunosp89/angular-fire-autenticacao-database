import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FirelistComponent } from './firelist/firelist.component';
import { IndexComponent } from './index/index.component';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBTDuiN40n-JK4rufVEAg3JrwlP9Vt-Teg',
      authDomain: 'autenticacaoangular-21729.firebaseapp.com',
      databaseURL: 'https://autenticacaoangular-21729.firebaseio.com',
      projectId: 'autenticacaoangular-21729',
      storageBucket: 'autenticacaoangular-21729.appspot.com',
      messagingSenderId: '318141514531',
    }),
    RouterModule.forRoot([
      { path: 'index', component: IndexComponent },
      { path: 'firelist', component: FirelistComponent },
      { path: '', component: HelloComponent },
    ]),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],

  declarations: [
    AppComponent,
    HelloComponent,
    IndexComponent,
    FirelistComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AuthService],
})
export class AppModule {}
