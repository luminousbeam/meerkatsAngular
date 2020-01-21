import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'public';
  show: boolean = false;
   constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getMeerkatsFromService();
  }
  
  meerkats: JSON[];
  getMeerkatsFromService(){
     let observable = this._httpService.getMeerkats();
     observable.subscribe(data => {
        console.log("Got our merkats!", data)
        this.meerkats = data['arr'];
        console.log(this.meerkats);
     });
  }

  onClickMeerkats(): void { 
    console.log(`Click event is working`);
    this.show = true;
  }
}
