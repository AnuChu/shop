import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../interface/IProduct";

const host = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(host);
  }

}
