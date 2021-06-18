import { DettaglioProdottiComponent } from './dettaglio-prodotti/dettaglio-prodotti.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './contatti/contatti.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { HomeComponent } from './home/home.component';
import { BronzerComponent } from './bronzer/bronzer.component';
import { EyebrowComponent } from './eyebrow/eyebrow.component';
import { ErroreComponent } from './errore/errore.component';
import { RossettiComponent } from './rossetti/rossetti.component';

const routes: Routes = [
  {path: '',  component: HomeComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: 'prodotti', component: ProdottiComponent},
  {path: 'prodotti/:id',component: DettaglioProdottiComponent},
  {path: 'bronzer', component: BronzerComponent},
  {path: 'eyebrow', component: EyebrowComponent},
  {path: 'rossetti', component: RossettiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
