import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShopComponent} from './shop.component';
import {CartComponent} from './components/cart/cart.component';
import {CardComponent} from './components/card/card.component';
import {ProductsComponent} from './components/products/products.component';
import {HeaderComponent} from './components/header/header.component';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiLabelModule, TuiScrollbarModule,
  TuiSvgModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import {
  TuiInputCountModule,
  TuiInputModule,
  TuiIslandModule,
  TuiMarkerIconModule,
  TuiSelectModule
} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CartFormComponent} from './components/cart-form/cart-form.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {TuiCurrencyPipeModule} from "@taiga-ui/addon-commerce";


@NgModule({
  declarations: [
    ShopComponent,
    CartComponent,
    CardComponent,
    ProductsComponent,
    HeaderComponent,
    CartFormComponent
  ],
  exports: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    TuiSvgModule,
    TuiMarkerIconModule,
    TuiButtonModule,
    TuiIslandModule,
    TuiLabelModule,
    TuiInputCountModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiInputModule,
    TuiSelectModule,
    FormsModule,
    TuiDataListModule,
    TuiScrollbarModule,
    ScrollingModule,
    TuiCurrencyPipeModule
  ]
})
export class ShopModule {
}
