import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoriesPage } from '../pages/categories/categories'
import { TabsPage } from '../pages/tabs/tabs'
import { FavoritesPage } from '../pages/favorites/favorites'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    CategoriesPage,
    FavoritesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    CategoriesPage,
    FavoritesPage
  ],
  providers: [
    StatusBar,
      SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
