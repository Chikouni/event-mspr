import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { ConcertsComponent } from './concerts/concerts.component';
import { MapComponent } from './map/map.component';
import { ConcertsSabComponent } from './concerts-sab/concerts-sab.component';
import { ConcertsDomComponent } from './concerts-dom/concerts-dom.component';
import { ArtisteDetailComponent } from './artiste-detail/artiste-detail.component';
import { SocialComponent } from './social/social.component';
import { BilleterieComponent } from './billeterie/billeterie.component';

@NgModule({
  declarations: [
    AppComponent,
    ConcertsComponent,
    MapComponent,
    ConcertsSabComponent,
    ConcertsDomComponent,
    ArtisteDetailComponent,
    SocialComponent,
    BilleterieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
