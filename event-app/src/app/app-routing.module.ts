import { BilleterieComponent } from './billeterie/billeterie.component';
import { SocialComponent } from './social/social.component';
import { ArtisteDetailComponent } from './artiste-detail/artiste-detail.component';
import { MapComponent } from './map/map.component';
import { ConcertsSabComponent } from './concerts-sab/concerts-sab.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcertsDomComponent } from './concerts-dom/concerts-dom.component';


const routes: Routes = [
  {path: 'social', component: SocialComponent },
  {path: 'billeterie', component: BilleterieComponent },
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  {path: 'map', component: MapComponent },
  {path: 'concerts', component: ConcertsComponent},
  {path: 'concerts/vendredi', component: ConcertsComponent},
  {path: 'concerts/samedi', component: ConcertsSabComponent},
  {path: 'concerts/dimanche', component: ConcertsDomComponent},
  {path: 'concerts/:id', component: ArtisteDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
