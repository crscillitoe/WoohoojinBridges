import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BoardFormComponent } from './board-form/board-form.component';
import { BoardComponentComponent } from './board-component/board-component.component';
import { RouterModule, Routes } from '@angular/router';
import {    MatFormFieldModule, 
            MatRadioModule,
            MatButtonToggleModule } from '@angular/material';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


const appRoutes: Routes = [
    { path: '', component: BoardFormComponent},
    { path: 'mainMenu', component: BoardFormComponent},
    { path: 'routedPage', component: BoardComponentComponent },
    { path: 'leaderboards', component: LeaderboardsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BoardFormComponent,
    BoardComponentComponent,
    LeaderboardsComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      MatRadioModule,
      MatFormFieldModule,
      MatButtonToggleModule,
      AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: false }
      )
  ],
  exports: [
      MatRadioModule,
      MatFormFieldModule,
      MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }