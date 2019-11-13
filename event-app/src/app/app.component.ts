import { EventModel } from './global/event.model';
import { PushModel } from './global/push.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'event-app';
  alert = true;

  pushs: PushModel[] = [];
  events: EventModel[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get<[]>('https://mspr.chloe-gautreau.com/wp-json/wp/v2/push').subscribe(resPushs => {
      if(resPushs){
        resPushs.forEach(push => {
          const name = push.acf.push_name; 
          const description = push.acf.push_description;
          this.pushs.push({name, description});
        });
      }
    });
    this.http.get<[]>('https://mspr.chloe-gautreau.com/wp-json/wp/v2/event').subscribe(resEvents => {
      if(resEvents){
        resEvents.forEach(event => {
          const name = event.acf.artiste_name;
          const description = event.acf.artiste_description;
          const image = event.acf.artiste_image;
          const start_date = event.acf.artiste_start_date;
          const end_date = event.acf.artiste_end_date;
          const stage = event.acf.stage_name;
          this.events.push({name, description, image, start_date, end_date, stage});
        });
      }
    })
  }

  close(push) {
    this.pushs.splice(this.pushs.indexOf(push), 1);
  }

}
