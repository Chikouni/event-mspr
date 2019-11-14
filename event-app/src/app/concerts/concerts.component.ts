import { EventModel } from './../global/event.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.scss']
})
export class ConcertsComponent implements OnInit {
  events: EventModel[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<[]>('https://mspr.chloe-gautreau.com/wp-json/wp/v2/event').subscribe(resEvents => {
      if(resEvents){
        resEvents.forEach(event => {
          const name = event.acf.artiste_name;
          const description = event.acf.artiste_description;
          const image = event.acf.artiste_image;
          const type = event.acf.artiste_type;
          const start_date = event.acf.artiste_start_date;
          const end_date = event.acf.artiste_end_date;
          const stage = event.acf.stage_name;
          this.events.push({name, description, image, type, start_date, end_date, stage});
        });
      }
    })
  }

}
