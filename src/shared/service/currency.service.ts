import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

let myHeaders = new HttpHeaders({"apikey": "wvfLeXrVQUphfdNU4EIQueaU7mvdj43P"});

const host = 'https://api.apilayer.com/exchangerates_data/latest?symbols=&base=USD'

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currencies: Object = {}

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Object>(host, {headers: myHeaders}).subscribe((res) => {
      this.currencies = res
    })
  }


  getRate(currency: string): number {
    // @ts-ignore
    const t = Object.entries(this.currencies.rates).filter(c => c[0] === currency)
    if (t.length != 0) {
      return t[0][1] as number
    }
    return 1
  }

}
