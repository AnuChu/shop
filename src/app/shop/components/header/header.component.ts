import { Component } from '@angular/core';
import {tuiIconShoppingBag, tuiIconShoppingCart} from "@taiga-ui/icons";
import {SwitcherService} from "../../../../shared/service/switcher.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  readonly tuiIconShoppingCart = tuiIconShoppingCart;
  readonly tuiIconShoppingBag = tuiIconShoppingBag;

  constructor(protected switcher: SwitcherService) {}
}
