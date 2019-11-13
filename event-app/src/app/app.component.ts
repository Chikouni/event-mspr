import { NewsEvent } from './global/news.model';
import { EventModel } from './global/event.model';
import { PushModel } from './global/push.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

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
  news: NewsEvent[] = [];

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

    this.http.get<[]>('https://mspr.chloe-gautreau.com/wp-json/wp/v2/info').subscribe(resNews => {
      if(resNews){
        resNews.forEach(info => {
          const name = info.acf.info_name;
          const description = info.acf.info_description;
          const isInfo = info.acf.info_or_actu
          const date = info.date;
          this.news.push({name, description, isInfo, date});
        });
      }
      console.log(resNews)
      console.log(this.news)

    })
  

    this.http.get<[]>('https://mspr.chloe-gautreau.com/wp-json/wp/v2/scene').subscribe(resScenes => {
      if(resScenes){
        resScenes.forEach(scene => {
          const name = scene.acf.scene_name;
          const latitude = scene.acf.scene_latitude;
          const longitude = scene.acf.scene_longitude;
          
          
          const iconX = L.icon({
            iconUrl: 'https://cdn0.iconfinder.com/data/icons/glyphpack/52/map-marker-32.png'
          });
          L.marker([latitude, longitude], {icon: iconX}).bindPopup(name).addTo(myfrugalmap).openPopup();
        });
      }
    })

       // Carte intéractive
    const myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 12);
     L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
     attribution: 'Frugal Map',
     id: 'mapbox.dark'
     }).addTo(myfrugalmap);

    //  const icon1 = L.icon({
    //   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    // });
    // L.marker([50.6311634, 3.0599573], {icon: icon1}).bindPopup('Scene 1').addTo(myfrugalmap).openPopup();

    // const icon2 = L.icon({
    //   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    // });
    // L.marker([50.6311634, 3.1599573], {icon: icon2}).bindPopup('Scene 2').addTo(myfrugalmap).openPopup();
  
  }

  close(push) {
    this.pushs.splice(this.pushs.indexOf(push), 1);
  }
  

}
