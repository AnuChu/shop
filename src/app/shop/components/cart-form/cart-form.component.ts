import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CountriesService, Country} from "../../../../shared/service/countries.service";
import {CurrencyService} from "../../../../shared/service/currency.service";

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.less']
})
export class CartFormComponent implements OnInit {

  @Input() total: number
  rate: number = 1
  currencyName: string = 'USD'


  constructor(private countriesService: CountriesService, private currencyService: CurrencyService) {}

  countryNames: string[] = [];
  countries: Country[] = [];

  form = new FormGroup({
    address: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-zА-Яа-яЁё\\s]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    currency: new FormControl(null, Validators.required),
  });

  get address() {
    return this.form.controls.address;
  }

  get name() {
    return this.form.controls.name;
  }

  get email() {
    return this.form.controls.email;
  }

  get currency() {
    return this.form.controls.currency;
  }

  submit(): void {
    this.form.reset();
  }

  ngOnInit(): void {
    this.countriesService.getAll().subscribe(res => {
      this.countries = res
      this.countryNames = res.map(country => country.translations.rus.common).sort()
    })

    this.form.controls.currency.valueChanges.subscribe((value) => {
      const filteredCountries = this.countries.filter(res => res.translations.rus.common === value)
      if (filteredCountries.length != 0) {
        this.currencyName = Object.keys(filteredCountries[0].currencies)[0]
        this.rate = this.currencyService.getRate(this.currencyName)
      }
    })
  }

  protected readonly String = String;
  protected readonly parseFloat = parseFloat;
}
