import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const host = 'https://restcountries.com/v3.1/all?fields=translations,currencies'

interface Translation {
  official: string
  common: string
}

interface Currency {
  name: string
  symbol: string
}

export interface Country {
  translations: { rus: Translation }
  currencies: Map<string, Currency>
}

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(host);
  }


}
