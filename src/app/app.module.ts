import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './commons/header/header.component';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


import { FooterComponent } from './commons/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RechercheComponent } from './shared/components/recherche/recherche.component';
import { TitreComponent } from './shared/components/titre/titre.component';
import { FormationComponent } from './formations/formation/formation.component';
import { FormationsComponent } from './formations/formations.component';
import { CardComponent } from './formations/formation/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RechercheComponent,
    TitreComponent,
    FormationComponent,
    FormationsComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatButtonModule, MatDividerModule, MatIconModule,
    MatCardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
