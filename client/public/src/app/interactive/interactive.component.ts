import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.css']
})
export class InteractiveComponent implements OnInit {
  show: boolean = false;
  color: string;
  meerkat: string;
  display: boolean = false;

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

  onClickColor(name: string): void { 
    this.show = true;
    for(let i = 0; i < this.meerkats.length; i++){
      var meer = this.meerkats[i].name;
      if(meer == name){
        var color = this.meerkats[i].favorite_color;
        this.meerkat = meer;
        this.color = color;
        this.display = true;
      }
    }
  }
}
