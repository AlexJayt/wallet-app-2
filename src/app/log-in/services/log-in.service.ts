import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class LogInService {
  // API`s URL
  private loginUrl = "/api/authorization";
  // private loginUrl = "https://demo.sdk.finance/api/rest/authorization"; 

  constructor(private http: Http) { }

  login(login) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.loginUrl, JSON.stringify(login), options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    //console.log(errMsg);
    //alert(errMsg);
    return Observable.throw(errMsg);
  }
}
