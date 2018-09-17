import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from "@angular/common/http";
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {VotePage} from '../pages/vote/vote';
import {LoginPage} from '../pages/login/login';
import {ResultatPage} from '../pages/resultat/resultat';
import {PosteListPage} from '../pages/poste-list/poste-list';
import { CandidatByPostProvider } from '../providers/candidat-by-post/candidat-by-post';
import { VoteProvider } from '../providers/vote/vote';
import { LoginProvider } from '../providers/login/login';
import { IncPosProvider } from '../providers/inc-pos/inc-pos';
import { UserByIdProvider } from '../providers/user-by-id/user-by-id';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VotePage,
    LoginPage,
    ResultatPage,
    PosteListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VotePage,
    LoginPage,
    ResultatPage,
    PosteListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CandidatByPostProvider,
    VoteProvider,
    LoginProvider,
    IncPosProvider,
    UserByIdProvider
  ]
})
export class AppModule {}
