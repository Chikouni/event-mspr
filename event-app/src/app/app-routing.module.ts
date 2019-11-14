import { ConcertsSabComponent } from './concerts-sab/concerts-sab.component';
import { HomeComponent } from './home/home.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcertsDomComponent } from './concerts-dom/concerts-dom.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'concerts/vendredi', component: ConcertsComponent},
  {path: 'concerts/samedi', component: ConcertsSabComponent},
  {path: 'concerts/dimanche', component: ConcertsDomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
