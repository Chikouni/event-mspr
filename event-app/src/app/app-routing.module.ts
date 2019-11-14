import { MapComponent } from './map/map.component';
import { ConcertsSabComponent } from './concerts-sab/concerts-sab.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcertsDomComponent } from './concerts-dom/concerts-dom.component';


const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  {path: 'map', component: MapComponent },
  {path: 'concerts', component: ConcertsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'concerts/vendredi', component: ConcertsComponent},
  {path: 'concerts/samedi', component: ConcertsSabComponent},
  {path: 'concerts/dimanche', component: ConcertsDomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
