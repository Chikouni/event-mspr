import { HttpClient } from '@angular/common/http';
import { NewsEvent } from './../global/news.model';
import { PushModel } from './../global/push.model';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  alert = true;

  pushs: PushModel[] = [];
  news: NewsEvent[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    var layerstage = L.layerGroup([]);
    var layerrencontre = L.layerGroup([]);
    var layerbuvette = L.layerGroup([]);
    var layerboutique = L.layerGroup([]);
    var layerpmr = L.layerGroup([]);
    var layerstand = L.layerGroup([]);
    var layerobjet_perdu = L.layerGroup([]);
    var layerwc = L.layerGroup([]);
    var layerparking = L.layerGroup([]);
    var todoLayers = L.layerGroup([]);

    this.http.get<[]>('https://mspr.chloe-gautreau.com/wp-json/wp/v2/push').subscribe(resPushs => {
      if(resPushs){
        resPushs.forEach(push => {
          const name = push.acf.push_name;
          const description = push.acf.push_description;
          this.pushs.push({name, description});
        });
      }
    });

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
    })


    this.http.get<[]>('https://mspr.chloe-gautreau.com/wp-json/wp/v2/scene?per_page=100').subscribe(resScenes => {
      if(resScenes){
        resScenes.forEach(scene => {
          const name = scene.acf.scene_name;
          const latitude = scene.acf.scene_latitude;
          const longitude = scene.acf.scene_longitude;
          const type = scene.acf.scene_type;
          const scene_description = scene.acf.scene_type_description;
          const buvette_type = scene.acf.scene_type_category;

          var LeafIcon = L.Icon.extend({
            options: {
              iconSize: [20, 20]
            }
          });
          var icon = new LeafIcon();
          if (type === 'buvette' && buvette_type === 'restaurant') {
            const poukie = './../assets/icons/restaurant.svg';
             // @ts-ignore
            icon = new LeafIcon({iconUrl: poukie});
          } else {
            // @ts-ignore
             icon = new LeafIcon({iconUrl: './../assets/icons/' + type + '.svg'});
          }
          var popup = ('<strong>' + name + '</strong>' + '<br>' + scene_description);
          var temp = L.marker([latitude, longitude], {icon: icon}).bindPopup(popup, {
            maxWidth: 125,
            closeOnClick: true
          }).addTo(myfrugalmap).openPopup();
          if (type === 'stage') {
            temp.addTo(layerstage);
            temp.addTo(todoLayers);
          } else if (type === 'rencontre') {
            temp.addTo(layerrencontre);
            temp.addTo(todoLayers);
          } else if (type === 'buvette') {
            temp.addTo(layerbuvette);
            temp.addTo(todoLayers);
          } else if (type === 'boutique') {
            temp.addTo(layerboutique);
            temp.addTo(todoLayers);
          } else if (type === 'pmr') {
            temp.addTo(layerpmr);
            temp.addTo(todoLayers);
          } else if (type === 'stand') {
            temp.addTo(layerstand);
            temp.addTo(todoLayers);
          } else if (type === 'objet_perdu') {
            temp.addTo(layerobjet_perdu);
            temp.addTo(todoLayers);
          } else if (type === 'wc') {
            temp.addTo(layerwc);
            temp.addTo(todoLayers);
          } else if (type === 'parking') {
            temp.addTo(layerparking);
            temp.addTo(todoLayers);
          }
        });
      }
    })

       // Carte intéractive
    const myfrugalmap = L.map('frugalmap',{
      layers:[todoLayers, layerstage, layerparking, layerwc, layerobjet_perdu, layerstand, layerpmr, layerboutique, layerbuvette, layerrencontre]
    }).setView([48.854437, 2.244597], 14);
     L.tileLayer('https://api.mapbox.com/styles/v1/chikouni/ck2yr9rfd09q01cl4j9ey7wom/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
       accessToken: 'pk.eyJ1IjoiY2hpa291bmkiLCJhIjoiY2syeW42MTE1MDB0eDNvcG51MGcxNmRkaiJ9.WCI0ri-LOezjdSzJoFtQRg',
       minZoom: 14,
     attribution: 'NationSounds'
     }).addTo(myfrugalmap);
    myfrugalmap.locate();

    var overlayMaps = {
      'Tous': todoLayers,
      'Scènes': layerstage,
      'Rencontres': layerrencontre,
      'Buvettes': layerbuvette,
      'Boutiques': layerboutique,
      'Wc': layerwc,
      'Accès PMR': layerpmr,
      "Stands d'infos": layerstand,
      'Objets Perdus/Trouvés': layerobjet_perdu,
      'Parkings': layerparking
    };
    L.control.layers(null, overlayMaps).addTo(myfrugalmap);

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
