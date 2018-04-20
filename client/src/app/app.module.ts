import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AllPetsComponent } from './components/all-pets/all-pets.component';
import { CreatePetComponent } from './components/create-pet/create-pet.component';
import { DetailPetComponent } from './components/detail-pet/detail-pet.component';
import { EditPetComponent } from './components/edit-pet/edit-pet.component';

import { PetService } from './services/pet.service';

@NgModule({
  declarations: [
    AppComponent,
    AllPetsComponent,
    CreatePetComponent,
    DetailPetComponent,
    EditPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
