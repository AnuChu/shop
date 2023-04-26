import {Component} from '@angular/core';
import {SwitcherService} from "../../shared/service/switcher.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.less']
})
export class ShopComponent {
  constructor(protected switcher: SwitcherService) {}
}
