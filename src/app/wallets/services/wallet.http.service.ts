import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../auth.service'
import 'rxjs/Rx';

import { Wallet } from '../classes/wallet'

@Injectable()
export class WalletHttpService {
  // private walletsUrl = "https://sandbox.sdk.finance/api/rest/coin";
  private walletsUrl = "/api/coin";

  constructor(private http: Http, private auth: AuthService) { }


  getWallets() {
    let token = this.auth.getToken();
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization','TOKEN ' + token);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.walletsUrl, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addWallet(wallet): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    //headers.append('Authorization','TOKEN '+token);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.walletsUrl, JSON.stringify(wallet), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteWallet(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url = `${this.walletsUrl}/${id}`;
    console.log(id);
    return this.http.delete(url, options)
      //.map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }
}
