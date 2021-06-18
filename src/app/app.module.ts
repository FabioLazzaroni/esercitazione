import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { HomeComponent } from './home/home.component';
import { DettaglioProdottiComponent } from './dettaglio-prodotti/dettaglio-prodotti.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { BronzerComponent } from './bronzer/bronzer.component';
import { EyebrowComponent } from './eyebrow/eyebrow.component';
import { ErroreComponent } from './errore/errore.component';
import { RossettiComponent } from './rossetti/rossetti.component';
@NgModule({
  declarations: [	
    AppComponent,
    ContattiComponent,
    ProdottiComponent,
    HomeComponent,
    DettaglioProdottiComponent,
    BronzerComponent,
    EyebrowComponent,
    ErroreComponent,
    RossettiComponent
    
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

