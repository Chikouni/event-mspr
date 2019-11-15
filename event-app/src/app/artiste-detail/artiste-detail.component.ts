import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artiste-detail',
  templateUrl: './artiste-detail.component.html',
  styleUrls: ['./artiste-detail.component.scss']
})
export class ArtisteDetailComponent implements OnInit {
id: number;
artist: any;
day: any;
hour: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.http.get('https://mspr.chloe-gautreau.com/wp-json/wp/v2/event/' + this.id).subscribe(resArt => {
      this.artist = resArt;
      console.log(this.artist)
      const day = resArt.acf.artiste_start_date.split(' ');
      this.day = day[0];
      this.hour = day[1];
    })
  }

}
