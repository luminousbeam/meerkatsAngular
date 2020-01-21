import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getMeerkats();
  }

  getMeerkats(){
    // let tempObservable = this._http.get('/meerkats');
    // tempObservable.subscribe(data => console.log("Got our meerkats!", data));
    return this._http.get('/meerkats');
  }  
}

