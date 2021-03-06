import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { IonicStorageModule } from "@ionic/storage";
import { CashFlowModalPageModule } from "./pages/cash-flow-modal/cash-flow-modal.module";
import { FilterPopoverPageModule } from "./pages/filter-popover/filter-popover.module";

import { DatePipe } from '@angular/common';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    CashFlowModalPageModule,
    FilterPopoverPageModule,
  ],
  providers: [
    DatePipe,
    AdMobFree,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
