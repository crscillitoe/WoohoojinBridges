import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BoardFormComponent } from './board-form/board-form.component';
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
import { RulesComponent } from './rules/rules.component';
import { StatsComponent } from './stats/stats.component';
import { NormalModeComponent } from './normal-mode/normal-mode.component';
import { OtherModeComponent } from './other-mode/other-mode.component';
import { HashiStandardComponent } from './hashi-standard/hashi-standard.component';
import { RotatingModeOneComponent } from './rotating-mode-one/rotating-mode-one.component';
import { AnnoyingModeComponent } from './annoying-mode/annoying-mode.component';
import { BridgeDeleteComponent } from './bridge-delete/bridge-delete.component';


const appRoutes: Routes = [
    { path: '', component: BoardFormComponent},
    { path: 'mainMenu', component: BoardFormComponent},
    { path: 'normal-mode', component: NormalModeComponent },
    { path: 'rotating-mode', component: RotatingModeOneComponent },
    { path: 'annoying-mode', component: AnnoyingModeComponent },
    { path: 'delete-mode', component: BridgeDeleteComponent },
    { path: 'other-mode', component: OtherModeComponent },
    { path: 'leaderboards', component: LeaderboardsComponent},
    { path: 'rules', component: RulesComponent},
    { path: 'stats', component: StatsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BoardFormComponent,
    LeaderboardsComponent,
    RulesComponent,
    StatsComponent,
    NormalModeComponent,
    OtherModeComponent,
    HashiStandardComponent,
    RotatingModeOneComponent,
    AnnoyingModeComponent,
    BridgeDeleteComponent,
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
