import {NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import {TuiRootModule, TuiAlertModule, TUI_SANITIZER, TuiDialogModule} from "@taiga-ui/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ShopModule} from "./shop/shop.module";
import {TuiMarkerIconModule} from "@taiga-ui/kit";
import {HttpClientModule} from "@angular/common/http";
import {TuiCurrencyPipeModule} from "@taiga-ui/addon-commerce";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiAlertModule,
    TuiMarkerIconModule,
    TuiDialogModule,
    HttpClientModule,
    TuiCurrencyPipeModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
