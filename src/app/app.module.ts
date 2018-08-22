import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { PlayingPage } from '../pages/playing/playing';
import { TabsPage } from '../pages/tabs/tabs';
import { InicioPage } from '../pages/inicio/inicio';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WordsProvider } from '../providers/words/words';
import { ResultsPage } from '../pages/results/results';
import { HttpModule } from '../../node_modules/@angular/http';
import { TimePage } from '../pages/time/time';
import { CountdownPage } from '../pages/countdown/countdown';
import { ResultsListPage } from '../pages/results-list/results-list';
import { PlayingBoxComponent } from '../components/playing-box/playing-box';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    PlayingPage,
    TabsPage,
    InicioPage,
    ResultsPage,
    TimePage,
    CountdownPage,
    ResultsListPage,
    PlayingBoxComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    PlayingPage,
    TabsPage,
    InicioPage,
    ResultsPage,
    TimePage,
    CountdownPage,
    ResultsListPage,
    PlayingBoxComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WordsProvider,
  ]
})
export class AppModule {}
