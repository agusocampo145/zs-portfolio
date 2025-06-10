import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FotografiaComponent } from './components/fotografia/fotografia.component';
import { Disenos3dComponent } from './components/disenos3d/disenos3d.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'fotografia', component: FotografiaComponent, data: { animation: 'FotoPage' } },
  { path: 'disenos3d', component: Disenos3dComponent, data: { animation: 'DisenoPage' } },
  { path: 'aboutUs', component: AboutUsComponent, data: { animation: 'aboutUsPage' } },
  { path: 'contacto', component: ContactoComponent, data: { animation: 'contactoPage' } },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
