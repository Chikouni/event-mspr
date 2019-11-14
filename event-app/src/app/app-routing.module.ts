import { MapComponent } from './map/map.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  {path: 'map', component: MapComponent },
  {path: 'concerts', component: ConcertsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
