import { EventModel } from './../global/event.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-concerts-sab',
  templateUrl: './concerts-sab.component.html',
  styleUrls: ['./concerts-sab.component.scss']
})
export class ConcertsSabComponent implements OnInit {

  events: EventModel[] = [];

  hour = false;
  lieu = false;
  rencontres = false;

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
    this.http.get<[]>('https://mspr.chloe-gautreau.com/wp-json/wp/v2/event?per_page=100').subscribe(resEvents => {
      if(resEvents){
        resEvents.forEach(event => {
          const id = event.id;
          const name = event.acf.artiste_name;
          const description = event.acf.artiste_description;
          const image = event.acf.artiste_image;
          const type = event.acf.artiste_type;
          const start_date_date = event.acf.artiste_start_date;
          const end_date_date = event.acf.artiste_end_date;
          const stage = event.acf.stage_name;
          const start_date = start_date_date.split(' ');
          const end_date = end_date_date.split(' ');
          const start_hour_hour = start_date[1].split(':');
          const start_hour = start_hour_hour[0] + start_hour_hour[1];
          if(start_date[0] === '13/06/2020'){
            this.events.push({id, name, description, image, type, start_date, start_hour, end_date, stage});
          }
        });
      }
    })
  }

  byHour(){
    this.lieu = false;
    this.rencontres = false;
    this.hour = true;
    this.events.sort((a,b)=>a.start_hour - b.start_hour);
    console.log(this.events);
  }

  byLieu(){
    this.lieu = true;
  this.rencontres = false;
    this.hour = false;
  }

  goVendredi(){
    this.router.navigate(['concerts/vendredi']);
  }

  goDimanche(){
    this.router.navigate(['concerts/dimanche']);
  }

}
